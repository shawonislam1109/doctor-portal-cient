import React from 'react';

const AppointmentOption = ({ treatmentData, dataTreatment }) => {
    const { name, slots, price } = treatmentData;
    return (
        <div>
            <div className="card  text-center  text-primary-content">
                <div className="card-body">
                    <h2 className="text-2xl text-center text-primary ">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'try Anther day '}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                    <p>Price : ${price}</p>
                    <div className="card-actions justify-center">
                        <label

                            disabled={slots.length === 0}
                            onClick={() => dataTreatment(treatmentData)}
                            htmlFor="Book-Modal"
                            className="btn btn-primary text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;