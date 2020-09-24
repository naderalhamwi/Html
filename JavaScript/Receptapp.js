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
    //console.log(Recept.Title)

}window.onload = init();


