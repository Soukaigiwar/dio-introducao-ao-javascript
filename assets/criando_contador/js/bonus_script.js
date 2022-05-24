//  VERSION

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

document.getElementById("decrement").addEventListener("click", decrement, false);
document.getElementById("increment").addEventListener("click", increment, false);


function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0) document.getElementById("currentNumber").style.color = "#F00";
    if(currentNumber <= -10) {
        document.getElementById("decrement").disabled = "true";
        document.getElementById("increment").enabled = "true";
    }
}
function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0) document.getElementById("currentNumber").style.color = "#FFF";
    if(currentNumber >= 10) {
        document.getElementById("decrement").enabled = "true";
        document.getElementById("increment").disabled = "true";
    }
}