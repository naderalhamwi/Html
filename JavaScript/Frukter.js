// JavaScript

// Globala variabler
let inputElem, msgElem;



// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    //skapa en arry som sparar inputs värde
    inputElem = [];
    inputElem[1] = document.getElementById("input1");
    inputElem[2] = document.getElementById("input2");
    inputElem[3] = document.getElementById("input3");
    msgElem = document.getElementById("message");
    
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

//denna funktionen ska få in ett sifra och hämta en bild utfrån inmatat tal.
function showfrukt(){
    let nr;//inmatat nummer från användaren från input1 
    let fruktUrl;
    nr = Number(inputElem[1].value);//conventera nr (String) till sifror 

    fruktUrl = "./img/pics/fruit" + Math.round(nr) + ".jpg";// hämta bilder från mappen utfrån bildens nummer med användning av nr
    console.log(fruktUrl + " \n" + "nummer är " + Math.round(nr));//visa värdet för nr

    //controllera om inmatning av input1 är ett nummer
    if(isNaN(nr)){
        console.log("det är inte num");
    }else{
        console.log("det är num");
    }

    //controllera att nr ligger mellan 1 och 5
    if(nr < 1 || nr > 5){
        console.log("NUMMER LIGGET INTE MELLAN 1 OCH 5");
    }else{
        console.log("nummer ligger mellan 1 och 5");
    }

}


/**
 * hämta från fil
 * "imt/pics/frukt1.jpg"
 * 
*/