export default function initScroll() {
  const linkInterno = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  function scrollSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Outra forma
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // })
  }

  linkInterno.forEach((link) => {
    link.addEventListener('click', scrollSection);
  });
}
