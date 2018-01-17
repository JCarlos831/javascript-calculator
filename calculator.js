/* global $ */

$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    
    $("#numbers a").not("#clear, #clearAll").click(function(){
        number += $(this).html();
        totaldiv.text(number);
        testNumLength(number);
    });
    
    $("#operators a").not("#equals").click(function(){
        operator = $("#button").text();
        newnumber = number;
        number = "";
        totaldiv.text("0");
    });

    $("#clear, #clearAll").click(function(){
       number = "";
       totaldiv.text("0");
       if(document.getElementById() === "clearAll") {
           newnumber = "";
       }
    });

    $("#equals a").click(function(){
        if(operator === "+") {
            parseInt(newnumber, 10);
            parseInt(number, 10);
            
        }
    });
});