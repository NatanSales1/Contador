let currentNumberInitial = document.getElementById('currentNumber')
let currentNumber = 0

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberInitial.innerHTML = currentNumber
  if (currentNumberInitial.innerHTML < 0) {
    document.getElementById('currentNumber').style.color = 'red'
  }
}

function add() {
  currentNumber = currentNumber + 1
  currentNumberInitial.innerHTML = currentNumber
  if (currentNumberInitial.innerHTML >= 0) {
    document.getElementById('currentNumber').style.color = 'black'
  }
}
