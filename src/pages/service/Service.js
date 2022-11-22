import React from 'react';

const Service = ({ service }) => {
    const { name, description, image } = service;
    return (
        <div>

            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;