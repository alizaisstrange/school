const start = document.querySelector('.welcome__button');
const welcome = document.querySelector('.container');



function createForm() {
  const form = document.createElement('form');
  form.classList.add('welcome__form');

  const inputContainerName = document.createElement('div');
  const inputName = document.createElement('input');
  inputContainerName.classList.add('welcome__input-container');
  inputName.classList.add('welcome__input');
  inputName.placeholder = 'Имя';
  inputName.setAttribute('id', '#name');
  const labelName = document.createElement('label');
  labelName.classList.add('welcome__input-label');
  labelName.for = 'name';
  labelName.innerText = 'Имя';
  inputContainerName.append(labelName);
  inputContainerName.append(inputName);

  const inputContainerPassword = document.createElement('div');
  const inputPassword = document.createElement('input');
  inputContainerPassword.classList.add('welcome__input-container');
  inputPassword.classList.add('welcome__input');
  inputPassword.placeholder = 'Пароль';
  inputPassword.setAttribute('id', '#password');
  const labelPassword = document.createElement('label');
  labelPassword.classList.add('welcome__input-label');
  labelPassword.for = 'name';
  labelPassword.innerText = 'Пароль';
  inputContainerPassword.append(labelPassword);
  inputContainerPassword.append(inputPassword);

  const inputContainerPasswordCheck = document.createElement('div');
  const inputPasswordCheck = document.createElement('input');
  inputContainerPasswordCheck.classList.add('welcome__input-container');
  inputPasswordCheck.classList.add('welcome__input');
  inputPasswordCheck.placeholder = 'Пароль (ещё раз)';
  inputPasswordCheck.setAttribute('id', '#password-check');
  const labelPasswordCheck = document.createElement('label');
  labelPasswordCheck.classList.add('welcome__input-label');
  labelPasswordCheck.for = 'name';
  labelPasswordCheck.innerText = 'Пароль';
  inputContainerPasswordCheck.append(labelPasswordCheck);
  inputContainerPasswordCheck.append(inputPasswordCheck);

  const inputGender = document.createElement('div');
  const inputGenderMale = document.createElement('input');
  const inputGenderFemale = document.createElement('input');

  inputGender.classList.add('welcome__gender-group');

  inputGenderMale.type = 'radio';
  inputGenderMale.value = 'Парень';
  inputGenderMale.setAttribute('id', '#male');
  inputGenderMale.setAttribute('name', 'user');

  const labelMale = document.createElement('label');
  labelMale.for = 'male';
  labelMale.innerText = 'Парень';


  inputGenderFemale.type = 'radio';
  inputGenderFemale.value = 'Девушка';
  inputGenderFemale.setAttribute('id', '#female');
  inputGenderFemale.setAttribute('name', 'user');

  const labelFemale = document.createElement('label');
  labelFemale.for = 'female';
  labelFemale.innerText = 'Девушка';

  const button = document.createElement('button');
  button.classList.add('welcome__registration');
  button.textContent = 'Регистрация';

  inputGender.append(inputGenderMale);
  inputGender.append(labelMale);
  inputGender.append(inputGenderFemale);
  inputGender.append(labelFemale);

  form.append(inputContainerName);
  form.append(inputContainerPassword);
  form.append(inputContainerPasswordCheck);
  form.append(inputGender);
  form.append(button);
  welcome.append(form);

  const registration = document.querySelector('.welcome__registration');

  registration.addEventListener('click', async () => {


    const users = await fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      body: JSON.stringify({
        name: inputName.value,
        password: inputPassword.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const userItem = await users.json();
    console.log(userItem.name);
  });
}

//Создание кнопки Вход
function createEntryButton() {
  const entryButton = document.createElement('button');
  entryButton.classList.add('entry-button');
  entryButton.textContent = 'Вход';
  welcome.append(entryButton);

  //Обработка клика по кнопке Вход
  entryButton.addEventListener('click', () => {
    createEntryForm();
    entryButton.classList.add('hidden');
  });
}


//Функция для создания формы Входа
function createEntryForm() {
  const form = document.querySelector('.welcome__form');
  form.innerHTML = '';
  const title = document.querySelector('.welcome__titile');
  const button = document.createElement('button');
  button.classList.add('form__entry-button');

  const inputContainerName = document.createElement('div');
  const inputName = document.createElement('input');
  inputContainerName.classList.add('welcome__input-container');
  inputName.classList.add('welcome__input');
  inputName.placeholder = 'Имя';
  inputName.setAttribute('id', '#name');
  const labelName = document.createElement('label');
  labelName.classList.add('welcome__input-label');
  labelName.for = 'name';
  labelName.innerText = 'Имя';
  inputContainerName.append(labelName);
  inputContainerName.append(inputName);

  const inputContainerPassword = document.createElement('div');
  const inputPassword = document.createElement('input');
  inputContainerPassword.classList.add('welcome__input-container');
  inputPassword.classList.add('welcome__input');
  inputPassword.placeholder = 'Пароль';
  inputPassword.setAttribute('id', '#password');
  const labelPassword = document.createElement('label');
  labelPassword.classList.add('welcome__input-label');
  labelPassword.for = 'name';
  labelPassword.innerText = 'Пароль';
  inputContainerPassword.append(labelPassword);
  inputContainerPassword.append(inputPassword);


  title.innerText = 'Вход';
  button.innerText = 'Войти';
  form.append(inputContainerName);
  form.append(inputContainerPassword);
  form.append(button);

  //Обработка нажатия кнопки Войти под формой
  button.addEventListener('click', () => {

  });
}

//обработка клика по кнопке Начать
start.addEventListener('click', () => {
  console.log('click')
  const title = document.querySelector('.welcome__titile');
  const text = document.querySelector('.welcome__description');
  const button = document.querySelector('.welcome__button');

  title.innerText = 'Создать пользователя';
  text.classList.add('hidden');
  button.classList.add('hidden');

  // Создание формы регистрации и кнопки входа
  createForm();
  createEntryButton();
})



//================================================================
