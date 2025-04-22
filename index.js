'use strict';
//console.log(document.querySelector('.message').textContent);

//document.querySelector('.guess').value=30;

let secNumber = Math.trunc(Math.random()*20)+1;

let decSore=20;
let praying= true;

function resert(){
  decSore=20; 
  secNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent='👨‍🚀start guessing';
  document.querySelector('.score').textContent=decSore;
  document.querySelector('.number').textContent='?';

  document.querySelector('body').style.backgroundColor='#000';
  document.querySelector('.guess').value='';
}
const button= document.querySelector('.check');
button.addEventListener('click', function(){

   
const guess= Number(document.querySelector('.guess').value);



  
    

    //no input
    if(!guess){
         document.querySelector('.message').textContent='no number';
    }
    //correct guess
    else if(guess === secNumber){
   
         document.querySelector('.message').textContent='👋 correct number';
         document.querySelector('.number').textContent=secNumber;
         document.querySelector('body').style.backgroundColor='#28a745';
       let highScore=0;
       playing=false;
         if(decSore>highScore){
            highScore=decSore;
            document.querySelector('.highScore').textContent=highScore;
         }
    }
  

    //too hight and too low
  else if(guess!=secNumber){

    
  
    if(decSore>0){
        document.querySelector('.message').textContent= guess>secNumber? '😊 too hight' : '😁 too low'; 
        decSore = decSore-1;
        document.querySelector('.score').textContent=decSore;
      

    }
    else{
        document.querySelector('.message').textContent='😊you lose';
        document.querySelector('body').style.backgroundColor='red';
    }
    
    document.querySelector('.number').textContent=secNumber;
    secNumber = Math.trunc(Math.random()*20)+1;
  }

   
});

   //resert the game
 document.querySelector('.again').addEventListener('click', resert);
   