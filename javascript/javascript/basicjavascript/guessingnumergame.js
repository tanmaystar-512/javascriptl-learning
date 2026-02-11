//a game of guessing number b/w 1 t0 100
 let guessNumber=23;//Number(promt("Guess the Number"));
let Number=((Math.floor(Math.random)*100)+1);
console.log(Number);
if(guessNumber==Number){
    console.log("you won")
}
else if(guessNumber>Number){
    console.log("too high predict another value")
}
else{
    console.log("too low predict another value ")
}
