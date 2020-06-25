//swiper four
//swiper swipe
// eslint-disable-next-line no-undef,no-unused-vars
var fourSlider = new Swiper('.swiper-container-four', {
  speed: 0,
  onlyExternal:true,
  effect: 'fade',
});

//swiper swipe
//five click-box
let widthD = document.querySelector('body').getBoundingClientRect().width;
if (widthD < 1024) {
  $('.four-page .card-header').click( function () {
    setTimeout(function(){
      arraySize[4] = $('.four-page .swiper-slide-active .info-slide__other').height();
      $('.four-page .swiper-wrapper').css('height', arraySize[4] + 'px');
    }, 250);
  });
}
let arraySlide = $('.four-page .swiper-wrapper .swiper-slide');
let arraySize = [];
for (let i = 0; i<arraySlide.length; i++) {
  arraySize[i] = $(arraySlide[i]).height() + 20;
}
$('.four-page .swiper-wrapper').css('height', arraySize[0]);
fourSlider.on('transitionStart', function () {
  $('.four-page .swiper-wrapper').css('height', arraySize[fourSlider.activeIndex]);
  if(fourSlider.activeIndex > 0) {
    setTimeout( function () {
      $('.four .swiper-container .swiper-slide .info-slide__head').addClass('show-title')
    }, 100);
  } else  {
    $('.four .swiper-container .swiper-slide .info-slide__head').removeClass('show-title')
  }

  setTimeout( function () {
    if (fourSlider.activeIndex === 0) {
      $('.four .swiper-slide:first-child .info-slide__head').removeClass('hide-title');
      $('.four-page .animate-img').removeClass('hide-1 hide-2');
    } else if (fourSlider.activeIndex === 1) {
      $('.four-page .animate-img').removeClass('hide-1 hide-2');
    } else if (fourSlider.activeIndex === 2) {
      $('.four-page .animate-img').removeClass('hide-3');
    } else if (fourSlider.activeIndex === 3) {
      $('.four-page .animate-img').removeClass('hide-4 hide-5');
    }  else if (fourSlider.activeIndex === 4) {
      $('.four-page .animate-img').removeClass('hide-6 hide-7');
    }
  }, 400);

  setTimeout( function () {
    $('.swiper-container-four .swiper-slide .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-four .swiper-slide-prev .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-four .swiper-slide-active .info-slide__other').removeClass('fade-left fade-right');
  }, 400);
  $('.swiper-container-four .swiper-slide').removeClass('hide');
  $('.swiper-container-four .swiper-slide:not(.swiper-slide-active)').addClass('hide');
  //pagination
  let active = fourSlider.activeIndex;
  let array = $('.four .navigation-pag li');
  $('.four .navigation-pag li').removeClass('def active')
  for (let i = 0; i <= active; i++) {
    if (i < active) {
      $(array[i]).addClass('def');
    } else if (i == active) {
      $(array[i]).addClass('active');
      break;
    }
  }


  if (fourSlider.activeIndex > 0 && fourSlider.activeIndex < 4) {
    $('.four-page .animate-img .arrow-left').removeClass('hide');
    $('.four-page .animate-img .arrow-right').removeClass('hide');
    $('.navigation-four .arrow-left').removeClass('opacity');
    $('.navigation-four .arrow-right').removeClass('opacity');
  } else if (fourSlider.activeIndex == 4) {
    $('.four-page .animate-img .arrow-right').addClass('hide');
    $('.navigation-four .arrow-right').addClass('opacity');
  } else if (fourSlider.activeIndex == 0) {
    $('.four-page .animate-img .arrow-left').addClass('hide');
    $('.navigation-four .arrow-left').addClass('opacity');
  }
});

//arrow click
$('.four-page .arrow-left').click( function () {
  if (fourSlider.activeIndex > 0) {
    $('.swiper-container-four .swiper-slide-prev .info-slide__other').addClass('fade-left');
    $('.four .swiper-slide-active .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      fourSlider.slidePrev();
    }, 500);
  }
});

$('.four-page .arrow-right').click( function () {
  if (fourSlider.activeIndex < 4) {
    $('.four .swiper-slide-active .info-slide__other').addClass('fade-left');
    $('.swiper-container-four .swiper-slide-next .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      fourSlider.slideNext();
    }, 500);
  }
});

//pag click
$('.four-page .navigation-pag li').click( function () {
  let el = $(this).attr('data-number');
  let active = fourSlider.activeIndex;
  if (el == active) {
    return;
  } else {
    if (el > active) {
      $('.four .swiper-slide-active .info-slide__other').addClass('fade-left');
      $('.swiper-container-four .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-right');
    } else {
      $('.swiper-container-four .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-left');
      $('.four .swiper-slide-active .info-slide__other').addClass('fade-right');
    }
    setTimeout(function(){
      fourSlider.slideTo(el)
    }, 500);
  }
});

//img animation
$('.four-page .arrow-right, .four-page .arrow-left, .four-page .navigation-pag li').click(function () {
  if ($(this).hasClass('active')) {
    return;
  } else {
    if ($(this).hasClass('arrow-left')) {
      if (fourSlider.activeIndex > 0) {
        nextSlide(fourSlider.activeIndex - 1);
      }
    } else if ($(this).hasClass('arrow-right')) {
      if (fourSlider.activeIndex < 4) {
        nextSlide(fourSlider.activeIndex + 1);
      }
    } else {
      nextSlide(Number($(this).attr('data-number')));
    }
  }
});

function nextSlide(numberSlide) {
  if (numberSlide == 0) {
    setTimeout( function () {
      $('.four .swiper-container .swiper-slide .info-slide__head').removeClass('show-title');
    }, 200);
    $('.four .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    if (fourSlider.activeIndex == 0 || fourSlider.activeIndex == 1) {
      $('.four-page .animate-img').addClass('hide-3 hide-4 hide-5 hide-6 hide-7');
    } else {
      $('.four-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
    }
  } else if (numberSlide == 1) {
    $('.four .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    if (fourSlider.activeIndex == 0 || fourSlider.activeIndex == 1) {
      $('.four-page .animate-img').addClass('hide-3 hide-4 hide-5 hide-6 hide-7');
    } else {
      $('.four-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
    }
  } else if (numberSlide == 2) {
    $('.four .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.four-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 3) {
    $('.four .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.four-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 4) {
    $('.four .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.four-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  }
}

//resize slider
let dist = true;
$(window).on('resize', function () {
  // eslint-disable-next-line no-unused-vars
  let widthD = document.querySelector('body').getBoundingClientRect().width;
  if( widthD < 1024 && dist && widthD > 575) {
    dist = false;
    arraySize = [106,295,295,163,371];
    if ($('.four-page .swiper-wrapper .swiper-slide-active').find($('.info-slide__other')).hasClass('info-slide__other')) {
      arraySlide = $('.four-page .swiper-wrapper .swiper-slide-active .info-slide__other').height();
    } else {
      arraySlide = $('.four-page .swiper-wrapper .swiper-slide-active .info-slide__head').height();
    }
    $('.four-page .swiper-wrapper').css('height', arraySize[fourSlider.activeIndex]);
  } else {
    return;
  }
});
