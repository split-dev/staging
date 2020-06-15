//swiper three
//swiper swipe
// eslint-disable-next-line no-undef,no-unused-vars
var threeSlider = new Swiper('.swiper-container-three', {
  speed: 0,
  onlyExternal:true,
  effect: 'fade',
});

//swiper swipe
threeSlider.on('transitionStart', function () {
  if(threeSlider.activeIndex > 0) {
    setTimeout( function () {
      $('.swiper-container .swiper-slide .info-slide__head').addClass('show-title')
    }, 100);
  } else  {
    $('.swiper-container .swiper-slide .info-slide__head').removeClass('show-title')
  }

  setTimeout( function () {
    if (threeSlider.activeIndex === 0) {
      $('.three .swiper-slide:first-child .info-slide__head').removeClass('hide-title');
      $('.three-page .animate-img').removeClass('hide-1 hide-2');
    } else if (threeSlider.activeIndex === 1) {
      $('.three-page .animate-img').removeClass('hide-3');
    } else if (threeSlider.activeIndex === 2) {
      $('.three-page .animate-img').removeClass('hide-4');
    } else if (threeSlider.activeIndex === 3) {
      $('.three-page .animate-img').removeClass('hide-4 hide-5');
    }  else if (threeSlider.activeIndex === 4) {
      $('.three-page .animate-img').removeClass('hide-4 hide-5');
    }
  }, 400);

  setTimeout( function () {
    $('.swiper-container-three .swiper-slide .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-three .swiper-slide-prev .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-three .swiper-slide-active .info-slide__other').removeClass('fade-left fade-right');
  }, 400);
  $('.swiper-container-three .swiper-slide').removeClass('hide');
  $('.swiper-container-three .swiper-slide:not(.swiper-slide-active)').addClass('hide');
  //pagination
  let active = threeSlider.activeIndex;
  let array = $('.three .navigation-pag li');
  $('.three .navigation-pag li').removeClass('def active')
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
$('.three .arrow-left').click( function () {
  if (threeSlider.activeIndex > 0) {
    $('.swiper-container-three .swiper-slide-prev .info-slide__other').addClass('fade-left');
    $('.three .swiper-slide-active .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      threeSlider.slidePrev();
    }, 500);
  }
});

$('.three .arrow-right').click( function () {
  console.log(threeSlider.activeIndex)
  if (threeSlider.activeIndex < 4) {
    $('.three .swiper-slide-active .info-slide__other').addClass('fade-left');
    $('.swiper-container-three .swiper-slide-next .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      threeSlider.slideNext();
    }, 500);
  }
});

//pag click
$('.three .navigation-pag li').click( function () {
  let el = $(this).attr('data-number');
  let active = threeSlider.activeIndex;
  if (el > active) {
    $('.three .swiper-slide-active .info-slide__other').addClass('fade-left');
    $('.swiper-container-three .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-right');
  } else {
    $('.swiper-container-three .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-left');
    $('.three .swiper-slide-active .info-slide__other').addClass('fade-right');
  }
  setTimeout(function(){
    threeSlider.slideTo(el)
  }, 500);
});

//img animation
$('.three .arrow-right, .three .arrow-left, .three .navigation-pag li').click(function () {
  if ($(this).hasClass('arrow-left')) {
    if (threeSlider.activeIndex > 0) {
      nextSlide(threeSlider.activeIndex - 1);
    }
  } else if ($(this).hasClass('arrow-right')) {
    if (threeSlider.activeIndex < 4) {
      nextSlide(threeSlider.activeIndex + 1);
    }
  } else {
    nextSlide(Number($(this).attr('data-number')));
  }
});

function nextSlide(numberSlide) {
  if (numberSlide == 0) {
    $('.three-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 1) {
    $('.three .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.three-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 2) {
    $('.three .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    if (threeSlider.activeIndex == 2 || threeSlider.activeIndex == 3 || threeSlider.activeIndex == 4) {
      $('.three-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-5');
    } else {
      $('.three-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5');
    }
  } else if (numberSlide == 3) {
    $('.three .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    if (threeSlider.activeIndex == 2 || threeSlider.activeIndex == 3 || threeSlider.activeIndex == 4) {
      $('.three-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-5');
    } else {
      $('.three-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5');
    }
  } else if (numberSlide == 4) {
    $('.three .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    if (threeSlider.activeIndex == 2 || threeSlider.activeIndex == 3 || threeSlider.activeIndex == 4) {
      $('.three-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-5');
    } else {
      $('.three-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5');
    }
  }
}


