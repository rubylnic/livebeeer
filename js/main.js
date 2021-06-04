//lazyload

  setTimeout(function() {
    lozad('.lazyload').observe();
    },0);


// 'use strict';
// (function() {
//   var openBtn = document.querySelector('.header__burger');
//   var closeBtn = document.querySelector('.header__close');
//   var nav = document.querySelector('.nav');

//   var openMenu = function(evt) {
//     evt.preventDefault();
//     nav.classList.remove('nav--hidden');
//     nav.classList.add('nav--show');
//     openBtn.classList.add('header__burger--closed');
//     closeBtn.classList.remove('header__close--closed');
//   };

//   var closeMenu = function(evt) {
//     evt.preventDefault();
//     nav.classList.add('nav--hidden');
//     nav.classList.remove('nav--show');
//     openBtn.classList.remove('header__burger--closed');
//     closeBtn.classList.add('header__close--closed');
//   };

//   openBtn.addEventListener('click', openMenu);
//   closeBtn.addEventListener('click', closeMenu);
// })();
let openBtn = document.querySelector('.header__search-button');
let closeBtn = document.querySelector('.header__form-close');
let form = document.querySelector('.header__search');
if (openBtn) {
  openBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    form.classList.remove('header__search--hidden');
  });

  closeBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    form.classList.add('header__search--hidden');
  });
}
document.addEventListener('DOMContentLoaded', () => {
  // const createDiv = function(elmnt, style, text)  {
  //     console.log(elmnt, style, text);
  //     let newElmnt = document.createElement(elmnt);
  //     newElmnt.classList.add(style);
  //     newElmnt.textContent = text;
  //     document.querySelector('.main').append(newElmnt);
  //     setTimeout(() => {
  //         newElmnt.remove();
  //         newElmnt = null;
  //     }, 2000);
  // };

  const url = '../mail.php';

  const ajaxSend = async(formData) => {
    const fetchResp = await fetch('../mail.php', {
      method: 'POST',
      body: formData
    });
    if (!fetchResp.ok) {
      throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
    }
    return await fetchResp.text();
  };

  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);

      ajaxSend(formData)
        .then((response) => {
          document.querySelector('.modal--success').classList.remove('modal--closed');
          form.reset(); // очищаем поля формы 
        })
        .catch((err) => document.querySelector('.modal--fail').classList.remove('modal--closed'));
    });
  });

});
'use strict';
(function() {


  var mainSwiper = new Swiper('.main-slider__slider-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  var mainSwiper = new Swiper('.slider', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 70,
      }
    }
  });

  var recommendSwiper = new Swiper('.recommend-slider', {
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      }
    }
  });

})();