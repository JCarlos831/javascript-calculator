/* global $ */

$(document).ready(function(){

	var number = "";
    var newNumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    
    $("#numbers a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
    });
    $("#operators a").not("#equals").click(function(){
		operator = $(this).text();
		newNumber = number;
		number = "";
		totaldiv.text("0");
    });
    $("#clear,#clearAll").click(function(){
		number = "";
		totaldiv.text("0");
		if (document.getElementById() === "clearAll") {
			newNumber = "";
		}
    });

    $("#equals").click(function(){
    	if (operator === "+"){
    		number = (parseInt(number, 10) + parseInt(newNumber,10)).toString(10);
    	} else if (operator === "-"){
    		number = (parseInt(newNumber, 10) - parseInt(number,10)).toString(10);
    	} else if (operator === "/"){
    		number = (parseInt(newNumber, 10) / parseInt(number,10)).toString(10);
    	} else if (operator === "*"){
    		number = (parseInt(newNumber, 10) * parseInt(number,10)).toString(10);
    	}
    	totaldiv.text(number);
    	
    	number = "";
    });
});