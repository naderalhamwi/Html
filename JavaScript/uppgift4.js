let num1, num2, Ptext;
let input1Element, input2Element, resultatElement;


function init(){
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
    
    
    document.getElementById("smile").style.display  = "none";
    document.getElementById("tired").style.display  = "none";
}
window.onload = init;

function Sum(){
    let num11 = Number(num1.value);
    let num22 = Number(num2.value);

    let x = num11 + num22;

    document.getElementById("demo").innerHTML = num11 + " + " + num22 + " = "+   Math.round(x);

    num1.value = "";
    num2.value = "";
}

function kvadrera(){
    let vnumer = Number(num1.value);
    let knumer = Number(num2.value);

    let y = Math.pow(vnumer, knumer);
    
    document.getElementById("kvadrat").innerHTML =  vnumer + " upphöjd till  " + knumer +  " är  = " +  y;

    num1.value = "";
    num2.value = "";
}

function palindrome() {

    let text = Ptext.value;
    let reg = /[^A-Za-z0-9]/g;

    //omvandla alla stora bokstäver till små och tar bort mellanslag
    text = text.toLowerCase().replace(reg,'');

    if (text == text.split('').reverse().join('')) {
        alert(text + " är palindrome");
        document.getElementById("smile").style.display  = "flex";
        document.getElementById("palindrome").style.backgroundColor  = "green";
    }
    else {
        alert(text + " är inte palindrome");
        document.getElementById("tired").style.display  = "flex";
        document.getElementById("palindrome").style.backgroundColor  = "red";
    }

    Ptext.value = "" ;

}


function palindromeT(){
    // for lop for att kolla om den första lika med den sista 
    // sista index (length -1 -i)
    // let len = str.length;

    //rekosiv function ; som ropas stjälv ex:
    /**
     * function p (tex, start, slut){'
        * if(start < slut){
            * if(text[start] == text[slut]){
            *   (start+1, slut-1);
            * }else{
            *   return false;
            * }
            * return true;
        * }
     * }
     */
}

function doCalculation(){
    let length;
    let width;
    let area;
    let distance;
    let unit = ["Steg", "Fot", "Tum"];
    let conv = [90,30.48,2.54];

    length = Number(input1Element.value);
    width = Number(input2Element.value);

    area = length * width;


    resultatElement.innerHTML = "<p>Rektangelens area blir " + area + "m<sup>2</sup>.</p>";
    resultatElement.innerHTML += "<p>Eclipsen area blir " + Math.round(3.14159 * area / 4 ) + "m<sup>2</sup>.</p>";

    resultatElement.innerHTML += "<p>triangel area blir " + area * 1/2 + " fot.</p>";//triangel area

    resultatElement.innerHTML += "<p>Längden " + length +" meter blir: </p>";

    distance = length / conv[0] * 100;
    resultatElement.innerHTML += "<p>" + Math.round(distance) + " " + unit [0] + "</p>"

    distance = length / conv[1] * 100;
    resultatElement.innerHTML += "<p>" + Math.round(distance) + " " + unit [1] + "</p>"

    distance = length / conv[2] * 100;
    resultatElement.innerHTML += "<p>" + Math.round(distance) + " " + unit [2] + "</p>"

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