//swiper six
//swiper swipe
// eslint-disable-next-line no-undef,no-unused-vars
var sixSlider = new Swiper('.swiper-container-six', {
  speed: 0,
  onlyExternal:true,
  effect: 'fade',
});

//swiper swipe
sixSlider.on('transitionStart', function () {
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

});

//arrow click
$('.six .arrow-left').click( function () {
  if (sixSlider.activeIndex > 0) {
    $('.swiper-container-six .swiper-slide-prev .info-slide__other').addClass('fade-left');
    $('.six .swiper-slide-active .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      sixSlider.slidePrev();
    }, 500);
  }
});

$('.six .arrow-right').click( function () {
  console.log(sixSlider.activeIndex)
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
$('.six .arrow-right, .six .arrow-left, .six .navigation-pag li').click(function () {
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
    $('.six .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.six-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
  } else if (numberSlide == 1) {
    $('.six .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.six-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
  } else if (numberSlide == 2) {
    $('.six .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.six-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
  } else if (numberSlide == 3) {
    $('.six .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.six-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
  } else if (numberSlide == 4) {
    $('.six .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.six-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7 hide-8 hide-9');
  }
}


