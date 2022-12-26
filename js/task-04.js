let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
console.log(decrementButton.dataset.action);

const incrementButton = document.querySelector('button[data-action="increment"]');
console.log(incrementButton.dataset.action);

const valueEl = document.querySelector("#value")
console.log(valueEl);

function decrement(event) {
    
    counterValue -= 1;
    valueEl.value = counterValue;
    valueEl.textContent = counterValue;
  
}

function increment(event) {
   
    counterValue += 1;
    valueEl.value = counterValue;
    valueEl.textContent = counterValue;
  
}

decrementButton.addEventListener("click", decrement)
incrementButton.addEventListener("click", increment)
