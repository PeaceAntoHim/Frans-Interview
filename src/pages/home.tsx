// import { useState } from 'react';
import Day from '../components/day';
// import ItemList from '../components/itemList';
import '../styles/home.css';



export default function Home() {
  // const [selectedDay, setSelectedDay] = useState("");

  const handleDayClick = (day: string) => {
    if (day === 'Monday') {
      // setSelectedDay('Monday');
      window.location.href = "/list-item";
    } else {
      alert("You don't have any items for this day");
    }
  };

  return (
    <section className='home-container'>
      <div className='home-wrapper'>
        <div className='heading'>
          <h2>Things To Buy!</h2>
        </div>
        <div className='wrapper-home'>
          <Day
            style={{ backgroundColor: '#FFAACF' }}
            onClick={() => handleDayClick('Monday')}
          >
            Monday
          </Day>
          <Day
            style={{ backgroundColor: '#F6C391' }}
            onClick={() => handleDayClick('Tuesday')}
          >
            Tuesday
          </Day>
          <Day
            style={{ backgroundColor: '#6096B4' }}
            onClick={() => handleDayClick('Thursday')}
          >
            Thursday
          </Day>
          <Day
            style={{ backgroundColor: '#D9ACF5' }}
            onClick={() => handleDayClick('Friday')}
          >
            Friday
          </Day>
        </div>
      </div>
    </section>
  )
}