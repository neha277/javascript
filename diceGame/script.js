'use strict';

const holdClass = document.querySelector('.btn--hold');
const rollClass = document.querySelector('.btn--roll');
const newGameClass = document.querySelector('.btn--new');

let tempTotalScore = 0;
let currentPlayer='player--0';
let totalCurrentScoreHolder = '#score--0';
let currentScoreHolder = '#current--0';
let totalScoreFor1=0;
let totalScoreFor0=0;



const curScore = function(score){
   
    if(currentPlayer === 'player--0'){
        totalScoreFor0 = totalScoreFor0+score;
        document.querySelector(totalCurrentScoreHolder).textContent = totalScoreFor0;
        
        }
    else{
        totalScoreFor1 = totalScoreFor1 + score;
        document.querySelector(totalCurrentScoreHolder).textContent = totalScoreFor1;

    }
    if(totalScoreFor0 >= 100){
        alert('player--0 won'); 
        totalScoreFor0 = 0;
        totalScoreFor1 = 0;

     }else if(totalScoreFor1 >= 100){
        alert('player--1 won'); 
        totalScoreFor0 = 0;
        totalScoreFor1 = 0;
     }
}
    
const curScoreDisplay = function(score){
    document.querySelector(currentScoreHolder).textContent = score
}



rollClass.addEventListener('click', function(){
let tempScore=0;

const rollDice = Math.floor(Math.random() * (6)) + 1;
tempScore = tempTotalScore;
if(currentPlayer === 'player--1'){
    totalCurrentScoreHolder = '#score--1';
    currentScoreHolder = '#current--1';
    tempTotalScore =0;
}else if(currentPlayer === 'player--0'){
    totalCurrentScoreHolder = '#score--0';
    currentScoreHolder = '#current--0';

}

if(rollDice != 1){
    if(rollDice === 2){
        document.querySelector('.dice').src = 'dice-2.png';
        tempScore = tempScore+2;
        curScore(tempScore);
        curScoreDisplay(2);
    }else if(rollDice === 3){
        document.querySelector('.dice').src = 'dice-3.png';
        tempScore = tempScore+3;
        curScore(tempScore);
        curScoreDisplay(3);
    }else if(rollDice === 4){
        document.querySelector('.dice').src = 'dice-4.png';
        tempScore = tempScore+4;
        curScore(tempScore);
        curScoreDisplay(4);
    }else if(rollDice === 5){
        document.querySelector('.dice').src = 'dice-5.png';
        tempScore = tempScore + 5;
        curScoreDisplay(5);
        curScore(tempScore);
    }else if(rollDice === 6){
        document.querySelector('.dice').src = 'dice-6.png';
        tempScore = tempScore+6;
        curScoreDisplay(6);
        curScore(tempScore);
    }
    
}else{
    document.querySelector('.dice').src = 'dice-1.png';
    tempScore = 0;
    if(currentPlayer === 'player--0'){
        totalScoreFor0 = 0;
    }else{
        totalScoreFor1 = 0;
    }
   
    curScore(tempScore);
    curScoreDisplay(tempScore);
}


})

holdClass.addEventListener('click', function(){
   
    if (document.querySelector('.player').classList.contains('player--active')){
            document.querySelector('.player--0').classList.remove('player--active');
            document.querySelector('.player').nextElementSibling;
            document.querySelector('.player--1').classList.add('player--active');
            currentPlayer = 'player--1';
            
            
    }else{
            document.querySelector('.player--1').classList.remove('player--active');
            document.querySelector('.player').previousElementSibling;
            document.querySelector('.player--0').classList.add('player--active');
            currentPlayer = 'player--0';
    }
   

})

newGameClass.addEventListener('click', function(){
    currentPlayer = 'player--0';
    totalScoreFor0 = 0;
    totalScoreFor1 = 0;
    console.log(document.querySelector('.player').classList);
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;

})

