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

const cardPopUp = [
  {
    name: 'AwesomeBooks',
    description: 'This project is BookStore so the user can add books by just enter Book name and the author After the user add it, it already displayed in the top of the page and can remove it by remove button.',
    img: 'images/awesome1.PNG',
    technologies: ['JavaScript', 'HTML', 'CSS', 'webpack'],
    liveVersion: 'https://reem-lab.github.io/AwesomeBooks/',
    source: 'https://github.com/Reem-lab/AwesomeBooks',
  },
  {
    name: 'Adopte Me',
    description: 'This project is real worl application contain some animals that I get it from API and I show it to the user and he can choose by select your location and the animal that you want to adopt then you can a list of breed for this animal. if you press any of them you can go to page and hold it.',
    img: 'images/adopt1.PNG',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Reactjs'],
    liveVersion: '',
    source: 'https://github.com/Reem-lab/pet-animals',
  },
  {
    name: 'Bank App',
    description: 'This project is a simple bankist application so you can transfer mony from it and to take loan from bank and you can see your movemnt your deposits and withdrawals and some functionality to close accout if you want to. 🏦💹🏧💵 And you can get in by username : "js" & password : 1111',
    img: 'images/Capture.PNG',
    technologies: ['JavaScript', 'HTML', 'CSS', 'CSS3'],
    liveVersion: 'https://reem-lab.github.io/BankApp-Array/',
    source: 'https://github.com/Reem-lab/BankApp-Array',
  },
  {
    name: 'Budget App',
    description: 'Budget app is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what',
    img: 'images/buget1.PNG',
    technologies: ['Ruby', 'ruby on rails', 'bootsrape', 'rspec', 'heroku'],
    liveVersion: 'https://agile-atoll-37898.herokuapp.com/',
    source: 'https://github.com/Reem-lab/budget-app',
  },
  
  {
    name: 'Recipe app',
    description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    img: 'images/recipe1.PNG',
    technologies: ['Ruby', 'ruby on rails', 'bootsrape', 'rspec', 'heroku'],
    liveVersion: 'https://powerful-mountain-66036.herokuapp.com/',
    source: 'https://github.com/Reem-lab/Recipe-app',
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
        <li class="line-height round-borders">${ele.technologies[3]}</li>
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
          <ul class="popUp-tags tags flex">
            <li class="line-height round-borders">${objItem.technologies[0]}</li>
            <li class="line-height round-borders">${objItem.technologies[1]}</li>
            <li class="line-height round-borders">${objItem.technologies[2]}</li>
          </ul>
          <div class="btn2">
          <a href=${objItem.liveVersion} target="_black">
            <button class="b1 bg round-borders cap " type="button">see live <img src="images/arrowCir.svg" alt="goto"></button>
            </a>
            <a href=${objItem.source} target="_black">
            <button class="b2 bg round-borders cap " type="button">see Source <img src="images/cat.svg" alt="sourceCode"></button>
            </a>
          </div>
          </div>
          </div> `;

  const works2 = document.querySelector('#container-pop');
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
const msg = document.querySelector('#errorMsg');
const regex = /[A-Z]/;

form.addEventListener('submit', (event) => {
  const emailInput = email.value;
  if (regex.test(emailInput)) {
    event.preventDefault();
    msg.textContent = '*The email should contain only lowerCase letters!!';
  }
});

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
