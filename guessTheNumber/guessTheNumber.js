'use strict';
let correctNumber = Math.floor(Math.random() * 20)+1;                   
let highScore = 0;
let intScore = 20;

const messageClass = function(message){
    document.querySelector('.message').textContent = message;
} 
const highScoreClass = function(score){
    document.querySelector('.highscore').textContent= score;
}

const scoreClass = function(score){
    document.querySelector('.score').textContent = score;
}
const numberClass = function(number){
    document.querySelector('.number').textContent = number;
}
const bodyClass = function(val){
    document.querySelector('body').style.backgroundColor = val;
}
const clearGuess = function(val){
    document.querySelector('.guess').value = val;}

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);
    if(guess === correctNumber){
        bodyClass('lightpink');
        messageClass('Correct number');
        intScore = intScore + 1;
        scoreClass(intScore);
        if(highScore < intScore){
            highScore = intScore;
        }
        highScoreClass(highScore);
        
    }else{
        guess > correctNumber ? messageClass('Number is greater') : messageClass('Number is low');
            intScore = intScore - 1;
            scoreClass(intScore);
    }
    clearGuess(null);

})

document.querySelector('.again').addEventListener('click',function(){
    correctNumber = Math.floor(Math.random() * 20) +1;
    numberClass(correctNumber); 
    intScore = 20;
    messageClass('Start guessing the number');
    scoreClass(intScore);
    clearGuess(null);
    highScoreClass(highScore);
    bodyClass('black');
})
    
    
    
