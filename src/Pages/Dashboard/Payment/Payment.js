import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe('pk_test_51M6GGgLEil00zfkwukAhfa8j8lqqgbeofFJm0jbG6Co65ZTcGKww02SZFu4FEVr0gMGCO3eJoYbrdIcsEKT2J2tE00aef6UXL8');
//console.log(stripePromise)
const Payment = () => {
    const booking = useLoaderData();
    const { treatment, price, appointmentDate, slot } = booking
    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-xl">Please Pay <strong>${price}</strong> for your  appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom></CheckoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;