import React from 'react';

const ConfrimModal = ({ title, message, cancelModal, id, doctorDelete }) => {


    return (
        <div>
            <input type="checkbox" id="DoctorModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => doctorDelete(id)} htmlFor="DoctorModal" className="btn btn-error">Delete</label>
                        <button className='btn  btn-ghost' onClick={cancelModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfrimModal;