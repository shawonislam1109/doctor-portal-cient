import React from 'react';
import icons from '../../assets/icons/quote.svg'
import reviewMan1 from '../../assets/images/people1.png'
import reviewMan2 from '../../assets/images/people2.png'
import reviewMan3 from '../../assets/images/people3.png'

const Testimonial = () => {
    return (
        <div className='my-20'>
            <section className='flex justify-between '>
                <div>
                    <p className='font-bold text-primary'>Testimonial</p>
                    <h1 className='text-5xl'>What our patients Says</h1>
                </div>
                <div>
                    <img className='w-44' src={icons} alt="" />
                </div>

            </section>
            <section className='grid md:grid-cols-2 gap-6 mt-5 lg:grid-cols-3'>
                <div className='shadow-xl p-5'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex mt-5'>
                        <img className='w-20 border-4 border-primary rounded-full' src={reviewMan1} alt="" />
                        <div className='ml-2'>
                            <h3 className='text-xl mt-2'>Winson Herry</h3>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-xl p-5'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex mt-5'>
                        <img className='w-20 border-4 border-primary rounded-full' src={reviewMan2} alt="" />
                        <div className='ml-2'>
                            <h3 className='text-xl mt-2'>Winson Herry</h3>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-xl p-5'>
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex mt-5'>
                        <img className='w-20 border-4 border-primary rounded-full' src={reviewMan3} alt="" />
                        <div className='ml-2'>
                            <h3 className='text-xl mt-2'>Winson Herry</h3>
                            <p>California</p>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Testimonial;