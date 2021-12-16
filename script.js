function mobileMenu() {
  const menuIcon = document.querySelector('#menu-icon');
  const mainNav = document.querySelector('.main-nav');
  const exitIcon = document.querySelector('.exit');
  const navLinks = document.querySelectorAll('.ul-menu li');
  const body = document.querySelector('body');

  menuIcon.addEventListener('click', () => {
    mainNav.classList.add('main-nav-active');
    body.classList.add('overflow-hidden');
  });
  exitIcon.addEventListener('click', () => {
    mainNav.classList.remove('main-nav-active');
    body.classList.remove('overflow-hidden');
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('main-nav-active');
      body.classList.remove('overflow-hidden');
    });
  });
}

mobileMenu();

const formStorage = document.querySelector('#form1');
const nameTxt = formStorage.querySelector('#name1');
const emailTxt = formStorage.querySelector('#email1');
const msgTxt = formStorage.querySelector('#msg');

const saveData = () => {
  const dataList = {
    name: nameTxt.value,
    email: emailTxt.value,
    msg: msgTxt.value,
  };
  localStorage.setItem('dataList', JSON.stringify(dataList));
};

nameTxt.addEventListener('input', saveData);
emailTxt.addEventListener('input', saveData);
msgTxt.addEventListener('input', saveData);

window.addEventListener('load', () => {
  const dataList = JSON.parse(localStorage.getItem('dataList'));
  nameTxt.value = dataList.name;
  emailTxt.value = dataList.email;
  msgTxt.value = dataList.msg;
});
