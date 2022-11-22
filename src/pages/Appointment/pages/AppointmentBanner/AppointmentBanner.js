import React from 'react';
import chair from '../../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectData, setSelectData }) => {

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode='single'
                        selected={selectData}
                        onSelect={setSelectData}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;