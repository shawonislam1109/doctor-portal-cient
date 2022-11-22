
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../coponent/AuthProvider/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email)
    const { data: BookingsData = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://doctor-portal-server-side.vercel.app/booking?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data
        }

    })



    return (
        <div>
            <h3 className="text-3xl">My Appointment</h3>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>TreatMent</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Payment</th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            BookingsData && BookingsData.map((bookings, i) => <tr key={bookings._id}>
                                <th>{i + 1}</th>
                                <td>{bookings.patient}</td>
                                <td>{bookings.treatment}</td>
                                <td>{bookings.slot}</td>
                                <td>{bookings.selectedDate}</td>
                                <td>
                                    {
                                        bookings.price && !bookings.paid && <Link to={`/dashboard/payment/${bookings._id}`}><button className='btn btn-sm btn-primary'>pay</button></Link>
                                    },
                                    {
                                        bookings.price && bookings.paid && <span className='text-primary
                                        '>Paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;