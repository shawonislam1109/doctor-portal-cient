import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';
const stripePromise = loadStripe(process.env.REACT_APP_Stripe_key);

const Payment = () => {
    const payment = useLoaderData();
    const { price, treatment, selectedDate, } = payment;

    return (
        <div>
            <h1 className='text-3xl'>Payment for {treatment}</h1>
            <h1 className='text-2xl '> please pay <strong>${price}</strong> for your appointment on {selectedDate} </h1>
            <div className='w-96 my-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom payment={payment}></CheckoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;