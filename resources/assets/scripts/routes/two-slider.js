//swiper two
//swiper swipe
// eslint-disable-next-line no-undef,no-unused-vars
var twoSlider = new Swiper('.swiper-container-two', {
  speed: 0,
  onlyExternal:true,
  effect: 'fade',
});

//swiper swipe
twoSlider.on('transitionStart', function () {
  if(twoSlider.activeIndex > 0) {
    setTimeout( function () {
      $('.swiper-container .swiper-slide .info-slide__head').addClass('show-title')
    }, 100);
  } else  {
    $('.swiper-container .swiper-slide .info-slide__head').removeClass('show-title')
  }

  setTimeout( function () {
    if (twoSlider.activeIndex === 0) {
      $('.one .swiper-slide:first-child .info-slide__head').removeClass('hide-title');
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

});

//arrow click
$('.two .arrow-left').click( function () {
  if (twoSlider.activeIndex > 0) {
    $('.swiper-container-two .swiper-slide-prev .info-slide__other').addClass('fade-left');
    $('.two .swiper-slide-active .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      twoSlider.slidePrev();
    }, 500);
  }
});

$('.two .arrow-right').click( function () {
  console.log(twoSlider.activeIndex)
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
});

//img animation
$('.two .arrow-right, .two .arrow-left, .two .navigation-pag li').click(function () {
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
});

function nextSlide(numberSlide) {
  if (numberSlide == 0) {
    if (twoSlider.activeIndex == 0 || twoSlider.activeIndex == 1) {
      $('.two-page .animate-img').addClass('hide-3 hide-4 hide-5 hide-6 hide-7');
    } else {
      $('.two-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
    }
  } else if (numberSlide == 1) {
    $('.one .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    if (twoSlider.activeIndex == 0 || twoSlider.activeIndex == 1) {
      $('.two-page .animate-img').addClass('hide-3 hide-4 hide-5 hide-6 hide-7');
    } else {
      $('.two-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
    }
  } else if (numberSlide == 2) {
    $('.one .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.two-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 3) {
    $('.one .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.two-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 4) {
    $('.one .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.two-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  }
}


