//swiper seven
//swiper swipe
// eslint-disable-next-line no-undef,no-unused-vars
var sevenSlider = new Swiper('.swiper-container-seven', {
  speed: 0,
  onlyExternal:true,
  effect: 'fade',
});

//swiper swipe
let arraySlide = $('.seven-page .swiper-wrapper .swiper-slide');
let arraySize = [];
for (let i = 0; i<arraySlide.length; i++) {
  arraySize[i] = $(arraySlide[i]).height() + 20;
}
$('.seven-page .swiper-wrapper').css('height', arraySize[0]);
sevenSlider.on('transitionStart', function () {
  $('.seven-page .swiper-wrapper').css('height', arraySize[sevenSlider.activeIndex]);
  if(sevenSlider.activeIndex > 0) {
    setTimeout( function () {
      $('.seven .swiper-container .swiper-slide .info-slide__head').addClass('show-title')
    }, 100);
  } else  {
    $('.seven .swiper-container .swiper-slide .info-slide__head').removeClass('show-title')
  }

  setTimeout( function () {
    if (sevenSlider.activeIndex === 0) {
      $('.seven .swiper-slide:first-child .info-slide__head').removeClass('hide-title');
      $('.seven-page .animate-img').removeClass('hide-1 hide-2');
    } else if (sevenSlider.activeIndex === 1) {
      $('.seven-page .animate-img').removeClass('hide-1 hide-3');
    } else if (sevenSlider.activeIndex === 2) {
      $('.seven-page .animate-img').removeClass('hide-4 hide-5');
    } else if (sevenSlider.activeIndex === 3) {
      $('.seven-page .animate-img').removeClass('hide-1 hide-6');
    }  else if (sevenSlider.activeIndex === 4) {
      $('.seven-page .animate-img').removeClass('hide-1 hide-7');
    }
  }, 400);

  setTimeout( function () {
    $('.swiper-container-seven .swiper-slide .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-seven .swiper-slide-prev .info-slide__other').removeClass('fade-left fade-right');
    $('.swiper-container-seven .swiper-slide-active .info-slide__other').removeClass('fade-left fade-right');
  }, 400);
  $('.swiper-container-seven .swiper-slide').removeClass('hide');
  $('.swiper-container-seven .swiper-slide:not(.swiper-slide-active)').addClass('hide');
  //pagination
  let active = sevenSlider.activeIndex;
  let array = $('.seven .navigation-pag li');
  $('.seven .navigation-pag li').removeClass('def active')
  for (let i = 0; i <= active; i++) {
    if (i < active) {
      $(array[i]).addClass('def');
    } else if (i == active) {
      $(array[i]).addClass('active');
      break;
    }
  }


  if (sevenSlider.activeIndex > 0 && sevenSlider.activeIndex < 4) {
    $('.seven-page .animate-img .arrow-left').removeClass('hide');
    $('.seven-page .animate-img .arrow-right').removeClass('hide');
  } else if (sevenSlider.activeIndex == 4) {
    $('.seven-page .animate-img .arrow-right').addClass('hide');
  } else if (sevenSlider.activeIndex == 0) {
    $('.seven-page .animate-img .arrow-left').addClass('hide');
  }
});

//arrow click
$('.seven-page .arrow-left').click( function () {
  if (sevenSlider.activeIndex > 0) {
    $('.swiper-container-seven .swiper-slide-prev .info-slide__other').addClass('fade-left');
    $('.seven .swiper-slide-active .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      sevenSlider.slidePrev();
    }, 500);
  }
});

$('.seven-page .arrow-right').click( function () {
  console.log(sevenSlider.activeIndex)
  if (sevenSlider.activeIndex < 4) {
    $('.seven .swiper-slide-active .info-slide__other').addClass('fade-left');
    $('.swiper-container-seven .swiper-slide-next .info-slide__other').addClass('fade-right');
    setTimeout(function(){
      sevenSlider.slideNext();
    }, 500);
  }
});

//pag click
$('.seven .navigation-pag li').click( function () {
  let el = $(this).attr('data-number');
  let active = sevenSlider.activeIndex;
  if (el == active) {
    return;
  } else {
    if (el > active) {
      $('.seven .swiper-slide-active .info-slide__other').addClass('fade-left');
      $('.swiper-container-seven .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-right');
    } else {
      $('.swiper-container-seven .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-left');
      $('.seven .swiper-slide-active .info-slide__other').addClass('fade-right');
    }
    setTimeout(function(){
      sevenSlider.slideTo(el)
    }, 500);
  }
});

//img animation
$('.seven-page .arrow-right, .seven-page .arrow-left, .seven-page .navigation-pag li').click(function () {
  if ($(this).hasClass('active')) {
    return;
  } else {
    if ($(this).hasClass('arrow-left')) {
      if (sevenSlider.activeIndex > 0) {
        nextSlide(sevenSlider.activeIndex - 1);
      }
    } else if ($(this).hasClass('arrow-right')) {
      if (sevenSlider.activeIndex < 4) {
        nextSlide(sevenSlider.activeIndex + 1);
      }
    } else {
      nextSlide(Number($(this).attr('data-number')));
    }
  }
});
function nextSlide(numberSlide) {
  if (numberSlide == 0) {
    setTimeout( function () {
      $('.seven .swiper-container .swiper-slide .info-slide__head').removeClass('show-title');
    }, 200);
    $('.seven .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.seven-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 1) {
    $('.seven .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.seven-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 2) {
    $('.seven .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.seven-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 3) {
    $('.seven .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.seven-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  } else if (numberSlide == 4) {
    $('.seven .swiper-slide:first-child .info-slide__head').addClass('hide-title');
    $('.seven-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5 hide-6 hide-7');
  }
}


