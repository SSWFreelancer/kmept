$(document).ready(function () {
   $('.form-popup select').niceSelect();
   $('.specials__cards').slick({
      arrows: false,
      dots: false,
      slidesToShow:4,
      slidesToScroll:1,
      infinite:true,
      autoplay:true, 
      responsive: [
        {
          breakpoint: 1445,
          settings: {
            slidesToShow:3,
          }
        },
        {
          breakpoint: 1075,
          settings: {
            slidesToShow:2,
          }
        },
        {
          breakpoint: 573,
          settings: {
            slidesToShow:1.2,
            infinite:false,
          }
        },                 
      ]            
   });     
   $('.accreditation__slider').slick({
      arrows: false,
      dots: false,
      slidesToShow:5,
      slidesToScroll:1,
      infinite:true,
      autoplay:true,   
       responsive: [
        {
          breakpoint: 1487,
          settings: {
            slidesToShow:4,
          }
        },
        {
          breakpoint: 1186,
          settings: {
            slidesToShow:3,
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow:2.5,
            infinite:false,
          }
        },  
        {
          breakpoint: 640,
          settings: {
            slidesToShow:2,
            infinite:false,
          }
        }, 
        {
          breakpoint: 481,
          settings: {
            slidesToShow:1.6,
            infinite:false,
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow:1.3,
            infinite:false,
          }
        },                                       
      ]        
   });   
   $('.teacher__cards').slick({
      arrows: false,
      dots: false,
      slidesToShow:5,
      slidesToScroll:1,
      infinite:true,
      autoplay:true, 
      responsive: [
        {
          breakpoint: 1205,
          settings: {
            slidesToShow:3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow:2,
          }
        },
        {
          breakpoint: 485,
          settings: {
            slidesToShow:1.6,
            infinite:false,
          }
        },                 
      ]            
   }); 
   $('.news__cards').slick({
      arrows: false,
      dots: false,
      slidesToShow:5,
      slidesToScroll:1,
      infinite:true,
      autoplay:true, 
      responsive: [
        {
          breakpoint: 5000,
          settings: "unslick"
        },      
        {
          breakpoint: 1227,
          settings: {
            slidesToShow:3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow:2,
          }
        },
        {
          breakpoint: 521,
          settings: {
            slidesToShow:1.4,
            infinite:false,
          }
        },                 
      ]            
   });         
   $('.info__slider').slick({
      arrows: false,
      dots: false,
      slidesToShow:1,
      slidesToScroll:1,
      infinite:true,
      autoplay:true,     
   });          
    $('.header__search img').click(function (event) {
      $(this).parent().toggleClass('active');
   });  
    $('.label-list').click(function (event) {
      $('.cost').toggleClass('active');
      $( ".cost__professions" ).toggleClass('active');
   });  
                  
    $('.cost__professions span').click(function (event) {
      var text = $(this).text();
      $('.cost__who p').text(text);
      $('.cost').removeClass('active');
      $( ".cost__professions" ).removeClass('active');     
   });   
   var body = document.getElementsByTagName('body');
   var button = document.getElementsByClassName('main__button');
   var button1 = document.getElementsByClassName('main__doc');
   var formPopup = document.getElementsByClassName('form-popup');
   var formClose = document.getElementsByClassName('form-popup__close');
   var formClose1 = document.getElementsByClassName('form-popup__close1');
   button[0].addEventListener('click', function () {
       formPopup[0].classList.add('open');
       body[0].classList.add('lock');
   });
   button1[0].addEventListener('click', function () {
       formPopup[0].classList.add('open');
       body[0].classList.add('lock');
   });   
   formClose[0].addEventListener('click', function () {
       formPopup[0].classList.remove('open');
       body[0].classList.remove('lock');
       $('.form-popup__content').removeClass('active');
   });
   formClose1[0].addEventListener('click', function () {
       formPopup[0].classList.remove('open');
       body[0].classList.remove('lock');
       $('.form-popup__content').removeClass('active');
   });    
    $('.form-popup__content>button').click(function (event) {
      event.preventDefault();
      $(this).parent().addClass('active');
   }); 
    $('.form-popup__success>button').click(function (event) {
       formPopup[0].classList.remove('open');
       body[0].classList.remove('lock');
       $('.form-popup__content').removeClass('active');
   });  
    $('.news__card>a').click(function (event) {
      event.preventDefault();
      body[0].classList.add('lock');
      $('.popup').addClass('open');
   });
   $('.popup__close1').click(function (event) {
      event.preventDefault();
      body[0].classList.remove('lock');
      $('.popup').removeClass('open');
   });
   $('.popup__close').click(function (event) {
      event.preventDefault();
      body[0].classList.remove('lock');
      $('.popup').removeClass('open');
   });   
   $('.popup__button').click(function (event) {
      event.preventDefault();
      formPopup[0].classList.add('open');
      $('.popup').removeClass('open');
   }); 
    $('.mobile button').click(function (event) {
      event.preventDefault();
       formPopup[0].classList.add('open');
       body[0].classList.add('lock');
   });   
   $('.welcome__form').click(function (event) {
      event.preventDefault();
      formPopup[0].classList.add('open');
      body[0].classList.add('lock');     
      $('.form-popup__content').addClass('active welcomee');
   }); 

$('.header__checkbox').on('change', function() {
   $('body').toggleClass('black');
   if (!$("body").hasClass('black')) {
      $(".header__logo img").attr('src','img/logo.png');
      $(".header__search img").attr('src','img/search.png');
      $(".header__eye img").attr('src','img/eye.png');
      $(".footer__logo img").attr('src','img/logo-w.png');
      $(".welcome__content img").attr('src','img/students/youtube.png');
      $(".label-list img").attr('src','img/arrow.svg');


   } 
   else  {
      $(".header__logo img").attr('src','img/logo-white.png');
      $(".header__search img").attr('src','img/search-w.png');
      $(".header__eye img").attr('src','img/eye-w.png');
      $(".footer__logo img").attr('src','img/footerlogo-b.png');
      $(".welcome__content img").attr('src','img/students/youtubewhite.png');
      $(".label-list img").attr('src','img/students/arrow.svg');
   }
}); 

});      

