import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoint from '../AvilableAppoiant/AvailableAppoint';

const Appointment = () => {
    const [selectData, setSelectData] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                selectData={selectData}
                setSelectData={setSelectData}
            />
            <AvailableAppoint
                selectData={selectData}
                setSelectData={setSelectData}
            />
        </div>
    );
};

export default Appointment;