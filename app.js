// setTimeout
// our function to change the bg
function changeBG() {
  // setTimeout takes 2 paramters - a callback function, and a number
  // the callfunction will run AFTER the elapsed milliseconds has passed
  setTimeout(function () {
    document.body.style.backgroundColor = "teal";
  }, 5000);
}

const bgBtn = document.getElementById("bgBtn");
bgBtn.addEventListener("click", changeBG); //this line runs first
//---------------------------------------------------------------------------------
//second part
// setInterval
const plusP = document.getElementById("plusP"); //it gets the location from here

function addPlus() {
  plusP.textContent = `${plusP.textContent} +`; //this line runs second
}

setInterval(addPlus, 1000); //this line runs first
