
       $(".header__icon-bar").click((e) => {
              let $menu = $(".header__menu")

              $menu.toggleClass('is-open')
              $menu.css('transition', 'all 400ms ease-in-out')

              $(".header__menu__item a").toggleClass('is-open')
              $("body").toggleClass('no-scroll')
              $(".croce").toggleClass('appear')
              
              e.preventDefault()
       });

       $(".croce").click((e) => {
              let $menu = $(".header__menu")

              $menu.toggleClass('is-open')
              $menu.css('transition', 'all 400ms ease-in-out')

              $(".header__menu__item a").toggleClass('is-open')
              $("body").toggleClass('no-scroll')

              e.preventDefault()
       });

     /* Header Transition */

     $(() => {
       $(document).scroll(() => {
              let $nav = $(".header")
              let $text = $('.header__menu__item a')
              let $hamburger = $('.header__icon-bar')
              
              $nav.toggleClass('normal', $(this).scrollTop() > 50)
              $text.toggleClass('normal', $(this).scrollTop() > 50)
              $hamburger.toggleClass('normal', $(this).scrollTop() > 50)
              });
     });


    /* Slider */

    $(() => {
       var mySwiper = new Swiper ('.swiper-container', {
              autoplay: {
                     delay: 6000,
                     disableOnInteraction: false,
              },
              direction: 'horizontal',
              loop: true,
              speed: 600,
              effect: 'slide',
              pagination: {
                     el: '.swiper-pagination',
                     clickable: true,
                     renderBullet: function (index, className) {
                       return '<span class="' + className + '">' + '</span>';
                     },
                   },
       })
     });
