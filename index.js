const dino = document.getElementById("dino");
const cacti = document.getElementById("cacti");
var counter=0;

function jump(){
    if (dino.classList != "animate"){
    dino.classList.add("animate");

 setTimeout(function (){
        dino.classList.remove("animate");
    },300);
  }
}

let isAlive =  setInterval(function(){
    // get dino y position
let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
// get cacti x position
let cactiLeft = parseInt(window.getComputedStyle(cacti).getPropertyValue("left"));

if(cactiLeft <400 && cactiLeft >365 && dinoTop >= 155){
    alert("Game Over!!!, Score: " + Math.floor(counter/100));
    
     counter=0;
    //  block.style.animation="none";
    //  block.style.animation="block is infinite linear";
}
else{
    counter++;
    document.getElementById("scorespan").innerHTML = Math.floor(counter/100);

}


}, 10);

document.addEventListener("keydown", function(event){
    jump();
});

