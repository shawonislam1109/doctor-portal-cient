import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentBook from '../AppointmentBook/AppointmentBook';
import AppointmentOption from '../AppointmentOpiton/AppointmentOption';

const AvailableAppoint = ({ selectData }) => {
    const [Treatment, setTreatment] = useState(null)
    const date = format(selectData, 'PP');
    const { data: timeOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: () => fetch(`https://doctor-portal-server-side.vercel.app/appointmentOption?date=${date}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <div className='text-center mt-20'>
            <button className="btn loading">loading</button>
        </div>
    }

    return (
        <div>
            <p className='text-center font-bold text-primary mt-16'>Available Appointments on : {format(selectData, 'PP')} </p>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    timeOption.map(treatmentData => <AppointmentOption
                        key={treatmentData._id}
                        treatmentData={treatmentData}
                        dataTreatment={setTreatment}
                    />)
                }
            </div>
            {Treatment && <AppointmentBook
                Treatment={Treatment}
                refetch={refetch}
                selectData={selectData}
                setTreatment={setTreatment}
            />}
        </div>
    );
};

export default AvailableAppoint;