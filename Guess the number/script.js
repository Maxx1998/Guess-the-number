"use strict";

let randomNum=Math.floor(Math.random()*(20-1+1))+1;

let score=20;
document.querySelector(".score").textContent=score;
document.querySelector(".number").textContent="?";
let highScore=0;
document.querySelector(".highscore").textContent=highScore;
const display=function(message1)
{
    document.querySelector(".message").textContent=message1;
}

document.querySelector(".check").addEventListener("click",function()
{

const guess=Number(document.querySelector(".guess").value);


if(!guess)
{
//document.querySelector(".message").textContent="No number";
display("No number");
}

else if(guess===randomNum)
{
    display("Correct Number");
    //document.querySelector(".message").textContent="Correct Number";
    document.querySelector("body").style.backgroundColor="#60b347";
    document.querySelector(".number").textContent=randomNum;
    document.querySelector(".number").style.width="30rem";
    if(score>highScore)
    {
        highScore=score;
        document.querySelector(".highscore").textContent=highScore;
    }
}
else if(guess!==randomNum)
{
    if(score<1)
{
    display("you lost the game");
    //document.querySelector(".message").textContent="you lost the game";

    document.querySelector(".score").textContent="0";

}
else
{
    score--;
    document.querySelector(".score").textContent=score;
    //document.querySelector(".message").textContent=(guess>randomNum)?"Too high":"Too low";
    display((guess>randomNum)?"Too high":"Too low");


}
}
});

document.querySelector(".again").addEventListener("click",function()
{
    score=20;
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").style.width="15rem";
    document.querySelector("body").style.backgroundColor="#222";
    display("Start guessing...");
    //document.querySelector(".message").textContent="Start guessing...";
    randomNum=Math.floor(Math.random()*(20-1+1))+1;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value=" ";


});