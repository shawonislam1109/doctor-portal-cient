import React from 'react';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: ' Open 9.00 am to 5.00 everyDay',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 3,
            name: 'Visit our locations ',
            description: 'Brooklyn, Ny 10036 , USA  ',
            icon: marker,
            bgClass: 'bg-accent '
        },
        {
            id: 1,
            name: 'Contact us Now ',
            description: '+09887393838',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },

    ]
    return (
        <div className='grid lg:grid-cols-3  md:grid-cols-2 gap-6 mt-5'>
            {
                cardData.map(data => <InfoCard key={data.id} cardData={data}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;