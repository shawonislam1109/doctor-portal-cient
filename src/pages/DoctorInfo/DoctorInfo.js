import React from 'react';
import './doctor.css'
import doctor from '../../assets/images/doctor-small.png'

const DoctorInfo = () => {
    return (

        <div className="hero background  my-24">
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className=" -mb-5 -mt-32 rounded-lg  lg:w-2/4 hidden md:block" alt='' />
                <div>
                    <h1 className="text-primary">Appointment</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;