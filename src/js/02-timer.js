import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const datePickerElement = document.querySelector("#datetime-picker")
const timerStartElement = document.querySelector("[data-start]:enabled")
const timerResetElement = document.querySelector("[data-reset]:enabled")

let selectedDate;
timerStartElement.disabled = true;
timerResetElement.disabled = true;
flatpickr(datePickerElement, {enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      timerStartElement.disabled = false;
      timerResetElement.disabled = false;
      selectedDate = selectedDates[0].getTime();

      if(selectedDate <= Date.now()){
        Notify.failure('Please choose a date in the future!', {position:'center-top', fontSize: '18px'},);
        timerStartElement.disabled = true;
        timerResetElement.disabled = true;
      } else {
        Notify.success('Please press "START"', {position:'center-top', fontSize: '18px'},);
      }
    },});

let intervalId;
  
const start = () => 
{
  datePickerElement.disabled = true;
  timerStartElement.disabled = true;
intervalId = setInterval(() =>
   {
    const diff = selectedDate - Date.now();
        if (diff <= 0) {
          stop();
          return;
        }
        
        const { days, hours, minutes, seconds } = getTimeComponents(diff);
  
        document.querySelector('[data-days]').textContent = addLeadingZero(days);
        document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
        document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
        document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
    }, 1000);
};

const addLeadingZero = (value) => {
      return String(value).padStart(2, '0');
};
  
const stop = () => 
{
      clearInterval(intervalId);
};
  
const getTimeComponents = (diff) => 
{
      const days = Math.floor(diff / 1000 / 60 / 60 / 24);
      const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const seconds = Math.floor(diff / 1000) % 60;
  
      return {
        days,
        hours,
        minutes,
        seconds,
      };
};

const reset = () => {
  location.reload()
}
 
timerStartElement.addEventListener('click', start)
timerResetElement.addEventListener('click', reset)