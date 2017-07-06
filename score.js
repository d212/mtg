var p1Up = document.getElementById("p1Up");
var p1Down = document.getElementById("p1Down");
var p2Up = document.getElementById("p2Up");
var p2Down = document.getElementById("p2Down");

var p1Life = document.getElementById("p1Life");
var p1Counter = 20;
var p2Life = document.getElementById("p2Life");
var p2Counter = 20;

var gameOver = false;
var winningScore = 0;

var reset = document.getElementById("reset");


var startingLife = document.querySelector("input");
var startingLifeCounter = document.querySelector("p span")

startingLife.addEventListener("change", function(){
startingLifeCounter.textContent=startingLife.value;
    p1C = startingLife.value;
    p2C = startingLife.value;
p1Counter=p1C; 
p2Counter=p2C;
p1Life.textContent=p1C;
p2Life.textContent=p2C;
})

p1Up.addEventListener("click", function(){
p1Counter++;
p1Life.textContent = p1Counter;
if (!(p1Counter===winningScore)){gameOver=false; p1Life.classList.remove("loser");};
});

p1Down.addEventListener("click", function(){
if (!(p1Counter===winningScore)){gameOver=false; p1Life.classList.remove("loser");};
    if (!gameOver){
p1Counter--;
p1Life.textContent = p1Counter;}
if (p1Counter===winningScore){gameOver=true;
p1Life.classList.add("loser");}
});

p2Up.addEventListener("click", function(){
p2Counter++;
p2Life.textContent = p2Counter;
if (!(p2Counter===winningScore)){gameOver=false; p2Life.classList.remove("loser");};
});

p2Down.addEventListener("click", function(){
if (!(p2Counter===winningScore)){gameOver=false; p2Life.classList.remove("loser");};
    if (!gameOver){
p2Counter--;
p2Life.textContent = p2Counter;}
if (p2Counter===winningScore){gameOver=true; 
p2Life.classList.add("loser");};
});

reset.addEventListener("click", function() {
    p1Counter=20;
    p2Counter=20;
    gameOver=false;
    p1Life.textContent=p1Counter;
    p2Life.textContent=p2Counter;
    p1Life.classList.remove("loser");
    p2Life.classList.remove("loser");
})