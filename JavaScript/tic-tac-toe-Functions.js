function B1(){
    if(player == 1){
        if(cell1.value == 0){
            cell1.value = 1;
            cell1.style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell1.value == 0){
            cell1.value = 2;
            cell1.style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B2(){
    if(player == 1){
        if(cell2.value == 0){
            cell2.value = 1;
            cell2.style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell2.value == 0){
            cell2.value = 2;
            cell2.style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B3(){
    if(player == 1){
        if(cell3.value == 0){
            cell3.value = 1;
            cell3.style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell3.value == 0){
            cell3.value = 2;
            cell3.style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B4(){
    if(player == 1){
        if(cell4.value == 0){
            cell4.value = 1;
            cell4.style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell4.value == 0){
            cell4.value = 2;
            cell4.style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B5(){
    if(player == 1){
        if(cell5.value == 0){
            cell5.value = 1;
            cell5.style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell5.value == 0){
            cell5.value = 2;
            cell5.style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B6(){
    if(player == 1){
        if(cell6.value == 0){
            cell6.value = 1;
            cell6.style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell6.value == 0){
            cell6.value = 2;
            cell6.style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B7(){
    if(player == 1){
        if(cell7.value == 0){
            cell7.value = 1;
            cell7.style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell7.value == 0){
            cell7.value = 2;
            cell7.style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B8(){
    if(player == 1){
        if(cell8.value == 0){
            cell8.value = 1;
            cell8.style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell8.value == 0){
            cell8.value = 2;
            cell8.style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}
function B9(){
    if(player == 1){
        if(cell9.value == 0){
            cell9.value = 1;
            cell9.style.backgroundColor = purble;
            playerO();
        }else{
            alert("Redan valt");
        }
    }else if(player == 2){
        if(cell9.value == 0){
            cell9.value = 2;
            cell9.style.backgroundColor = darkpurple;
            playerX();
        }else{
            alert("Redan valt");
        }
    }
}

function checwin(){
    // chek vertikala
    if(cell1.value == player && cell2.value == player && cell3.value == player){
        alert("player " + player + " vann");
        return location.reload();
    }else if(cell4.value == player && cell5.value == player && cell6.value == player){
        alert("player " + player + " vann");
        return location.reload();
    }else if(cell7.value == player && cell8.value == player && cell9.value == player){
        alert("player " + player + " vann");
        return location.reload();
    }
    //chek horisontella
    else if(cell1.value == player && cell4.value == player && cell7.value == player){
        alert("player " + player + " vann");
        return location.reload();

    }else if(cell2.value == player && cell5.value == player && cell8.value == player){
        alert("player " + player + " vann");
        return location.reload();

    }else if(cell3.value == player && cell6.value == player && cell9.value == player){
        alert("player " + player + " vann");
        return location.reload();
    }
    //chek streak / \
    else if(cell1.value == player && cell5.value == player && cell9.value == player){
        alert("player " + player + " vann");
        return location.reload();
    }else if(cell3.value == player && cell5.value == player && cell7.value == player){
        alert("player " + player + " vann");
        return location.reload();
    }
}