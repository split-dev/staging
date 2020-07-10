//swiper six
//swiper swipe
// eslint-disable-next-line no-undef,no-unused-vars
var sixSlider = new Swiper('.swiper-container-six', {
  speed: 0,
  onlyExternal:true,
  effect: 'fade',
});

//swiper swipe
//five click-box
let widthD = document.querySelector('body').getBoundingClientRect().width;
if (widthD < 1024) {
  $('.six-page .card-header').click( function () {
    setTimeout(function(){
      arraySize[4] = $('.six-page .swiper-slide-active .info-slide__other').height();
      $('.six-page .swiper-wrapper').css('height', arraySize[4] + 'px');
    }, 250);
  });
}
let arraySlide = $('.six-page .swiper-wrapper .swiper-slide');
let arraySize = [];
let size = 30;
if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  size = 50;
}
for (let i = 0; i<arraySlide.length; i++) {
  arraySize[i] = $(arraySlide[i]).height() + size;
}
$('.six-page .swiper-wrapper').css('height', arraySize[0]);
sixSlider.on('transitionStart', function () {
  $('.six-page .swiper-wrapper').css('height', arraySize[sixSlider.activeIndex]);
  if(sixSlider.activeIndex > 0) {
    setTimeout( function () {
      $('.six .swiper-container .swiper-slide .info-slide__head').addClass('show-title')
    }, 100);
  } else  {
    $('.six .swiper-container .swiper-slide .info-slide__head').removeClass('show-title')
  }

  setTimeout( function () {
    if (sixSlider.activeIndex === 0) {
      $('.six .swiper-slide:first-child .info-slide__head').removeClass('hide-title');
      $('.six-page .animate-img').removeClass('hide-1');
    } else if (sixSlider.activeIndex === 1) {
      $('.six-page .animate-img').removeClass('hide-2 hide-3');
    } else if (sixSlider.activeIndex === 2) {
      $('.six-page .animate-img').removeClass('hide-4');
    } else if (sixSlider.activeIndex === 3) {
      $('.six-page .animate-img').removeClass('hide-5 hide-6 hide-7');
    }  else if (sixSlider.activeIndex === 4) {
      $('.six-page .animate-img').removeClass('hide-8 hide-9');
    }
  }, 400);

  setTimeout( function () {
    $('.swiper-container-six .swiper-slide .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-six .swiper-slide-prev .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-six .swiper-slide-active .info-slide__other').removeClass('fade-left fade-right');
  }, 400);
  $('.swiper-container-six .swiper-slide').removeClass('hide');
  $('.swiper-container-six .swiper-slide:not(.swiper-slide-active)').addClass('hide');
  //pagination
  let active = sixSlider.activeIndex;
  let array = $('.six .navigation-pag li');
  $('.six .navigation-pag li').removeClass('def active')
  for (let i = 0; i <= active; i++) {
    if (i < active) {
      $(array[i]).addClass('def');
    } else if (i == active) {
      $(array[i]).addClass('active');
      break;
    }
  }


  if (sixSlider.activeIndex > 0 && sixSlider.activeIndex < 4) {
    $('.six-page .animate-img .arrow-left').removeClass('hide');
    $('.six-page .animate-img .arrow-right').removeClass('hide');
    $('.navigation-six .arrow-left').removeClass('opacity');
    $('.navigation-six .arrow-right').removeClass('opacity');
  } else if (sixSlider.activeIndex == 4) {
    $('.six-page .animate-img .arrow-right').addClass('hide');
    $('.navigation-six .arrow-right').addClass('opacity');
    $('.navigation-six .arrow-left').removeClass('opacity');
  } else if (sixSlider.activeIndex == 0) {
    $('.six-page .animate-img .arrow-left').addClass('hide');
    $('.navigation-six .arrow-left').addClass('opacity');
    $('.navigation-six .arrow-right').removeClass('opacity');
  }
});

//arrow click
$('.six-page .arrow-left').click( function () {
  if (sixSlider.activeIndex > 0) {
    $('.swiper-container-six .swiper-slide-prev .info-slide__other').addClass('fade-left');
    $('.six .swiper-slide-active .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      sixSlider.slidePrev();
    }, 500);
  }
});

$('.six-page .arrow-right').click( function () {
  if (sixSlider.activeIndex < 4) {
    $('.six .swiper-slide-active .info-slide__other').addClass('fade-left');
    $('.swiper-container-six .swiper-slide-next .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      sixSlider.slideNext();
    }, 500);
  }
});

//pag click
$('.six .navigation-pag li').click( function () {
  let el = $(this).attr('data-number');
  let active = sixSlider.activeIndex;
  if (el == active) {
    return;
  } else {
    if (el > active) {
      $('.six .swiper-slide-active .info-slide__other').addClass('fade-left');
      $('.swiper-container-six .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-right');
    } else {
      $('.swiper-container-six .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-left');
      $('.six .swiper-slide-active .info-slide__other').addClass('fade-right');
    }
    setTimeout(function(){
      sixSlider.slideTo(el)
    }, 500);
  }
});

//img animation
$('.six-page .arrow-right, .six-page .arrow-left, .six-page .navigation-pag li').click(function () {
  if ($(this).hasClass('active')) {
    return;
  } else {
    if ($(this).hasClass('arrow-left')) {
      if (sixSlider.activeIndex > 0) {
        nextSlide(sixSlider.activeIndex - 1);
      }
    } else if ($(this).hasClass('arrow-right')) {
      if (sixSlider.activeIndex < 4) {
        nextSlide(sixSlider.activeIndex + 1);
      }
    } else {
      nextSlide(Number($(this).attr('data-number')));
    }
  }
});

function nextSlide(numberSlide) {
  if (numberSlide == 0) {
    setTimeout( function () {
      $('.six .swiper-container .swiper-slide .info-slide__head').removeClass('show-title');
    }, 200);
    $('.six .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.six-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
    $('.six-page .animate-img .button_su').removeClass('vis');
  } else if (numberSlide == 1) {
    $('.six .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.six-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
    $('.six-page .animate-img .button_su').removeClass('vis');
  } else if (numberSlide == 2) {
    $('.six .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.six-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
    $('.six-page .animate-img .button_su').addClass('vis');
  } else if (numberSlide == 3) {
    $('.six .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.six-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
    $('.six-page .animate-img .button_su').removeClass('vis');
  } else if (numberSlide == 4) {
    $('.six .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.six-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
    $('.six-page .animate-img .button_su').removeClass('vis');
  }
}

//resize slider
let dist = true;
$(window).on('resize', function () {
  // eslint-disable-next-line no-unused-vars
  let widthD = document.querySelector('body').getBoundingClientRect().width;
  if( widthD < 1024 && dist && widthD > 575) {
    dist = false;
    arraySize = [84,361,361,298,397];
    if ($('.six-page .swiper-wrapper .swiper-slide-active').find($('.info-slide__other')).hasClass('info-slide__other')) {
      arraySlide = $('.six-page .swiper-wrapper .swiper-slide-active .info-slide__other').height();
    } else {
      arraySlide = $('.six-page .swiper-wrapper .swiper-slide-active .info-slide__head').height();
    }
    $('.six-page .swiper-wrapper').css('height', arraySize[sixSlider.activeIndex]);
  } else {
    return;
  }
});


