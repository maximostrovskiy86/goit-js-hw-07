const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listEl = document.querySelector('#ingredients');

const allEl = ingredients.map(item => {
    const liEl = document.createElement('li');
    liEl.textContent = item;

    return liEl;
});

listEl.append(...allEl);
