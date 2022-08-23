
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 2,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper('.gallery', {
  slidesPerView: 1,
  slidesPerColumn: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerColumn: 4,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
      slidesPerColumn: 3,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 5,
      slidesPerColumn: 2,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
      slidesPerColumn: 1,
    }
  }
});






$(document).ready(function () {
  $(window).bind('scroll', function () {
    var navhight = $(window).height() - 0
    if ($(window).scrollTop() > 70) {
      $('nav').addClass('fixed-top');
    }
    else {
      $('nav').removeClass('fixed-top');
    }
  });

  $(".project").hover3d({
    selector: ".project__card",
    shine: true,
  })
 
  });


    $(".top").click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 0)
    });

    $(function(){
      $("#default").datetimepicker();

    });
