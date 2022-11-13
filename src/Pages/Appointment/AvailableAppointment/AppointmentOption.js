import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({appointmentOption, setTreatment}) => {
    const {name,slots} = appointmentOption;
    return (
<div className="card shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className="card-title text-primary font-bold">{name}</h2>
    <p>{slots.length >0 ? slots[0]: 'try another day'}</p>
    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
    <div className="card-actions justify-center">
    <label 
        onClick={ () =>setTreatment(appointmentOption)}
        disabled ={slots.length ===0}
        htmlFor="booking-modal" className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white'>
        Book Appointment
        </label>
    </div>
  </div>
</div>
    );
};

export default AppointmentOption;