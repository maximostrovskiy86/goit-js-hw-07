const refs = {
    inputValue: document.querySelector('input'),
    addCollection: document.querySelector('button[data-action="render"]'),
    removeCollection: document.querySelector('button[data-action="destroy"]'),
    output: document.querySelector('#boxes'),
}

const colors = [
    {rgb: '244, 67, 54'},
    {rgb: '233, 30, 99'},
    {rgb: '156, 39, 176'},
    {rgb: '103, 58, 183'},
    {rgb: '63, 81, 181'},
    {rgb: '33, 150, 243'},
    {rgb: '0, 188, 212'},
    {rgb: '0, 150, 136'},
    {rgb: '76, 175, 80'},
    {rgb: '255, 235, 59'},
    {rgb: '255, 152, 0'},
];

const handleDivAdd = () => {
    const amountBox = +refs.inputValue.value;
    const createDiv = createBoxes(amountBox);

    refs.output.append(...createDiv);
}

const createBoxes = (amount) => {
    let divSize = 30;
    const arrayDiv = [];

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        divSize += 10;
        div.style.cssText = `
        width: ${divSize + 'px'};
        height: ${divSize + 'px'};
        margin: 10px;
        `;
        div.style.backgroundColor = randomColor();
        div.style.margin = '5px';

        console.log(div.style.cssText)
        arrayDiv.push(div);
    }

    return arrayDiv;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

const randomColor = () => {
    const arrayColors = colors.map(color => color.rgb);
    return `rgb(${arrayColors[randomInteger(0, arrayColors.length - 1)]})`;
}

const destroyBoxes = () => {
    refs.output.innerHTML = '';
}

refs.addCollection.addEventListener('click', handleDivAdd);
refs.removeCollection.addEventListener('click', destroyBoxes);