function initTabNav(){
const tabMenu = document.querySelectorAll('.js-tabMenu li');
const tabContent = document.querySelectorAll('.js-tabContent section');
tabContent[0].classList.add('ativo');

if(tabMenu.length && tabContent.length){
    function activeTab (index){
      tabContent.forEach((item)=>{
        item.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) =>{
      itemMenu.addEventListener('click', ()=>{
        activeTab(index);
      });
    })
}}
initTabNav();

  function initAccordion(){
  const list = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if(list.length > 0){
  list[0].classList.add(activeClass)
  list[0].nextElementSibling.classList.add(activeClass)

  function activeAccordion(){
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
  }
  
  list.forEach((item) =>{
    item.addEventListener('click', activeAccordion)
  })
    }   
      }
initAccordion();

function initScroll(){
const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })


  //Outra forma
  // const topo = section.offsetTop;
  // window.scrollTo({
  //   top: topo,
  //   behavior: "smooth",
  // })
}

linkInterno.forEach((link) =>{
  link.addEventListener('click', scrollSection)
})
}
initScroll();

function initScrollAnimation(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
    const windowHalf = window.innerHeight * 0.45;

    function scrollAnimation(){
      sections.forEach((sect) =>{
        const sectTop = sect.getBoundingClientRect().top - windowHalf;
        const isSectionVisible = (sectTop - windowHalf) < 0;
        if(isSectionVisible){
          console.log('animar')
          sect.classList.add('ativo')
        }else{
          sect.classList.remove('ativo')
        }
      })
    }
    }

    scrollAnimation();

    window.addEventListener('scroll', scrollAnimation);
}
initScrollAnimation();