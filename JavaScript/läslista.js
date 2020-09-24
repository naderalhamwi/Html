class books {
    constructor(title, author, hasRead){
        this.title = title;
        this.author  = author;
        this.hasRead  = hasRead;
    }

    greet() {
        console.log( "title: " + this.title);
        console.log( "author: " + this.author);
        console.log( "hasRead: " + this.hasRead);
    }
 
}

let book1 = new books("Learn CSS with W3Schools", "W3School.com", true);

book1.greet();