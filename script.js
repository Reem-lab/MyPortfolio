function mobileMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const mainNav = document.querySelector('.main-nav');
  const exitIcon = document.querySelector('.exit');
  const navLinks = document.querySelectorAll('.ul-menu li');
  // const body = document.querySelector('body');

  menuIcon.addEventListener('click', () => {
    mainNav.classList.add('main-nav-active');
  });
  exitIcon.addEventListener('click', () => {
    mainNav.classList.remove('main-nav-active');
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', ()=>{
      mainNav.classList.remove('main-nav-active');
    });
  });
}

mobileMenu();