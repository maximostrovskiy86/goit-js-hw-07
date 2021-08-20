const listCatEl = document.querySelector('#categories');
const allCatEl = listCatEl.querySelectorAll('.item');
console.log(`В списке ${allCatEl.length} категории`);

allCatEl.forEach(item => {
    console.log('---------------------------------------------------');
    const title = item.querySelector('h2').textContent;
    const allListRef = item.querySelectorAll('li').length;
    console.log(`Категория: ${title}, Количество элементов: ${allListRef}`);
})


const user = {
    name: 'Mango',
    showName(event) {
        console.log(this);
        console.log(event.target)
        // this будет ссылаться на button если использовать showName как callback
        console.log(`My name is: ${this.name}`);
        // тут undefined так как поля name у button нет
    },
};

/*
 * Представим что у нас есть кнопка с классом js-btn
 * Выберем ее и повесим на нее слушатель клика
 */
const btn = document.querySelector('.js-btn');

// user.showName(); //работает
btn.addEventListener('click', user.showName); // не работает
// btn.addEventListener('click', user.showName.bind(user)); // работае


const form = document.querySelector(".form");
const loginInput = form.querySelector('input[type="text"]');
const passInput = form.querySelector('input[type="password"]');

form.addEventListener("click", handleSubmit);

function handleSubmit(event) {
    // Предотвращаем поведение по умолчанию
    event.preventDefault();
    // console.log(event.target)
    // console.log(event.currentTarget)

    const login = loginInput.value.trim();
    const password = passInput.value.trim();

    if(login === '' || password === '') {
        return alert('Пожалуйста введите валидную информацию!')
    }

    form.reset();

    alert(`
    Спасибо за регистрацию!
    Логин: ${login} 
    Пароль: ${password}
  `);
}
