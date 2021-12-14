function mobileMenu () {
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

const cardPopUp = [
  {
    name: 'tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'images/snapshoot/snapshoot_1.svg',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveVersion: 'https://reem-lab.github.io/MyPortfolio/',
    source: 'https://github.com/Reem-lab/MyPortfolio'
  },

  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'images/snapshoot/snapshoot_2.svg',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveVersion: 'https://reem-lab.github.io/MyPortfolio/',
    source: 'https://github.com/Reem-lab/MyPortfolio'
  },
  {
    name: 'tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'images/snapshoot/snapshoot_3.svg',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveVersion: 'https://reem-lab.github.io/MyPortfolio/',
    source: 'https://github.com/Reem-lab/MyPortfolio'
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'images/snapshoot/snapshoot_4.svg',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveVersion: 'https://reem-lab.github.io/MyPortfolio/',
    source: 'https://github.com/Reem-lab/MyPortfolio'
  }
];

const ProjectElments = cardPopUp.map((ele, index) => {
  const container = document.createElement('article');
  if (index % 2 === 1) {
    container.className = 'card flex flex-column bg row-reverse';
  } else {
    container.className = 'card flex flex-column bg';
  }
  container.innerHTML = ` <img src="${ele.img}" alt="project photo">
    <div class="content">
      <h3 class="heading bold cap">${ele.name}</h3>
      <ul class="info flex">
        <li class="category flex cross-center ellipse line-height highlight uppe">CANOPY</li>
        <li class="category flex cross-center ellipse line-height highlight uppe">Back End Dev</li>
        <li class="category flex cross-center ellipse line-height highlight uppe">2015</li>
      </ul>
      <p>
      ${ele.description}
      </p>
      <ul class="tags flex">
        <li class="line-height round-borders">${ele.technologies[0]}</li>
        <li class="line-height round-borders">${ele.technologies[1]}</li>
        <li class="line-height round-borders">${ele.technologies[2]}</li>
      </ul>
      <button class="btn bg round-borders cap " type="button">see project</button>
    </div>`;
  return container;
});

const works = document.querySelector('#pop-works');
for (let i = 0; i < ProjectElments.length; i += 1) {
  works.appendChild(ProjectElments[i]);
}

const btn = document.querySelector('.btn');
const cardPop = document.querySelector('.container-Pop');
const exit = document.querySelector('.exit-card');

btn.addEventListener('click', () => {
  cardPop.classList.add('show');
});

exit.addEventListener('click', () => {
  cardPop.classList.remove('show');
});
