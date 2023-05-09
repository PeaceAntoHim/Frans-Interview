import Day from '../components/day';
import '../styles/home.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Home() {

  const handleDayClick = (day: string) => {
    if (day === 'Monday') {
      // redirect("/list-item")
      location.href = "/list-item"
    } else {
      toast.info("You don't have any items for this day", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <section className='home-container'>
       <ToastContainer />
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