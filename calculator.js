var display = document.getElementById("display");

function toDisplay (x) {
    display.value += x;
}

function clearDisplay() {
    display.value="";
}

function clear() {
    var num1 = display.value;
    var len = num1.length-1;
    console.log(len);
    var num2 = num1.substring(0, len);
    display.value = num2;
}