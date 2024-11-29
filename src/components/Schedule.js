import { useState } from 'react';
import Calendar from 'react-calendar';
import './Schedule.css';

export default function Schedule(){
    const [value, onChange] = useState(new Date());
    return (
        <div className='calendar-container'>
          <div className="css">
            <Calendar onChange={onChange} value={value}></Calendar>
          </div>
        </div>
    )
}