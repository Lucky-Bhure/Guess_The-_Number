let randomNumber = Math.ceil(Math.random()*100);
let userInput = document.getElementById("userInput");
let paragraph = document.getElementById("paragraph");
console.log(randomNumber);

function guess(){
    let userVal = parseInt(userInput.value);
    console.log(userVal);
    if(userVal === randomNumber){
        paragraph.textContent = "You Win!!!";
    }else if(userVal > randomNumber){
        paragraph.textContent = "You Guessed To High!!!";
    }else{
        paragraph.textContent = "You Guessed To Low!!!";
    }
}