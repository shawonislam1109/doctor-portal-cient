import React from 'react';
import Banner from '../Banner/Banner';
import DoctorInfo from '../DoctorInfo/DoctorInfo';
import InfoCards from '../InfoCards/InfoCards';
import ServiceData from '../service/ServiceData';
import SingIng from '../SingIng/SingIng';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <ServiceData />
            <DoctorInfo />
            <Testimonial />
            <SingIng />
        </div>
    );
};

export default Home;