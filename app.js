  const display = document.querySelector("#calculator-input");
  let isClear = false;
  let tempString = "";
  let operatorType = "";
  let isContinue = true;

  function toDisplay(clickValue) {
  	switch (clickValue) {
  		case "=":
  			if (tempString != "" && operatorType != "") {
  				display.value = calculations(tempString, display.value, operatorType);
  				isContinue = false;
  				operatorType = "";
  			}
  			break;
  		case "+":
  		case "-":
  		case "*":
  		case "/":
  		case "%":
  			// If the stored operator is not empty   Represents continuous operation 
  			if (operatorType != "" && !isContinue) { // Perform calculations first 
  				tempString = calculations(tempString, display.value, operatorType);
  				isClear = true;
  				operatorType = clickValue;
  			} else {
  				tempString = display.value; // After clicking the operator   Pre stored character 
  				isClear = true; // Represents the click operator 
  				operatorType = clickValue; // Stored operator 
  			}
  			isContinue = true;
  			break;
  		case "ac": //Clears the Display
  			display.value = "";
  			isClear = false;
  			tempString = "";
  			operatorType = "";
  			break;
  		case "c": //Deletes last number clicked
  			let num1 = display.value;
  			let length = num1.length - 1
  			let num2 = num1.substring(0, length);
  			display.value = num2;
  			isClear = false;
  			tempString = "";
  			operatorType = "";
  			break;
  		default: //Number clicked displays 
  			if (display.value === "0") {
  				"";
  			} else {
  				display.value;
  			}
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