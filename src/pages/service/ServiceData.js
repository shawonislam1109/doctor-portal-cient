import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import image from '../../assets/images/treatment.png'
import Service from './Service';

const ServiceData = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            image: fluoride,
            description: 'One of the most powerful service from my here'
        },
        {
            id: 2,
            name: 'Cavity Filling ',
            image: cavity,
            description: 'One of the most powerful service from my here'
        },
        {
            id: 3,
            name: 'Teeth Whitening ',
            image: teeth,
            description: 'One of the most powerful service from my here'
        },
    ]
    return (
        <div>
            <p className='text-primary  mt-20 text-center font-bold'>OUR SERVICE</p>
            <h1 className='text-5xl mb-10 text-center'> Service Our Provide </h1>
            <div className='grid md:grid-cols-2 gap-4 lg:grid-cols-3 mb-5'>

                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

            <div className="hero p-10 md:text-center mb-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="w-96 rounded-lg shadow-2xl" alt='' />
                    <div className=''>
                        <h1 className="text-5xl font-bold text-center">Exceptional Dental <br /> Care, on Your Terms</h1>
                        <p className="py-6 text-start md:ml-48">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. The point <br /> of using Lorem Ipsumis that it has a more-or-less normal <br /> distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop <br /> publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceData;