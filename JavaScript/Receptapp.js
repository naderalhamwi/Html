//skapa en objekt som heter Recept
var Recept = {
     Title: "Lamb steaks with rosemary sweet potatoes",
     Rating: 4,
     difficulty: "easy", 
     Ingredients:[" 2 tbsp olive oil ",
     " 4 lamb leg steaks ", 
     " 3 sweet potatoes, finely sliced ",
     " 1 red onion, halved & sliced ", 
     " sprig fresh rosemary or 1 tsp of dried ", 
     " 2 tbsp wholegrain mustard "],
     servings: {
         "kcal": "431 kcal",
         "fat": "24 g",
         "saturates": "9 g",
         "sugars":  "9 g",
         "fibre": "4 g",
         "protein": "29 g",
         "salt": "63 g"
        }
    }

    //informations from https://www.bbcgoodfood.com/recipes/lamb-steaks-rosemary-sweet-potatoes

let header = document.getElementById("header");
let main = document.getElementById("main");



function init(){
    header.innerHTML = "<div>" + "<h1>" + "My faorate Recepes" +"</h1>" +"</div>";
    console.log( "Recept title: " + Recept.Title);
    console.log( "Recepts Rating: " + Recept.Rating);
    console.log( "Recepts difficulty: " + Recept.difficulty);
    
    for (let index = 0; index < Recept.Ingredients.length; index++) {
        console.log( index+1 + " Recepts Ingredient: " + Recept.Ingredients[index]);
    }
    console.log( "Recepts servings: " + Recept.servings.fat);

}window.onload = init();


