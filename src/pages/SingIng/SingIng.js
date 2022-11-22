import React from 'react';
import './Singing.css'

const SingIng = () => {
    return (
        <div className='backgrounds my-20 p-20'>
            <div className='w-96 mx-auto'>
                <input type="text" placeholder="Type here" className="input w-full mb-3 " />
                <br />
                <input type="text" placeholder="Type here" className="input w-full my-3 " />
                <br />
                <textarea className="textarea w-full h-60 textarea-primary" placeholder="Bio"></textarea>
                <br />
                <div className='text-center mt-5'>
                    <button className="btn text-white btn-primary bg-gradient-to-r from-primary to-secondary">Submit</button>
                </div>
            </div>

        </div>
    );
};

export default SingIng;