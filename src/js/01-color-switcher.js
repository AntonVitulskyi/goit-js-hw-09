
const startChangeColorBtn = document.querySelector("[data-start]")
const stopChangeColorBtn = document.querySelector("[data-stop]")

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  let colorChangeTimer;

const toStartChangeColor = event => {
    document.body.style.backgroundColor = getRandomHexColor()
   event.target.disabled = true;
   stopChangeColorBtn.disabled = false;
   colorChangeTimer = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor(); 
  }, 1000)
} 

const toStopChangeColor = event => {
    event.target.disabled = true;
   startChangeColorBtn.disabled = false;
    clearInterval(colorChangeTimer)
}

startChangeColorBtn.addEventListener('click', toStartChangeColor)
stopChangeColorBtn.addEventListener('click', toStopChangeColor)