import React from 'react';
import quote from '../../assets/icons/quote.svg';

import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';



const Testimonial = () => {

    const reviews =[
        {
            _id:1,
            name:'Winson Henrey',
            img:people1,
            review:'It is a long Established fact that a reader will be distractedby the readable content of a page when looking at its layout.Provident cupiditate voluptatem et in',
            location:'California',     
        },
        {
            _id:2,
            name:'Winson Henrey',
            img:people2,
            review:'It is a long Established fact that a reader will be distractedby the readable content of a page when looking at its layout.Provident cupiditate voluptatem et in',
            location:'California',     
        },
        {
            _id:3,
            name:'Winson Henrey',
            img:people3,
            review:'It is a long Established fact that a reader will be distractedby the readable content of a page when looking at its layout.Provident cupiditate voluptatem et in',
            location:'California',     
        },
    ]



    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(rvw =><Review key={rvw._id} rvw={rvw}></Review>)
                }
                    
            </div>
        </section>
    );
};

export default Testimonial;