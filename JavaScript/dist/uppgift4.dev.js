"use strict";

var input1Element, input2Element, resultatElement;

function init() {
  input1Element = document.getElementById("input1");
  input2Element = document.getElementById("input2");
  resultatElement = document.getElementById("result");
  document.getElementById("runBtn").onclick = doCalculation;
}

window.onload = init;

function doCalculation() {
  var length;
  var width;
  var area1;
  var distance;
  var unit = ["Steg", "Fot", "Tum"];
  var conv = [90, 30.48, 2.54];
  length = Number(input1Element.value);
  width = Number(input2Element.value);
  area1 = length * width;
  resultatElement.innerHTML = "<p>Rektangelens area blir " + area1 + "m<sup>2</sup>.</p>";
  resultatElement.innerHTML += "<p>Eclipsen area blir " + 3.14159 * area1 / 4 + "m<sup>2</sup>.</p>";
  resultatElement.innerHTML += "<p>triangel area blir " + area1 * 1 / 2 + "m<sup>2</sup>.</p>"; //triangel area

  resultatElement.innerHTML += "<p>Längden " + length + " meter blir: </p>";
  distance = length / conv[0] * 100;
  resultatElement.innerHTML += "<p>" + distance + " " + unit[0] + "</p>";
  distance = length / conv[1] * 100;
  resultatElement.innerHTML += "<p>" + distance + " " + unit[1] + "</p>";
  distance = length / conv[2] * 100;
  resultatElement.innerHTML += "<p>" + distance + " " + unit[2] + "</p>";
  var txt = "";
  conv.forEach(myFunction);
  document.getElementById("demo").innerHTML = txt;

  function myFunction(value, index, array) {
    txt = txt + +"<br>";
  }
}