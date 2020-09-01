let player;
let cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9; 

let gren = "springgreen";

function init(){

    cell1 = document.getElementById("Cell1");
    cell2 = document.getElementById("Cell2");
    cell3 = document.getElementById("Cell3");
    cell4 = document.getElementById("Cell4");
    cell5 = document.getElementById("Cell5");
    cell6 = document.getElementById("Cell6");
    cell7 = document.getElementById("Cell7");
    cell8 = document.getElementById("Cell8");
    cell9 = document.getElementById("Cell9");

    document.getElementById("sliderBottom").style.opacity = "1";
    document.getElementById("sliderBottom").style.opacity = "1";
    document.getElementById("sliderBottom").style.height = "660px";
    document.getElementById("sliderBottom").style.marginTop = "310px";
    document.getElementById("sliderBottom").style.pointerEvents = "none";

    document.getElementById("playGround").style.display = "none";
}
window.onload = init;

function playerX(){
    player = 1;
    document.getElementById("main").style.transition = "all 1s";
    document.getElementById("main").style.backgroundColor = "#393939";
    
    document.getElementById("sliderBottom").style.height = "310px";
    document.getElementById("sliderBottom").style.marginTop = "0px";
    document.getElementById("sliderBottom").style.transition = "all 1.5s";
    document.getElementById("sliderBottom").style.backgroundColor = gren;
    document.getElementById("sliderBottom").style.boxShadow = "0px 5px 10px black";
    
    document.getElementById("playGround").style.display = "block";
}

function playerO(){
    player = 0;
    document.getElementById("main").style.transition = "all 1s";
    document.getElementById("main").style.backgroundColor = "#393939";

    document.getElementById("sliderBottom").style.height = "310px";
    document.getElementById("sliderBottom").style.marginTop = "0px";
    document.getElementById("sliderBottom").style.transition = "all 1.5s";
    document.getElementById("sliderBottom").style.backgroundColor = "tomato";
    document.getElementById("sliderBottom").style.boxShadow = "0px 5px 10px black";

    document.getElementById("playGround").style.display = "block";
}