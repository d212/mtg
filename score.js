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

function preventZoom(e) {
  var t2 = e.timeStamp;
  var t1 = e.currentTarget.dataset.lastTouch || t2;
  var dt = t2 - t1;
  var fingers = e.touches.length;
  e.currentTarget.dataset.lastTouch = t2;

  if (!dt || dt > 500 || fingers > 1) return; // not double-tap

  e.preventDefault();
  e.target.click();
}


// (function($) {
//   var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
//   $.fn.nodoubletapzoom = function() {
//     if (IS_IOS)
//       $(this).bind('touchstart', function preventZoom(e) {
//         var t2 = e.timeStamp
//           , t1 = $(this).data('lastTouch') || t2
//           , dt = t2 - t1
//           , fingers = e.originalEvent.touches.length;
//         $(this).data('lastTouch', t2);
//         if (!dt || dt > 500 || fingers > 1) return; // not double-tap

//         e.preventDefault(); // double tap - prevent the zoom
//         // also synthesize click events we just swallowed up
//         $(this).trigger('click').trigger('click');
//       });
//   };
// })(jQuery);

(function($){
$.fn.nodoubletapzoom = function(){
$(this).bind('touchend', function preventZoom(e){
var now = new Date().getTime();
var lastTouch = $(this).data('lastTouch') || now + 1;
var delta = now - lastTouch;

if(delta<200 && delta>0){
e.preventDefault();
$(this).trigger('click').trigger('click');
}
$(this).data('lastTouch', now);
});
};
})(jQuery);

jQuery(document.getElementsByClassName("nozoom")).nodoubletapzoom();