import React from 'react';
import image1 from '../../../assets/images/fluoride.png';
import image2 from '../../../assets/images/cavity.png';
import image3 from '../../../assets/images/whitening.png';
import CardServies from './CardServies';

const Services = () => {
    const cardServices =[
        {
            id:1,
            name:'Fluoride Treatment',
            description:'',
            icon: image1,
        },
        {
            id:1,
            name:'Cavity Filling',
            description:'',
            icon: image2
        },
        {
            id:1,
            name:'Teeth Whitening',
            description:'',
            icon: image3
        },
    ]
    return (
        
        <div className='mt-16'>
         <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
         </div>
         <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardServices.map(service =><CardServies key={service.id} service={service}></CardServies>)
            }
         </div>
        </div>
    );
};

export default Services;