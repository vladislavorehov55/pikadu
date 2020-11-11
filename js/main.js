// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})
const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignUp = document.querySelector('.login-signup')

const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name')



const listUsers = [
  {
    id: '01',
    email:'vvv@mail.ru',
    password: '1234',
    displayName: 'Vlad'
  },
  {
    id: '02',
    email:'aaa@mail.ru',
    password: '1234567',
    displayName: 'Dimka'
  },
];
const setUsers = {
  user: null,
  logIn(email, password, handler) {
    const user = this.getUser(email);
    if (user.password === password) {
      this.authorizedUser(user)
      handler()
    }
    else {
      alert('Все плохо')
    }
  },

  authorizedUser(user) {
    this.user = user
  },
  logOut() {},
  signUp(email, password, handler) {
    if (!this.getUser(email)){
      const user = {email, password, displayName: email.split('@')[0]}
      listUsers.push(user)
      this.authorizedUser(user)
      handler()
    }
    else {
      alert('Такой пользователь уже есть')
    }
  },
  getUser(email){
    return listUsers.find((item, index, array) => {
      return item.email === email
    })
  }
}


const toggleAuthDom = () => {
  const user = setUsers.user;
  if (user) {
    loginElem.style.display = 'none'
    userElem.style.display = '';
    userNameElem.textContent = user.displayName
  }
  else {
    loginElem.style.display = ''
    userElem.style.display = 'none';
  }
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom)
})
loginSignUp.addEventListener('click', e => {
  e.preventDefault()
  setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom)
})
toggleAuthDom()