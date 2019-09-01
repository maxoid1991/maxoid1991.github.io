$(document).ready(function(){
    $('.slider').slick({
      'setting-name': 'setting-value',
      'prevArrow' : '<button type="button" class="slick-prev"><</button>',
      'nextArrow' : '<button type="button" class="slick-next">></button>',
    });
  });

  const mobileMenu = function(){
      var button = document.querySelector('.js_mobile_tab');
      var menu = document.querySelector('.menu');
      button.addEventListener('click', function(){
        menu.classList.toggle('menu--shown');
      });
  };

  mobileMenu();