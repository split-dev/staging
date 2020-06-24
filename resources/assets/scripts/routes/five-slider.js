//swiper five
//swiper swipe
// eslint-disable-next-line no-undef,no-unused-vars
var fiveSlider = new Swiper('.swiper-container-five', {
  speed: 0,
  onlyExternal:true,
  effect: 'fade',
});

//swiper swipe
//five click-box
let widthD = document.querySelector('body').getBoundingClientRect().width;
if (widthD < 1024) {
  $('.five-page .card-header').click( function () {
    setTimeout(function(){
      arraySize[4] = $('.five-page .swiper-slide-active .info-slide__other').height();
      $('.five-page .swiper-wrapper').css('height', arraySize[4] + 'px');
    }, 250);
  });
}
let arraySlide = $('.five-page .swiper-wrapper .swiper-slide');
let arraySize = [];
for (let i = 0; i<arraySlide.length; i++) {
  arraySize[i] = $(arraySlide[i]).height() + 20;
}
$('.five-page .swiper-wrapper').css('height', arraySize[0]);
fiveSlider.on('transitionStart', function () {
  $('.five-page .swiper-wrapper').css('height', arraySize[fiveSlider.activeIndex]);
  if(fiveSlider.activeIndex > 0) {
    setTimeout( function () {
      $('.five .swiper-container .swiper-slide .info-slide__head').addClass('show-title')
    }, 100);
  } else  {
    $('.five .swiper-container .swiper-slide .info-slide__head').removeClass('show-title')
  }

  setTimeout( function () {
    if (fiveSlider.activeIndex === 0) {
      $('.five .swiper-slide:first-child .info-slide__head').removeClass('hide-title');
      $('.five-page .animate-img').removeClass('hide-1 hide-2');
    } else if (fiveSlider.activeIndex === 1) {
      $('.five-page .animate-img').removeClass('hide-3 hide-4');
    } else if (fiveSlider.activeIndex === 2) {
      $('.five-page .animate-img').removeClass('hide-5');
    } else if (fiveSlider.activeIndex === 3) {
      $('.five-page .animate-img').removeClass('hide-6 hide-7');
    }  else if (fiveSlider.activeIndex === 4) {
      $('.five-page .animate-img').removeClass('hide-8 hide-9');
    }
  }, 400);

  setTimeout( function () {
    $('.swiper-container-five .swiper-slide .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-five .swiper-slide-prev .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-five .swiper-slide-active .info-slide__other').removeClass('fade-left fade-right');
  }, 400);
  $('.swiper-container-five .swiper-slide').removeClass('hide');
  $('.swiper-container-five .swiper-slide:not(.swiper-slide-active)').addClass('hide');
  //pagination
  let active = fiveSlider.activeIndex;
  let array = $('.five .navigation-pag li');
  $('.five .navigation-pag li').removeClass('def active')
  for (let i = 0; i <= active; i++) {
    if (i < active) {
      $(array[i]).addClass('def');
    } else if (i == active) {
      $(array[i]).addClass('active');
      break;
    }
  }

  if (fiveSlider.activeIndex > 0 && fiveSlider.activeIndex < 4) {
    $('.five-page .animate-img .arrow-left').removeClass('hide');
    $('.five-page .animate-img .arrow-right').removeClass('hide');
    $('.navigation-five .arrow-left').removeClass('opacity');
    $('.navigation-five .arrow-right').removeClass('opacity');
  } else if (fiveSlider.activeIndex == 4) {
    $('.five-page .animate-img .arrow-right').addClass('hide');
    $('.navigation-five .arrow-right').addClass('opacity');
  } else if (fiveSlider.activeIndex == 0) {
    $('.five-page .animate-img .arrow-left').addClass('hide');
    $('.navigation-five .arrow-left').addClass('opacity');
  }
});

//arrow click
$('.five-page .arrow-left').click( function () {
  if (fiveSlider.activeIndex > 0) {
    $('.swiper-container-five .swiper-slide-prev .info-slide__other').addClass('fade-left');
    $('.five .swiper-slide-active .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      fiveSlider.slidePrev();
    }, 500);
  }
});

$('.five-page .arrow-right').click( function () {
  if (fiveSlider.activeIndex < 4) {
    $('.five .swiper-slide-active .info-slide__other').addClass('fade-left');
    $('.swiper-container-five .swiper-slide-next .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      fiveSlider.slideNext();
    }, 500);
  }
});

//pag click
$('.five .navigation-pag li').click( function () {
  let el = $(this).attr('data-number');
  let active = fiveSlider.activeIndex;
  if (el == active) {
    return;
  } else {
    if (el > active) {
      $('.five .swiper-slide-active .info-slide__other').addClass('fade-left');
      $('.swiper-container-five .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-right');
    } else {
      $('.swiper-container-five .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-left');
      $('.five .swiper-slide-active .info-slide__other').addClass('fade-right');
    }
    setTimeout(function(){
      fiveSlider.slideTo(el)
    }, 500);
  }
});

//img animation
$('.five-page .arrow-right, .five-page .arrow-left, .five-page .navigation-pag li').click(function () {
  if ($(this).hasClass('active')) {
    return;
  } else {
    if ($(this).hasClass('arrow-left')) {
      if (fiveSlider.activeIndex > 0) {
        nextSlide(fiveSlider.activeIndex - 1);
      }
    } else if ($(this).hasClass('arrow-right')) {
      if (fiveSlider.activeIndex < 4) {
        nextSlide(fiveSlider.activeIndex + 1);
      }
    } else {
      nextSlide(Number($(this).attr('data-number')));
    }
  }
});

function nextSlide(numberSlide) {
  if (numberSlide == 0) {
    setTimeout( function () {
      $('.five .swiper-container .swiper-slide .info-slide__head').removeClass('show-title');
    }, 200);
    $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
    $('.five-page .animate-img .button_su').removeClass('vis');
  } else if (numberSlide == 1) {
    $('.five .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
    $('.five-page .animate-img .button_su').removeClass('vis');
  } else if (numberSlide == 2) {
    $('.five .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
    $('.five-page .animate-img .button_su').addClass('vis');
  } else if (numberSlide == 3) {
    $('.five .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
    $('.five-page .animate-img .button_su').removeClass('vis');
  } else if (numberSlide == 4) {
    $('.five .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
    $('.five-page .animate-img .button_su').removeClass('vis');
  }
}


