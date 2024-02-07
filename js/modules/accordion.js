export default function initAccordion() {
  const list = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'click';

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (list.length > 0) {
    list[0].classList.add(activeClass);
    list[0].nextElementSibling.classList.add(activeClass);
    list.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
