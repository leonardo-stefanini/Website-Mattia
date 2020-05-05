
    $(".header__icon-bar").click((e) => {
           $(".header__menu").toggleClass('is-open');
           e.preventDefault();
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
       })
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
