let player;
let cell;
let i;
let B;
let A = 0;
let J = 0;

let purble = "#ff1aff";
let darkpurple = "#3d0099";

function init(){

    cell = [];
    cell[0] = document.getElementById("Cell1");
    cell[1] = document.getElementById("Cell2");
    cell[2] = document.getElementById("Cell3");
    cell[3] = document.getElementById("Cell4");
    cell[4] = document.getElementById("Cell5");
    cell[5] = document.getElementById("Cell6");
    cell[6] = document.getElementById("Cell7");
    cell[7] = document.getElementById("Cell8");
    cell[8] = document.getElementById("Cell9");

    cell[0].value = 0;
    cell[1].value = 0;
    cell[2].value = 0;
    cell[3].value = 0;
    cell[4].value = 0;
    cell[5].value = 0;
    cell[6].value = 0;
    cell[7].value = 0;
    cell[8].value = 0;


    document.getElementById("reset").style.opacity = "0";

    document.getElementById("sliderBottom").style.opacity = "1";
    document.getElementById("playGround").style.display = "none";

    document.getElementById("sliderBottom").style.height = "660px";
    document.getElementById("sliderBottom").style.marginTop = "310px";
}
window.onload = init;

function reset(){
    return location.reload();
}


function playerX(){
    if(A != 1 && J == 9){
        document.getElementById("reset").style.opacity = "1";
    }else{
        checWin();
    }

    player = 1;

    document.getElementById("sliderBottom").style.color = "white";
    document.getElementById("main").style.backgroundColor = "#393939";
    document.getElementById("sliderBottom").style.backgroundColor = purble;
    
    document.getElementById("sliderBottom").innerHTML = "<h1>" + "X" + "</h1>";
    
    document.getElementById("playGround").style.display = "block";
    document.getElementById("sliderBottom").style.height = "310px";
    document.getElementById("sliderBottom").style.marginTop = "0px";

    document.getElementById("main").style.transition = "all 1s";
    document.getElementById("sliderBottom").style.transition = "all 1.5s";
    document.getElementById("sliderBottom").style.boxShadow = "0px 5px 10px black";
    
    document.getElementById("tic").style.pointerEvents = "none";
    document.getElementById("tac").style.pointerEvents = "none";
    document.getElementById("sliderBottom").style.pointerEvents = "none";

    document.getElementById("linkHome").style.pointerEvents = "none";
}

function playerO(){
    if(A != 1 && J == 9){
        document.getElementById("reset").style.opacity = "1";
    }else{
        checWin();
    }
    player = 2;

    document.getElementById("sliderBottom").style.color = "white";
    document.getElementById("main").style.backgroundColor = "#393939";
    document.getElementById("sliderBottom").style.backgroundColor = darkpurple;
    document.getElementById("sliderBottom").style.boxShadow = "0px 5px 10px black";
    
    document.getElementById("sliderBottom").innerHTML = "<h1>" + "O" + "</h1>";
    
    document.getElementById("main").style.transition = "all 1s";
    document.getElementById("sliderBottom").style.transition = "all 1.5s";

    document.getElementById("playGround").style.display = "block";
    document.getElementById("sliderBottom").style.height = "310px";
    document.getElementById("sliderBottom").style.marginTop = "0px";
    
    document.getElementById("tic").style.pointerEvents = "none";
    document.getElementById("tac").style.pointerEvents = "none";
    document.getElementById("sliderBottom").style.pointerEvents = "none";

    document.getElementById("linkHome").style.pointerEvents = "none";
}