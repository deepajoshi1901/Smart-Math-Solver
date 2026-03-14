// mobile menu
function toggleMenu(){

const nav = document.getElementById("navMenu");

if(nav.style.display === "block"){
nav.style.display = "none";
}else{
nav.style.display = "block";
}

}

// join button
function joinNow(){
alert("Welcome to FitLife Fitness!");
}

// scroll animation

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const position = card.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 100){
card.classList.add("show");
}

});

});