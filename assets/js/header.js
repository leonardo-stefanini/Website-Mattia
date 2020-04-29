
    $(".header__icon-bar").click((e) => {
           $(".header__menu").toggleClass('is-open');
           e.preventDefault();
    });

    /* Slider */

    $(() => {
       var mySwiper = new Swiper ('.swiper-container', {
              navigation: {
                     nextEl: '.swiper-button-next',
                     prevEl: '.swiper-button-prev',
              },
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
              let $nav = $(".header");
              let $slider = $('.swiper-container')
              $nav.toggleClass('normal', $(this).scrollTop() > 10);
              });
     });

