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
    name: 'tonic2',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.2',
    img: 'images/snapshoot/snapshoot_3.svg',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveVersion: 'https://reem-lab.github.io/MyPortfolio/',
    source: 'https://github.com/Reem-lab/MyPortfolio'
  },
  {
    name: 'Multi-Post Stories2',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.2',
    img: 'images/snapshoot/snapshoot_4.svg',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveVersion: 'https://reem-lab.github.io/MyPortfolio/',
    source: 'https://github.com/Reem-lab/MyPortfolio'
  },
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

const ProjectPopUp = (event) => {
  const cardTitle = event.target.parentNode.children[0].innerHTML;
  let objItem;
  for (let i = 0; i < cardPopUp.length; i += 1) {
    if (cardPopUp[i].name === cardTitle) {
      objItem = cardPopUp[i];
    }
  }

  const container = document.createElement('article');
  container.className = 'card-pop card flex flex-column bg';
  container.setAttribute('id', 'card-popUp');

  container.innerHTML = `
      <div class="first">
      <img id="exit-popUp" class="exit-card" src="images/exit2.svg" alt="exit">
    <h3 class="heading bold cap">${objItem.name}</h3>
    </div>
    <ul class="info flex">
      <li class="category flex cross-center ellipse line-height highlight uppe">CANOPY</li>
      <li class="category flex cross-center ellipse line-height highlight uppe">Back End Dev</li>
      <li class="category flex cross-center ellipse line-height highlight uppe">2015</li>
    </ul>
        <img class="pro-img" src="${objItem.img}" alt="project photo">
        <div class="content-pop">
          <p>
          ${objItem.description}
          </p>
          <div class="lang-btn">
          <ul class="tags flex">
            <li class="line-height round-borders">${objItem.technologies[0]}</li>
            <li class="line-height round-borders">${objItem.technologies[1]}</li>
            <li class="line-height round-borders">${objItem.technologies[2]}</li>
          </ul>
          <div class="btn2">
            <button class="b1 bg round-borders cap " type="button">see live <img src="images/arrowCir.svg" alt="goto"></button>
            <button class="b2 bg round-borders cap " type="button">see Source <img src="images/cat.svg" alt="sourceCode"></button>
          </div>
          </div>
          </div> `;

  const works2 = document.querySelector('#container-pop')
  const cardPop = document.querySelector('.container-Pop');
  const body = document.querySelector('body');
  works2.appendChild(container);
  const exit = document.querySelector('#exit-popUp');
  cardPop.classList.add('show');
  body.classList.add('overflow-hidden');

  exit.addEventListener('click', () => {
    cardPop.classList.remove('show');
    body.classList.remove('overflow-hidden');
    works2.innerHTML = '';
  });
};

const btn = document.querySelectorAll('.btn');

btn.forEach((link) => {
  link.addEventListener('click', ProjectPopUp);
});

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const emailInput = email.value;
const msg = document.querySelector('#errorMsg');
const regex = /[a-z]/;

form.addEventListener('submit', (event) => {
  if (!regex.test(emailInput)) {
      event.preventDefault();
      msg.textContent = '*The content of the email field has to be in lower case.';
  }
});

