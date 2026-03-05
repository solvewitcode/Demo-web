const form = document.querySelector('.form')

let attempts = 2
const remaining = document.querySelector('.lastResult')
const lowORHigh = document.querySelector('.lowOrHi')
const prevGuesses = document.querySelector('.guesses')
const guessesRemaining = document.querySelector('.lastResult')
let num = Math.floor(Math.random()*100) + 1
const prevGuessesArr=[]

function restart()
{
  num = Math.floor(Math.random()*100) + 1
  attempts = 2
  console.log(num)
  guessesRemaining.innerHTML = attempts
}

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  if(attempts>0){
    let x =parseInt(document.querySelector('.guessField').value)
    if(isNaN(x)) lowORHigh.innerHTML = 'Please Enter Valid Number'
    else if(x===num) {
      lowORHigh.innerHTML= `${num} is Correct Answer`;
      restart();
    }
    else if(x<num) lowORHigh.innerHTML= 'Higher';
    else lowORHigh.innerHTML= 'Lower';
  
    prevGuessesArr.push(x)
    prevGuesses.innerHTML = prevGuessesArr
    attempts = --attempts;
    console.log(attempts)
    
    guessesRemaining.innerHTML = attempts
    if(attempts==0){
      lowORHigh.innerHTML = `${num} is Correct Answer`
      restart();
    }
  }

  
  
})
console.log(num)  

