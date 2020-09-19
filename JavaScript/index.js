function init(){
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let tre = document.getElementById("tre");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let i = document.getElementsByTagName("i");

    let tl = gsap.timeline({ defaults: { ease: "power1.out" } }); 
    let t2 = new TimelineMax({repeat:-1, yoyo:true, repeatDelay: 0.5});
    
    one.style.backgroundImage = "url(https://picsum.photos/id/202/1920/1080/?blur=10)";//Dont chnage
    two.style.backgroundImage = "url(https://picsum.photos/id/655/1920/1080/)";//Dont chnage
    tre.style.backgroundImage = "url(https://picsum.photos/id/452/1920/1080/)";
    four.style.backgroundImage = "url(https://picsum.photos/id/495/1920/1080/)";
    five.style.backgroundImage = "url(https://picsum.photos/id/494/1920/1080/?blur=5)";//Dont chnage

    tl.to("h1", 4, {opacity: 1, duration: 9});
    
    t2.to("i", 0.5, {y: -10});
    t2.to("i", 0.5, {color: "yellow"});
    t2.to("i", 0.5, {y: 20});

}window.onload = init();