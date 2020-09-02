function B1(){
    B = 1;
    J += 1;
    if(player == 1){
        if(cell[0].value == 0){
            cell[0].value = 1;
            cell[0].style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell[0].value == 0){
            cell[0].value = 2;
            cell[0].style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B2(){
    B = 2;
    J += 1;
    if(player == 1){
        if(cell[1].value == 0){
            cell[1].value = 1;
            cell[1].style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell[1].value == 0){
            cell[1].value = 2;
            cell[1].style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B3(){
    B = 3;
    J += 1;
    if(player == 1){
        if(cell[2].value == 0){
            cell[2].value = 1;
            cell[2].style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell[2].value == 0){
            cell[2].value = 2;
            cell[2].style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B4(){
    B = 4;
    J += 1;
    if(player == 1){
        if(cell[3].value == 0){
            cell[3].value = 1;
            cell[3].style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell[3].value == 0){
            cell[3].value = 2;
            cell[3].style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B5(){
    B = 5;
    J += 1;
    if(player == 1){
        if(cell[4].value == 0){
            cell[4].value = 1;
            cell[4].style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell[4].value == 0){
            cell[4].value = 2;
            cell[4].style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B6(){
    B = 6;
    J += 1;
    if(player == 1){
        if(cell[5].value == 0){
            cell[5].value = 1;
            cell[5].style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell[5].value == 0){
            cell[5].value = 2;
            cell[5].style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B7(){
    B = 7;
    J += 1;
    if(player == 1){
        if(cell[6].value == 0){
            cell[6].value = 1;
            cell[6].style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell[6].value == 0){
            cell[6].value = 2;
            cell[6].style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B8(){
    B = 8;
    J += 1;
    if(player == 1){
        if(cell[7].value == 0){
            cell[7].value = 1;
            cell[7].style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell[7].value == 0){
            cell[7].value = 2;
            cell[7].style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B9(){
    B = 9;
    J += 1;
    if(player == 1){
        if(cell[8].value == 0){
            cell[8].value = 1;
            cell[8].style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell[8].value == 0){
            cell[8].value = 2;
            cell[8].style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function checWin(){
    // chek vertikala
    if(cell[0].value == player && cell[1].value == player && cell[2].value == player){
        alert("player " + player + " vann");
        A = 1;
        return location.reload();
    }else if(cell[3].value == player && cell[4].value == player && cell[5].value == player){
        alert("player " + player + " vann");
        return location.reload();
    }else if(cell[6].value == player && cell[7].value == player && cell[8].value == player){
        alert("player " + player + " vann");
        A = 1;
        return location.reload();
    }
    //chek horisontella
    else if(cell[0].value == player && cell[3].value == player && cell[6].value == player){
        alert("player " + player + " vann");
        A = 1;
        return location.reload();

    }else if(cell[1].value == player && cell[4].value == player && cell[7].value == player){
        alert("player " + player + " vann");
        A = 1;
        return location.reload();

    }else if(cell[2].value == player && cell[5].value == player && cell[8].value == player){
        alert("player " + player + " vann");
        A = 1;
        return location.reload();
    }
    //chek streak / \
    else if(cell[0].value == player && cell[4].value == player && cell[8].value == player){
        alert("player " + player + " vann");
        A = 1;
        return location.reload();
    }else if(cell[2].value == player && cell[4].value == player && cell[6].value == player){
        alert("player " + player + " vann");
        A = 1;
        return location.reload();
    }
}