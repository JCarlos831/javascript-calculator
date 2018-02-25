  var display = document.querySelector("#calculator-input");
  var isClear = false;
  var tempStringing = "";
  var calculatorType = "";
  var isContinue = true;
  
  function toDisplay(clickValue) {
    switch (clickValue) {
      case "=":
        if (tempString != "" && calculatorType != "") {
          display.value = calculations(tempString, display.value, calculatorType);
          isContinue = false;
          calculatorType = "";
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
        // If the stored operator is not empty   Represents continuous operation 
        if (calculatorType != "" && !isContinue) { // Perform calculations first 
          tempString = calculations(tempString, display.value, calculatorType);
          isClear = true;
          calculatorType = clickValue;
        } else {
          tempString = display.value; // After clicking the operator   Pre stored character 
          isClear = true;// Represents the click operator 
          calculatorType = clickValue;// Stored operator 
        }
        isContinue = true;
        break;
      case "ac":
        display.value = "0";
        isClear = false;
        tempString = "";
        calculatorType = "";
        break;
      case "c":
        var num1 = display.value;
        var length = num1.length-1
        var num2 = num1.substring(0, length);
        display.value = num2;
        isClear = false;
        tempString = "";
        calculatorType = "";
        break;
      default:// The regular numeric button hits 
        display.value = display.value == "0" ? "" : display.value;
        isContinue = false;
        if (isClear) {
          display.value = "";
          display.value += clickValue;
          isClear = false;
        } else {
          display.value += clickValue;
        }
        break;
    }
  }

  function calculations(num1, num2, operator) {
    switch (operator) {
      case "+":
        return Number(num1) + Number(num2);
      case "-":
        return Number(num1) - Number(num2);
      case "*":
        return Number(num1) * Number(num2);
      case "/":
        return Number(num1) / Number(num2);
      case "%":
        return Number(num1) % Number(num2);
      default:
        break;
    }
   }