'use strict';

let correctNumber = Math.floor(Math.random() * 20);
//document.querySelector('.number').textContent = correctNumber;  
console.log(`correctNumber start ${correctNumber}`);                      
let highScore = 0;
let intScore = 20;


document.querySelector('.check').addEventListener('click',function(){
   
    const guess = Number(document.querySelector('.guess').value);
    if(guess === correctNumber){
        document.querySelector('body').style.backgroundColor = 'lightpink';
        console.log(`intScore check block ${intScore}`);
        document.querySelector('.message').textContent = 'Correct number';
        intScore = intScore + 1;
        document.querySelector('.score').textContent = intScore;
        if(highScore < intScore){
            highScore = intScore;
            document.querySelector('.highscore').textContent = intScore;
        }else{
            document.querySelector('.highscore').textContent = highScore;
        }
    }else{
        if(guess > correctNumber){
            document.querySelector('.message').textContent ='Number is greater';
            intScore = intScore - 1;
            document.querySelector('.score').textContent = intScore;
            
        }else if(guess < correctNumber){
            document.querySelector('.message').textContent ='Number is low';
            intScore = intScore - 1;
            document.querySelector('.score').textContent = intScore;
        }else if(guess === 0){
            document.querySelector('.message').textContent = 'No number given';
            intScore = intScore - 1;
            document.querySelector('.score').textContent = intScore;
    
        }
    }


document.querySelector('.again').addEventListener('click',function(){
    correctNumber = Math.floor(Math.random() * 20);
    document.querySelector('.number').textContent = correctNumber; 
    document.querySelector('.number').textContent = correctNumber; 
    intScore = 20;
    document.querySelector('.message').textContent = 'Start guessing the number';
    document.querySelector('.score').textContent = intScore;
    document.querySelector('.guess').value = null;
    document.querySelector('.highscore').textContent = highScore;
    console.log(`correctNumberblock ${correctNumber}`);
    document.querySelector('body').style.backgroundColor = '#222'
})
    
    
    
})