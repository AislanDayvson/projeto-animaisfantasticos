import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
  const botaoMenu = document.querySelector('[data-menu="button"]');
  const listaMenu = document.querySelector('[data-menu="lista"]');
  const eventos = ['click', 'touchstart'];
  function openMenu() {
    botaoMenu.classList.add('ativoMenu');
    listaMenu.classList.add('ativoMenu');
    outsideClick(listaMenu, eventos, () => {
      botaoMenu.classList.remove('ativoMenu');
      listaMenu.classList.remove('ativoMenu');
    });
  }
  if (botaoMenu) {
    eventos.forEach((evento) => {
      botaoMenu.addEventListener(evento, openMenu);
    });
  }
}
