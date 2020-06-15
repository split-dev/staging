//swiper five
//swiper swipe
// eslint-disable-next-line no-undef,no-unused-vars
var fiveSlider = new Swiper('.swiper-container-five', {
  speed: 0,
  onlyExternal:true,
  effect: 'fade',
});

//swiper swipe
fiveSlider.on('transitionStart', function () {
  if(fiveSlider.activeIndex > 0) {
    setTimeout( function () {
      $('.swiper-container .swiper-slide .info-slide__head').addClass('show-title')
    }, 100);
  } else  {
    $('.swiper-container .swiper-slide .info-slide__head').removeClass('show-title')
  }

  setTimeout( function () {
    if (fiveSlider.activeIndex === 0) {
      $('.one .swiper-slide:first-child .info-slide__head').removeClass('hide-title');
      $('.five-page .animate-img').removeClass('hide-1 hide-2');
    } else if (fiveSlider.activeIndex === 1) {
      $('.five-page .animate-img').removeClass('hide-3');
    } else if (fiveSlider.activeIndex === 2) {
      $('.five-page .animate-img').removeClass('hide-4');
    } else if (fiveSlider.activeIndex === 3) {
      $('.five-page .animate-img').removeClass('hide-4 hide-5');
    }  else if (fiveSlider.activeIndex === 4) {
      $('.five-page .animate-img').removeClass('hide-4 hide-5');
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

});

//arrow click
$('.five .arrow-left').click( function () {
  if (fiveSlider.activeIndex > 0) {
    $('.swiper-container-five .swiper-slide-prev .info-slide__other').addClass('fade-left');
    $('.five .swiper-slide-active .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      fiveSlider.slidePrev();
    }, 500);
  }
});

$('.five .arrow-right').click( function () {
  console.log(fiveSlider.activeIndex)
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
});

//img animation
$('.five .arrow-right, .five .arrow-left, .five .navigation-pag li').click(function () {
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
});

function nextSlide(numberSlide) {
  if (numberSlide == 0) {
    $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 1) {
    $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 2) {
    if (fiveSlider.activeIndex == 2 || fiveSlider.activeIndex == 3 || fiveSlider.activeIndex == 4) {
      $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-5');
    } else {
      $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5');
    }
  } else if (numberSlide == 3) {
    if (fiveSlider.activeIndex == 2 || fiveSlider.activeIndex == 3 || fiveSlider.activeIndex == 4) {
      $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-5');
    } else {
      $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5');
    }
  } else if (numberSlide == 4) {
    if (fiveSlider.activeIndex == 2 || fiveSlider.activeIndex == 3 || fiveSlider.activeIndex == 4) {
      $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-5');
    } else {
      $('.five-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5');
    }
  }
}


