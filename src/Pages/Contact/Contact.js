import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div className='mt-10 pb-4' style={{background:`url(${appointment})`}}>
            <div className='text-center py-4 '>
                <h2 className='text-xl text-primary'>Contact Us</h2>
                <h3 className='text-3xl text-white'>Stay connected with us</h3>
            </div>
            <form className=' grid gap-4 grid-cols-1 justify-items-center mb-4'>
            
            <input type="text" placeholder="Email Address" className="input input-bordered input-error w-full max-w-xs" />      
            <input type="text" placeholder="Subject" className="input input-bordered input-error w-full max-w-xs" />         
            <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Your Message"></textarea>
            </form>
            <div className='text-center mb-4'>
            <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;