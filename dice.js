var random=1+Math.random()*6;
var ran=Math.floor(random);
var img="dice"+ran+".png";
var op=document.querySelectorAll("img")[0];
op.setAttribute("src",img);


var random1=1+Math.random()*6;
var ran1=Math.floor(random1);
var img1="dice"+ran1+".png";
var op1=document.querySelectorAll("img")[1];
op1.setAttribute("src",img1);
if (random > random1){
    document.querySelector("h1").innerHTML="you win";
}
if (random < random1){
    document.querySelector("h1").innerHTML="you lose";
}
if (random === random1){
    document.querySelector("h1").innerHTML="tie";
}