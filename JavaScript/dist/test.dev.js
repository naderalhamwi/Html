"use strict";

var num1, num2, Ptext;
var input1Element, input2Element, resultatElement;

function init() {
  num1 = document.getElementById("num1");
  num2 = document.getElementById("num2");
  Ptext = document.getElementById("PalindromeText");
  document.getElementById("sum").onclick = Sum;
  document.getElementById("kvadrera").onclick = kvadrera;
  document.getElementById("palindrome").onclick = palindrome;
  input1Element = document.getElementById("input1");
  input2Element = document.getElementById("input2");
  resultatElement = document.getElementById("result");
  document.getElementById("runBtn").onclick = doCalculation;
}

window.onload = init;

function Sum() {
  var num11 = Number(num1.value);
  var num22 = Number(num2.value);
  var x = num11 + num22;
  document.getElementById("demo").innerHTML = num11 + " + " + num22 + " = " + x;
  num1.value = "";
  num2.value = "";
}

function kvadrera() {
  var vnumer = Number(num1.value);
  var knumer = Number(num2.value);
  var y = Math.pow(vnumer, knumer);
  document.getElementById("kvadrat").innerHTML = vnumer + " upphöjd till  " + knumer + " är  = " + y;
  num1.value = "";
  num2.value = "";
}

function palindrome() {
  var text = Ptext.value;

  if (text == text.split('').reverse().join('')) {
    alert(text + " är palindrome");
  } else {
    alert(text + " är inte palindrome");
  }

  Ptext.value = "";
}

function doCalculation() {
  var length;
  var width;
  var area;
  var distance;
  var unit = ["Steg", "Fot", "Tum"];
  var conv = [90, 30.48, 2.54];
  length = Number(input1Element.value);
  width = Number(input2Element.value);
  area = length * width;
  resultatElement.innerHTML = "<p>Rektangelens area blir " + area + "m<sup>2</sup>.</p>";
  resultatElement.innerHTML += "<p>Eclipsen area blir " + 3.14159 * area / 4 + "m<sup>2</sup>.</p>";
  resultatElement.innerHTML += "<p>triangel area blir " + area * 1 / 2 + " fot.</p>"; //triangel area

  resultatElement.innerHTML += "<p>Längden " + length + " meter blir: </p>";
  distance = length / conv[0] * 100;
  resultatElement.innerHTML += "<p>" + distance + " " + unit[0] + "</p>";
  distance = length / conv[1] * 100;
  resultatElement.innerHTML += "<p>" + distance + " " + unit[1] + "</p>";
  distance = length / conv[2] * 100;
  resultatElement.innerHTML += "<p>" + distance + " " + unit[2] + "</p>";
  input1Element.value = "";
  input2Element.value = "";
}
/** 
 * arry lägg till .push("text");
 * Math.round(math.random()*10);
 * windwo.clarinterval();
 * 
 * 
*/