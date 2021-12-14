function mobileMenu () {
  const menuIcon = document.querySelector('#menu-icon');
  const mainNav = document.querySelector('.main-nav');
  const exitIcon = document.querySelector('.exit');
  const navLinks = document.querySelectorAll('.ul-menu li');
  const body = document.querySelector('body');
  const intro = document.querySelector('#intro');

  menuIcon.addEventListener('click', () => {
    mainNav.classList.add('main-nav-active');
    intro.classList.add('blurry');
    body.classList.add('overflow-hidden');
  });
  exitIcon.addEventListener('click', () => {
    mainNav.classList.remove('main-nav-active');
    intro.classList.remove('blurry');
    body.classList.remove('overflow-hidden');
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      intro.classList.remove('blurry');
      mainNav.classList.remove('main-nav-active');
      body.classList.remove('overflow-hidden');
    });
  });
}

mobileMenu();
