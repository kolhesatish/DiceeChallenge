var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "dice" + randomNumber + ".png";
var imgSrc1 = "images/" + randomImg1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imgSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var ranimgSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", ranimgSrc2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 is Win!";
}
else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 2 is Win!";
}
else{
    document.querySelector("h1").innerHTML = "😍Draw!"
}
