var prompter = prompt("What Is Your Name");

var number1=Number(prompt("What is your Total Bill after Tax?"));
var number2=Number(prompt("What is your Total Tip?"));
var answer=(number1+number2);

document.body.querySelector("#cool").innerHTML=answer;
document.body.querySelector("#LessCool").innerHTML=prompter;