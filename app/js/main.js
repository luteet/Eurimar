
const body = document.querySelector('body'),
    html = document.querySelector('html'),
    menu = document.querySelectorAll('.header__burger, .header__nav, body'),
    burger = document.querySelector('.header__burger'),
    header = document.querySelector('.header');


body.addEventListener('click', function (event) {

    function $(elem) {
      return event.target.closest(elem)
    }

    // =-=-=-=-=-=-=-=-=-=- <header nav burger> -=-=-=-=-=-=-=-=-=-=-

    if ($('.header__burger')) {
        menu.forEach(element => {
            element.classList.toggle('_active')
        })
    }

    // =-=-=-=-=-=-=-=-=-=- </header nav burger> -=-=-=-=-=-=-=-=-=-=-



    // =-=-=-=-=-=-=-=-=-=- <scroll to section> -=-=-=-=-=-=-=-=-=-=-

    let btnToScroll = $('.btn-to-scroll');
    if(btnToScroll) {
      event.preventDefault();
      let section;
    
      if(btnToScroll.getAttribute('href').length > 1) {
        section = document.querySelector(btnToScroll.getAttribute('href'))
        if(section) section = section.offsetTop - 30; else section = 0;
      } else {
        section = 0
      }
    
      menu.forEach(elem => {
        elem.classList.remove('_active')
      })
    
      window.scroll({
        left: 0,
        top: section,
        behavior: 'smooth'
      })
    
    }

    // =-=-=-=-=-=-=-=-=-=- </scroll to section> -=-=-=-=-=-=-=-=-=-=-



    // =-=-=-=-=-=-=-=-=-=- <choose language in header> -=-=-=-=-=-=-=-=-=-=-

    const headerLanguageTarget = $('.header__language--target');
    if(headerLanguageTarget) {
      headerLanguageTarget.classList.toggle('_active');
      if(headerLanguageTarget.classList.contains('_hover')) {
        headerLanguageTarget.classList.remove('_hover');
      }
    } else if(!$('.header__language')) {
      document.querySelector('.header__language--target').classList.remove('_active')
    }

    // =-=-=-=-=-=-=-=-=-=- </choose language in header> -=-=-=-=-=-=-=-=-=-=-

})


// =-=-=-=-=-=-=-=-=-=- <Hover> -=-=-=-=-=-=-=-=-=-=-

function hover(hover, blur) {
  body.addEventListener("mouseover", function (event) {

    hover(
      function $(elem) {
        return event.target.closest(elem);
      }
    )

  })
  
  body.addEventListener("mouseout", function (event) {

    blur(
      function $from(elem) {
        return event.target.closest(elem);
      },
      function $to(elem) {
        if(event.relatedTarget) {
          return event.relatedTarget.closest(elem);
        } else {
          return null;
        }
        
      }
    )
  
  })
}

hover(
  function ($) {

    const headerLanguageTarget = $('.header__language--target')
    if(headerLanguageTarget) {
      if(!headerLanguageTarget.classList.contains('_hover')) {
        headerLanguageTarget.classList.add('_hover')
      }
    }

  },
  function ($from, $to) {

    const headerLanguageTarget = document.querySelector('.header__language--target'),
          headerLanguage = $to('.header__language');

    if(!headerLanguage) {
      
        headerLanguageTarget.classList.remove('_hover')
      
    }

})

// =-=-=-=-=-=-=-=-=-=- </Hover> -=-=-=-=-=-=-=-=-=-=-



// =-=-=-=-=-=-=-=-=-=- <RESIZE> -=-=-=-=-=-=-=-=-=-=-

let windowSize;

function resize() {

  windowSize = window.innerWidth
  html.style.setProperty('--height-header', header.offsetHeight + 'px');
  html.style.setProperty('--height-screen', window.innerHeight + 'px');

}

resize();

window.onresize = resize;

// =-=-=-=-=-=-=-=-=-=- </RESIZE> -=-=-=-=-=-=-=-=-=-=-

/* body.insertAdjacentHTML('beforeend', `<div class="offset-top-check"></div>`);
const offsetTopCheck = document.querySelector('.offset-top-check')

function scroll() {

  if(header.offsetTop <= 0) {
    header.classList.add('_top')
  } else {
    header.classList.remove('_top')
  }
  
}

scroll();

window.onscroll = scroll; */

// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=
/*
let slider = new Swiper('.__slider', {
  
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: false,

    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        centeredSlides: true,
    
      },
      600: {
        slidesPerView: 2,
        centeredSlides: false,
      },
    }
}); 
*/
// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=


/* 
// =-=-=-=-=-=-=-=-=-=-=-=- <Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

wow = new WOW({
mobile:       false,
})
wow.init();

// =-=-=-=-=-=-=-=-=-=-=-=- </Анимации> -=-=-=-=-=-=-=-=-=-=-=-=

*/
