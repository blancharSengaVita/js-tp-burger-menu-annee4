//Alors j'ai pas bien compris l'énoncé que dois-je faire en plus ?

document.documentElement.classList.add('js-enabled');

const menu = document.querySelector('.nav-button');
const main = document.querySelector('.main');

menu.addEventListener('click', ()=> {
  main.classList.toggle('.is-opened');
});
