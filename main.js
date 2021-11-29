let randomGuess=Math.floor(Math.random()*100)+1;

const preGuess=document.querySelector('.guesses');
const preresult=document.querySelector('.lastresult');
const loworHigh=document.querySelector('.loworhigh');

const guessfield = document.querySelector('.guessField');
const guesssubmit = document.querySelector('.submitGuess');

let guessCount = 1;
let resetButton;

function checkGuess(){
    let userGuess=Number(guessfield.value);
    if(guessCount===1)
    {
        preGuess.textContent="Prevoius Guess: ";
        guessCount=userGuess;
    }
    preGuess.textContent+=userGuess+' ';
    if(userGuess===randomGuess){
        preresult.textContent='Congratulation You Win!';
        preresult.style.backgroundColor='white';
        preresult.style.fontSize='30px';
        preresult.style.color='purple';
        loworHigh.textContent='';
        setGameOver();
    }
    else if(guessCount===10)
    {
        preresult.textContent='!!!Game Over!!!';
        loworHigh.textContent='';
       setGameOver();
    }
    else
    {
        preresult.textContent='Wrong!';
        preresult.style.backgroundColor='red';
        preresult.style.fontSize='25px';
        preresult.style.color='white';

            if(randomGuess>userGuess)
            {
                loworHigh.textContent="Your Guess is low!";
            }
            else{
                loworHigh.textContent="Your Guess is high!";
            }
        
    }
    guessCount++;
    guessfield.value='';
    guessfield.focus();
}
function setGameOver(){
    guessfield.disabled=true;
    guesssubmit.disabled=true;
    resetButton=document.createElement('button');
    resetButton.style.backgroundColor="Yellow";
    resetButton.style.borderRadius="10px"
    resetButton.style.color="Black";

    resetButton.textContent='Start a new Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
}
function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.result p');
    for(let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessfield.disabled = false;
    guesssubmit.disabled = false;
    guessfield.value = '';
    guessfield.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
guesssubmit.addEventListener('click',checkGuess);

let myname=document.getElementById('name');

