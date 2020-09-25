let tlm = new TimelineMax({repeat:-1, yoyo:true, repeatDelay: 0.5});
let tl = gsap.timeline({ defaults: { ease: "power1.out" } }); 


function init(){
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let tre = document.getElementById("tre");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let i = document.getElementsByTagName("i");

    tl.to("h1", 2, {opacity: 1, duration: 7});
    
    // sätta ett img som bakgrund till varje section
    one.style.backgroundImage = "url(https://picsum.photos/id/249/1920/1080/?blur=1)";//Dont chnage
    two.style.backgroundImage = "url(https://picsum.photos/id/655/1920/1080/)";//Dont chnage
    tre.style.backgroundImage = "url(https://picsum.photos/id/452/1920/1080/)";
    four.style.backgroundImage = "url(https://picsum.photos/id/495/1920/1080/)";
    five.style.backgroundImage = "url(https://picsum.photos/id/494/1920/1080/?blur=5)";//Dont chnage
    
    //152
    //249
    //153
    
    arowMove();


}window.onload = init();



function arowMove(){
  
  tlm.to(".fas", 0.5, {y: -10});
  tlm.to(".fas", 0.5, {y: 30});
}


//use later
/**
 * den här koden kommer hälpa med mobil opning anc closing the sections
 * const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
 */