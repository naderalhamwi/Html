// JavaScript

// Globala variabler
let inputElem, msgElem;
let fruitNames, fruitNr;
let selFruitsElem;


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    fruitNr = 0;

    //skapa en arry som sparar inputs värde
    inputElem = [];
    inputElem[1] = document.getElementById("input1");
    inputElem[2] = document.getElementById("input2");
    inputElem[3] = document.getElementById("input3");

    fruitNames = ["ingen frukt", "äpple", "banan", "citron", "apelsin", "päron"];

    msgElem = document.getElementById("message");
    selFruitsElem = document.getElementById("selectedFruits");
    
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

//denna funktionen ska få in ett sifra och hämta en bild utfrån inmatat tal.
function showfrukt(){
    let nr;//inmatat nummer från användaren från input1 
    let fruktUrl;
    nr = Number(inputElem[1].value);//conventera nr (String) till sifror 
    
    //controllera om inmatning av input1 är ett nummer
    if(isNaN(nr)){
        msgElem.innerHTML += "<p>" +"ingen nummer lags i fältet" +"</p>";
        return;
    }
    //controllera att nr ligger mellan 1 och 5
    if(nr < 1 || nr > 5){
        msgElem.innerHTML += "<p>" +"NUMMER LIGGET INTE MELLAN 1 OCH 5" +"</p>";
        return;
    }  
    
    nr = parseInt(nr);
    inputElem[1].value = nr; 
    fruitNr = nr;

    fruktUrl = "/img/pics/fruit" + Math.round(nr) + ".jpg";// hämta bilder från mappen utfrån bildens nummer med användning av nr
    document.getElementById("fruitImg").src = fruktUrl;
}
function KontrolleraFNamn(){
    let name;
    name = inputElem[2].value;
    if(name == ""){
        msgElem.innerHTML = "<p>"+ "välja en frukt först" +"</p>" ;
        return;
    }
    if(name == fruitNames[fruitNr]){
        msgElem.innerHTML = "<p>"+ "Rätt namn" +"</p>" ;
    }else{
        msgElem.innerHTML = "<p>"+ "Fel Namn" +"</p>" ;
    }
}