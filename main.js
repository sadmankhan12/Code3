'use strict';

//values printed
const secondsElt = document.getElementById('seconds');
const minutesElt = document.getElementById('minutes');
const hoursElt = document.getElementById('hours');
let startButton = document.getElementById("start");

//initial values
let secondsNumner = 0;
let minutesNumber = 0;
let hoursNumber = 0;
let stopPressed = 0;
/* 
The 'startPressed' button handles the execution of the incrementation mechanism, so it could run properly even when the user press the 'start' button multiple times
*/
let startPressed = 0;
start.onclick = function() {
  startPressed++;
  startButton.style.color = 'black';
  startButton.textContent = "Start";

  if (startPressed === 1 || stopPressed === true) {
    stopPressed = 0;

    //incrementation  mechanism
    let timer = setInterval(() => {
      secondsNumner++;
      secondsElt.textContent = secondsNumner
      if (secondsNumner >= 60) {
        minutesNumber++;
        secondsNumner = 0;
        minutesElt.textContent = minutesNumber
      }
      if (minutesNumber >= 60) {
        hoursNumber++;
        hoursElt.textContent = hoursNumber
      }
    }, 1000)

    stopTimer.onclick = function() {
      clearInterval(timer);
      startButton.textContent = 'Resume';
      startButton.style.color = 'red';
      stopPressed = true
    }

    reset.onclick = function() {
      clearInterval(timer);
      startPressed = 0;

      //Changing the values printed
      secondsElt.textContent = '00';
      minutesElt.textContent = '00';
      hoursElt.textContent = '00';
      start.textContent = 'Start';
      startButton.style.color = 'black';

      //Changing the initial values
      secondsNumner = 0;
      minutesNumber = 0;
      hoursNumber = 0;
    }
  }
}