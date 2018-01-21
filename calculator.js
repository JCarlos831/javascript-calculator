var display = document.getElementById("display");
var operator = "";
var num1 = "";
var num2 = "";
var number = "";

function toDisplay (x) {
    display.value += x;
}

function clearDisplay() {
    display.value="";
}

function deleteOne() {
    var num1 = display.value;
    var length = num1.length-1;
    var num2 = num1.substring(0, length);
    display.value = num2;
}

function equals (){
  display.value = eval(display.value);
}

