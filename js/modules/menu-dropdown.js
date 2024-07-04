const dropdowMenus = document.querySelectorAll('[data-dropdown]');

dropdowMenus.forEach(menu => {
  ['touchstart', 'click'].forEach(userEvent => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('ativo');
}