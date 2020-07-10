//swiper two
//swiper swipe
// eslint-disable-next-line no-undef,no-unused-vars
var twoSlider = new Swiper('.swiper-container-two', {
  speed: 0,
  onlyExternal:true,
  effect: 'fade',
});

//swiper swipe
//five click-box
let widthD = document.querySelector('body').getBoundingClientRect().width;
if (widthD < 1024) {
  $('.two-page .card-header').click( function () {
    setTimeout(function(){
      arraySize[4] = $('.two-page .swiper-slide-active .info-slide__other').height();
      $('.two-page .swiper-wrapper').css('height', arraySize[4] + 'px');
    }, 250);
  });
}

let arraySlide = $('.two-page .swiper-wrapper .swiper-slide');
let arraySize = [];
let size = 30;
if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  size = 50;
}
for (let i = 0; i<arraySlide.length; i++) {
  arraySize[i] = $(arraySlide[i]).height() + size;
}

$('.two-page .swiper-wrapper').css('height', arraySize[0]);
twoSlider.on('transitionStart', function () {
  $('.two-page .swiper-wrapper').css('height', arraySize[twoSlider.activeIndex]);
  if(twoSlider.activeIndex > 0) {
    setTimeout( function () {
      $('.two .swiper-container .swiper-slide .info-slide__head').addClass('show-title')
    }, 100);
  } else  {
    $('.two .swiper-container .swiper-slide .info-slide__head').removeClass('show-title')
  }

  setTimeout( function () {
    if (twoSlider.activeIndex === 0) {
      $('.two .swiper-slide:first-child .info-slide__head').removeClass('hide-title');
      $('.two-page .animate-img').removeClass('hide-1 hide-2');
    } else if (twoSlider.activeIndex === 1) {
      $('.two-page .animate-img').removeClass('hide-1 hide-2');
    } else if (twoSlider.activeIndex === 2) {
      $('.two-page .animate-img').removeClass('hide-3');
    } else if (twoSlider.activeIndex === 3) {
      $('.two-page .animate-img').removeClass('hide-4 hide-5 hide-6');
    }  else if (twoSlider.activeIndex === 4) {
      $('.two-page .animate-img').removeClass('hide-7');
    }
  }, 400);

  setTimeout( function () {
    $('.swiper-container-two .swiper-slide .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-two .swiper-slide-prev .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-two .swiper-slide-active .info-slide__other').removeClass('fade-left fade-right');
  }, 400);
  $('.swiper-container-two .swiper-slide').removeClass('hide');
  $('.swiper-container-two .swiper-slide:not(.swiper-slide-active)').addClass('hide');
  //pagination
  let active = twoSlider.activeIndex;
  let array = $('.two .navigation-pag li');
  $('.two .navigation-pag li').removeClass('def active')
  for (let i = 0; i <= active; i++) {
    if (i < active) {
      $(array[i]).addClass('def');
    } else if (i == active) {
      $(array[i]).addClass('active');
      break;
    }
  }


  if (twoSlider.activeIndex > 0 && twoSlider.activeIndex < 4) {
    $('.two-page .animate-img .arrow-left').removeClass('hide');
    $('.two-page .animate-img .arrow-right').removeClass('hide');
    $('.navigation-two .arrow-left').removeClass('opacity');
    $('.navigation-two .arrow-right').removeClass('opacity');
  } else if (twoSlider.activeIndex == 4) {
    $('.two-page .animate-img .arrow-right').addClass('hide');
    $('.navigation-two .arrow-right').addClass('opacity');
    $('.navigation-two .arrow-left').removeClass('opacity');
  } else if (twoSlider.activeIndex == 0) {
    $('.two-page .animate-img .arrow-left').addClass('hide');
    $('.navigation-two .arrow-left').addClass('opacity');
    $('.navigation-two .arrow-right').removeClass('opacity');
  }
});

//arrow click
$('.two-page .arrow-left').click( function () {
  if (twoSlider.activeIndex > 0) {
    $('.swiper-container-two .swiper-slide-prev .info-slide__other').addClass('fade-left');
    $('.two .swiper-slide-active .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      twoSlider.slidePrev();
    }, 500);
  }
});

$('.two-page .arrow-right').click( function () {
  if (twoSlider.activeIndex < 4) {
    $('.two .swiper-slide-active .info-slide__other').addClass('fade-left');
    $('.swiper-container-two .swiper-slide-next .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      twoSlider.slideNext();
    }, 500);
  }
});

//pag click
$('.two .navigation-pag li').click( function () {
  let el = $(this).attr('data-number');
  let active = twoSlider.activeIndex;
  if (el == active) {
    return;
  } else {
    if (el > active) {
      $('.two .swiper-slide-active .info-slide__other').addClass('fade-left');
      $('.swiper-container-two .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-right');
    } else {
      $('.swiper-container-two .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-left');
      $('.two .swiper-slide-active .info-slide__other').addClass('fade-right');
    }
    setTimeout(function(){
      twoSlider.slideTo(el)
    }, 500);
  }
});

//img animation
$('.two-page .arrow-right, .two-page .arrow-left, .two-page .navigation-pag li').click(function () {
  if ($(this).hasClass('active')) {
    return;
  } else {
    if ($(this).hasClass('arrow-left')) {
      if (twoSlider.activeIndex > 0) {
        nextSlide(twoSlider.activeIndex - 1);
      }
    } else if ($(this).hasClass('arrow-right')) {
      if (twoSlider.activeIndex < 4) {
        nextSlide(twoSlider.activeIndex + 1);
      }
    } else {
      nextSlide(Number($(this).attr('data-number')));
    }
  }
});

function nextSlide(numberSlide) {
  if (numberSlide == 0) {
    setTimeout( function () {
      $('.two .swiper-container .swiper-slide .info-slide__head').removeClass('show-title');
    }, 200);
    if (twoSlider.activeIndex == 0 || twoSlider.activeIndex == 1) {
      $('.two-page .animate-img').addClass('hide-3 hide-4 hide-5 hide-6 hide-7');
    } else {
      $('.two-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
    }
  } else if (numberSlide == 1) {
    $('.two .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    if (twoSlider.activeIndex == 0 || twoSlider.activeIndex == 1) {
      $('.two-page .animate-img').addClass('hide-3 hide-4 hide-5 hide-6 hide-7');
    } else {
      $('.two-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
    }
  } else if (numberSlide == 2) {
    $('.two .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.two-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 3) {
    $('.two .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.two-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 4) {
    $('.two .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.two-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  }
}

//resize slider
let dist = true;
$(window).on('resize', function () {
  // eslint-disable-next-line no-unused-vars
  let widthD = document.querySelector('body').getBoundingClientRect().width;
  if( widthD < 1024 && dist && widthD > 575) {
    dist = false;
    arraySize = [106,372,350,350,371]
    if ($('.two-page .swiper-wrapper .swiper-slide-active').find($('.info-slide__other')).hasClass('info-slide__other')) {
      arraySlide = $('.two-page .swiper-wrapper .swiper-slide-active .info-slide__other').height();
    } else {
      arraySlide = $('.two-page .swiper-wrapper .swiper-slide-active .info-slide__head').height();
    }
    $('.two-page .swiper-wrapper').css('height', arraySize[twoSlider.activeIndex]);
  } else {
    return;
  }
});

//about link
$('.about-scroll').click( function () {
  // eslint-disable-next-line no-undef
  fullpage_api.moveTo(9);
});

$('.home-scroll').click( function () {
  // eslint-disable-next-line no-undef
  fullpage_api.moveTo(1);
});

