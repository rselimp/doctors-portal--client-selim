import React from 'react';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointMent from '../MakeAppointment/MakeAppointMent';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointMent></MakeAppointMent>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;