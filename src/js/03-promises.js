import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const delayInputEl = document.querySelector('[name="delay"]');
const stepInputEl = document.querySelector('[name="step"]');
const amountInputEl = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

 return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }
  }, delay);
});
}

const onSubmitCreatePromise = event => {
  event.preventDefault();

let delay = Number(delayInputEl.value);

  for (let i = 1; i <= Number(amountInputEl.value); i += 1) {

    createPromise(i, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { fontSize: '18px'},)
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { fontSize: '18px'},)
    });

    delay += Number(stepInputEl.value);
  }
}

formEl.addEventListener('submit', onSubmitCreatePromise)
