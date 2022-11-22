import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckoutFrom = ({ payment }) => {
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [cardTransactionId, setCardTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");

    const { price, email, patient, _id } = payment;
    console.log(price)


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctor-portal-server-side.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
            });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }
        setCardSuccess('')
        setProcessing(true)
        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: patient,
                    email: email,
                },
            },
        }
        );
        if (confirmError) {
            setCardError(confirmError.message)
        }

        if (paymentIntent.status === "succeeded") {
            const payment = {
                price,
                transaction: paymentIntent.id,
                email,
                bookingId: _id
            }
            console.log('paymentIntent', paymentIntent)
            setCardSuccess('Congrats ! your payment successfully')
            setCardTransactionId(paymentIntent.id)
            fetch('https://doctor-portal-server-side.vercel.app/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
        setProcessing(false)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary mt-5 ' type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                cardSuccess && <div>
                    <p className=' text-green-400'>{cardSuccess}</p>
                    <p>Your transactions Id <span className=' font-bold text-rose-500'>{cardTransactionId}</span></p>

                </div>
            }
        </div>
    );
};

export default CheckoutFrom;