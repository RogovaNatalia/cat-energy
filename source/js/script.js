const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menu = document.querySelector('.nav-toggle__menu');

openMenuBtn.addEventListener('click', function () {
  menu.classList.add('nav-toggle--open');
});

closeMenuBtn.addEventListener('click', function () {
  menu.classList.remove('nav-toggle--open');
});

