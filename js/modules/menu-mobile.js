const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[data-menu="list"]');
const eventos = ['click', 'touchstart'];

if (menuButton) {
function openMenu(event) {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
    outsideClick(menuList, eventos, () => {
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
    })
}

eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
}






function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';
  
    if (!element.hasAttribute(outside)) {
      events.forEach(userEvent => {
       setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
      });
      element.setAtribute(outside, '');
    }
  
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach(userEvent => {
          html.removeEventListener(userEvent, handleOutsideClick);
        });
        callback();
      }
    }
  };