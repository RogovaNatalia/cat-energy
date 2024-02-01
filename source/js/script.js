document.querySelectorAll('.toggleable').forEach((parent) => {
  const showButton = parent.querySelector('.toggleable__button--show');
  const hideButton = parent.querySelector('.toggleable__button--hide');
  const content = parent.querySelector('.toggleable__content');

  showButton.addEventListener('click', function () {
    parent.classList.add('toggleable--shown');
  });

  hideButton.addEventListener('click', function () {
    parent.classList.remove('toggleable--shown');
  });
});
