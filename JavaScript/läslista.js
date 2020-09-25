class books {
    constructor(title, author, hasRead){
        this.title = title;
        this.author  = author;
        this.hasRead  = false;
    }

    info() {
       
        let alltitle = prompt("skriv ib titlen av booken", "");
        let allauthor = prompt("skriv in förfatarens namn", "");
        var r = confirm("har du läst dnna booken?");
        if (r == true) {
            this.hasRead = true;
        } else {
            this.hasRead = false;
            
        }
        if(this.hasRead == true){
            console.log("jag har läst "  + alltitle + " av Författare " + allauthor);
        }else{
            console.log("jag har inte läst "  + alltitle + " av Författare " + allauthor);
        }
    }
 
}

let book = new books();
book.info();