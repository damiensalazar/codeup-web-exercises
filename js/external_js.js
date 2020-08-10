"use strict";


console.log("Hello from external JavaScript");

var welcome;
welcome = "Welcome to my Website!"
alert(welcome)

var question1 = prompt('What is your favorite color ')
console.log('Great my favorite color is ' + question1 + ' too!' );

var littleMermaidDays = prompt("How Many Days Did You Rent The Little Mermaid?");
var brotherBearDays = prompt("How Many Days Did You Rent The Brother Bear?");
var herculesDays = prompt("How Many Days Did You Rent Hercules?");
var blockBusterBill = (+littleMermaidDays + +brotherBearDays + +herculesDays) * 3;
alert("Total Blockbuster Bill: $ " + blockBusterBill);

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var googleHours = prompt("How Many Hours Did You Work For Google This Week?");
var amazonHours= prompt("How Many Hours Did You Work For Amazon This Week?");
var facebookHours = prompt("How Many Hours Did You Work For Facebook This Week?");
var weeksPay = (+googleHours * googleRate) + (+amazonHours * amazonRate) + (+facebookHours * facebookRate);
console.log("You Made $ " + weeksPay + " This Week.");