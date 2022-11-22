import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../coponent/AuthProvider/AuthProvider';

const AppointmentBook = ({ Treatment, setTreatment, selectData, refetch }) => {
    const date = format(selectData, "PP")
    const { name, slots, price } = Treatment;
    const { user } = useContext(AuthContext)

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const names = form.name.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            selectedDate: date,
            patient: names,
            treatment: name,
            slot,
            phone,
            email,
            price
        }

        fetch('https://doctor-portal-server-side.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    setTreatment(null);
                    toast.success('Booking confirmed')
                    refetch();
                }
            })

        console.log(booking)
    }

    return (
        <div>
            <input type="checkbox" id="Book-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Book-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="py-2 w-full font-bold rounded-md mt-3 pl-5 bg-slate-200">  {date}</p>
                    <form onSubmit={handleBooking}>
                        <select name='slot' className="select select-bordered py-2 w-full font-bold rounded-md mt-3 pl-5 bg-slate-200">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Full name" className="input input-bordered w-full rounded-md mt-3 pl-5 bg-slate-200" />
                        <input name='phone' type="number" placeholder="Phone number" className="input input-bordered w-full rounded-md mt-3 pl-5 bg-slate-200" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="email" className="input input-bordered w-full rounded-md mt-3 pl-5 bg-slate-200" />
                        <button className="py-3 w-full text-center font-bold text-white rounded-md mt-3 pl-5 bg-slate-900">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBook;