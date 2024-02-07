export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowHalf = window.innerHeight * 0.45;

  function scrollAnimation() {
    sections.forEach((sect) => {
      const sectTop = sect.getBoundingClientRect().top - windowHalf;
      const isSectionVisible = (sectTop - windowHalf) < 0;
      if (isSectionVisible) {
        sect.classList.add('ativo');
      } else if (sect.classList.contains('ativo')) {
        sect.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    scrollAnimation();

    window.addEventListener('scroll', scrollAnimation);
  }
}
