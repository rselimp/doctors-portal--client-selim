import React from 'react';
import image from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
     <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={image} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
            <div>
            <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
        </div>
    );
};

export default Banner;