
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import image from '../../../assets/images/bg.png';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header className='my-6' style={{background:`url(${image})`}}>
           <div className="hero">
             <div className="hero-content flex-col lg:flex-row-reverse">
                 <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                    <DayPicker 
                    mode= 'single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    
                   
                    
                    />
                    <p>You have selected date: {format(selectedDate,'PP')}</p>

                     </div>
                 </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;