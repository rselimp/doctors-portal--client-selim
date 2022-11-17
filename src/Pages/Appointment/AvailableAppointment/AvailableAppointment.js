import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Sheard/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';



const AvailableAppointment = ({selectedDate}) => {
    //const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    //new query
    const date = format(selectedDate, 'PP')
    const {data:appointmentOptions =[],refetch,isLoading } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())
    });

    if(isLoading){
        return<Loading></Loading>
    }



    // useEffect( () =>{
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data =>setAppointmentOptions(data))
    // },[])

    return (
        <section className='my-16'>
        <p className='text-center font-bold text-secondary'>Available Appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentOptions.map(option =><AppointmentOption
                    key={option._id} appointmentOption ={option}
                    setTreatment ={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {   treatment &&
                <BookingModal
                selectedDate ={selectedDate}
            treatment ={treatment} setTreatment ={setTreatment}
            refetch ={refetch}
            ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;