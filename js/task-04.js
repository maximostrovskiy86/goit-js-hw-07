const refs = {
    incrementButton: document.querySelector('button[data-action="increment"]'),
    decrementButton: document.querySelector('button[data-action="decrement"]'),
    output: document.querySelector('#value'),
}

let counterValue = 0;

const increment = () => {
    counterValue++;
    refs.output.textContent = counterValue;
}

const decrement = () => {
    counterValue--;
    refs.output.textContent = counterValue;
}

refs.incrementButton.addEventListener('click', increment);
refs.decrementButton.addEventListener('click', decrement);