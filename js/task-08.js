// ЮРА, Ещё не закончил в процесе

const refs = {
    // inputValue: document.querySelector('input').value,
    addCollection: document.querySelector('button[data-action="render"]'),
    removeCollection: document.querySelector('button[data-action="destroy"]'),
    output: document.querySelector('#boxes'),
}

const amount = document.querySelector('input').value;

const createBoxes = (amount) => {
    // amount= +refs.inputValue.value;
    console.log(amount)
    const div = document.createElement('div');
    div.style.width = 30 + 'px';
    div.style.height = 30 + 'px';
    div.style.backgroundColor = 'tomato';

    for (let i = 0; i < amount; i++) {
        refs.output.append(div)
    }
}

const destroyBoxes = () => {
   refs.output.innerHTML = '';
}

console.log(+refs.inputValue)
refs.addCollection.addEventListener('click', createBoxes);
refs.removeCollection.addEventListener('click', destroyBoxes);
