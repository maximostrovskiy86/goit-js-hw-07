const listCatEl = document.querySelector('#categories');
const allCatEl = listCatEl.querySelectorAll('.item');
console.log(`В списке ${allCatEl.length} категории`);

allCatEl.forEach(item => {
    console.log('---------------------------------------------------');
    const title = item.querySelector('h2').textContent;
    const allListRef = item.querySelectorAll('li').length;
    console.log(`Категория: ${title}, Количество элементов: ${allListRef}`);
})

