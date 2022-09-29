let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let info = document.getElementById('info');
let input = document.getElementById('input');
let guesses = document.getElementById('guesses');
let guessed = document.getElementById('guessed');
let numberOfGuesses = 0;
answer = Math.floor(Math.random() * 1000);
btn.addEventListener('click', () => {
  let num = input.value;
  if (num > answer) {
    info.innerHTML = 'The number is lower then that.';
    info.style.color = '#3064FF';
    numberOfGuesses ++;
    guesses.innerHTML = numberOfGuesses;
    guessed.innerHTML += ',' + num;
    input.value = '';
  }
  else if (num < answer) {
    info.innerHTML = 'The number is higher then that.';
    info.style.color = '#FF3434';
    numberOfGuesses ++;
    guesses.innerHTML = numberOfGuesses;
    guessed.innerHTML += ',' + num;
    input.value = '';
  }
  else if (num == answer) {
    info.innerHTML = 'You won, that is right.';
    info.style.color = '#00D112';
    numberOfGuesses ++;
    guesses.innerHTML = numberOfGuesses;
    guessed.innerHTML += ',' + num;
    btn.style.display = 'none';
    btn2.style.display = 'block';
  };
});
btn2.addEventListener('click', () => {
  location.reload();
})
