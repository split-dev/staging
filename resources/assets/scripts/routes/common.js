import fullpage from 'fullpage.js/dist/fullpage.min'
import 'bootstrap'

export default {
  init() {

    //pagination
    let pag = $('.tooltip-split li');

    //width
   //let width = $('body').width();


    new fullpage('#fullpage', {
      //options here
      scrollingSpeed: 1000,
      autoScrolling:true,
      scrollHorizontally: true,

      // eslint-disable-next-line no-unused-vars
      onLeave: function(index, nextIndex, direction) {
        //console.log(index)
        $('.tooltip-split li a').removeClass('active');
        $(pag[nextIndex.index]).children('a').addClass('active');
      },

      // eslint-disable-next-line no-unused-vars
      afterLoad: function(origin, destination, direction){
        $(destination.item).find($('.anim-svg')).addClass('start');
        $(destination.item).find($('.animate-img')).addClass('start-zoom');

        //animate-start
        if (destination.index == 1) {
          $(destination.item).find($('.one .info-slide__head .desc')).addClass('show');
          $(destination.item).find($('.one .navigation-one')).addClass('show');
        } else if (destination.index == 2) {
          $(destination.item).find($('.two .info-slide__head .desc')).addClass('show')
        }


        //tooltip
        if (destination.index > 0) {
          $('.tooltip_alt').addClass('show')
        }  else {
          $('.tooltip_alt').removeClass('show')
        }
      },
    });

    // eslint-disable-next-line no-undef,no-unused-vars
    var oneSlider = new Swiper('.swiper-container-one', {
      speed: 0,
      onlyExternal:true,
      effect: 'fade',
    });

    $('.tooltip-split li').click( function (e) {
      e.preventDefault();
      $('.tooltip-split li a').removeClass('active');
      $(this).find('a').addClass('active');
    });

    //hover menu
    $( '#ILLUSTRATION > g:not(.cls-13)' ).hover(
      function() {
        $( '#ILLUSTRATION > g' ).not($( this )).css( 'opacity', '0.1' );
        let id = $( this ).attr('data-name');
        $(`[data-id="${id}"]`).css('opacity', '1')
      }, function() {
        $( '#ILLUSTRATION > g' ).css( 'opacity', '1' );
        $('.bottom-box span').css('opacity', '0');
      }
    );


    $('.bottom-box img').click( function () {
      // eslint-disable-next-line no-undef
      fullpage_api.moveSectionDown();
    });

    $('#ILLUSTRATION > g:not(.cls-13)').click( function () {
      let id = Number($( this ).attr('data-name')) + 1;
      console.log(id)
      // eslint-disable-next-line no-undef
      fullpage_api.moveTo(id);
    });

    //width content
    $('.fix-container').css('max-width', ($(window).height() + 240));

    //swiper swipe
    oneSlider.on('transitionStart', function () {
      if(oneSlider.activeIndex > 0) {
        setTimeout( function () {
          $('.swiper-container .swiper-slide .info-slide__head').addClass('show-title')
        }, 100);
      } else  {
        $('.swiper-container .swiper-slide .info-slide__head').removeClass('show-title')
      }

      setTimeout( function () {
        if (oneSlider.activeIndex === 0) {
          $('.one-page .animate-img').removeClass('hide-1 hide-2');
        } else if (oneSlider.activeIndex === 1) {
          $('.one-page .animate-img').removeClass('hide-1 hide-2');
        } else if (oneSlider.activeIndex === 2) {
          $('.one-page .animate-img').removeClass('hide-1 hide-3');
        } else if (oneSlider.activeIndex === 3) {
          $('.one-page .animate-img').removeClass('hide-4 hide-5');
        }  else if (oneSlider.activeIndex === 4) {
          $('.one-page .animate-img').removeClass('hide-1 hide-2');
        }
      }, 400);

      setTimeout( function () {
        $('.swiper-container-one .swiper-slide .info-slide__other').removeClass('fade-left fade-right');
        $('.swiper-container-one .swiper-slide-prev .info-slide__other').removeClass('fade-left fade-right');
        $('.swiper-container-one .swiper-slide-active .info-slide__other').removeClass('fade-left fade-right');
      }, 400);
      $('.swiper-container-one .swiper-slide').removeClass('hide');
      $('.swiper-container-one .swiper-slide:not(.swiper-slide-active)').addClass('hide');
      //pagination
      let active = oneSlider.activeIndex;
      let array = $('.one .navigation-pag li');
      $('.one .navigation-pag li').removeClass('def active')
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
    $('.one .arrow-left').click( function () {
      if (oneSlider.activeIndex > 0) {
        $('.swiper-container-one .swiper-slide-prev .info-slide__other').addClass('fade-left');
        $('.one .swiper-slide-active .info-slide__other').addClass('fade-right');
        setTimeout(function(){
          oneSlider.slidePrev();
        }, 500);
      }
    });

    $('.one .arrow-right').click( function () {
      console.log(oneSlider.activeIndex)
      if (oneSlider.activeIndex < 4) {
        $('.one .swiper-slide-active .info-slide__other').addClass('fade-left');
        $('.swiper-container-one .swiper-slide-next .info-slide__other').addClass('fade-right');
        setTimeout(function(){
          oneSlider.slideNext();
        }, 500);
      }
    });

    //pag click
    $('.one .navigation-pag li').click( function () {
      let el = $(this).attr('data-number');
      let active = oneSlider.activeIndex;
      if (el > active) {
        $('.one .swiper-slide-active .info-slide__other').addClass('fade-left');
        $('.swiper-container-one .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-right');
      } else {
        $('.swiper-container-one .swiper-slide:not(.swiper-slide-active) .info-slide__other').addClass('fade-left');
        $('.one .swiper-slide-active .info-slide__other').addClass('fade-right');
      }
      setTimeout(function(){
        oneSlider.slideTo(el)
      }, 500);
    });

    //img animation
    $('.one .arrow-right, .one .arrow-left, .one .navigation-pag li').click(function () {
      if ($(this).hasClass('arrow-left')) {
        if (oneSlider.activeIndex > 0) {
          nextSlide(oneSlider.activeIndex - 1);
        }
      } else if ($(this).hasClass('arrow-right')) {
        if (oneSlider.activeIndex < 4) {
          nextSlide(oneSlider.activeIndex + 1);
        }
      } else {
        nextSlide(Number($(this).attr('data-number')));
      }
    });

    function nextSlide(numberSlide) {
      if (numberSlide == 0) {
        if (oneSlider.activeIndex == 1 || oneSlider.activeIndex == 2 || oneSlider.activeIndex == 4) {
          $('.one-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5');
        } else {
          $('.one-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5');
        }
      } else if (numberSlide == 1) {
        if (oneSlider.activeIndex == 0 || oneSlider.activeIndex == 2 || oneSlider.activeIndex == 4) {
          $('.one-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5');
        } else {
          $('.one-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5');
        }
      } else if (numberSlide == 2) {
        if (oneSlider.activeIndex == 0 || oneSlider.activeIndex == 1 || oneSlider.activeIndex == 4) {
          $('.one-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5');
        } else {
          $('.one-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5');
        }
      } else if (numberSlide == 3) {
        $('.one-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5');
      } else if (numberSlide == 4) {
        if (oneSlider.activeIndex == 0 || oneSlider.activeIndex == 1 || oneSlider.activeIndex == 2) {
          $('.one-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5');
        } else {
          $('.one-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5');
        }
      }
    }

    //swiper two
    //swiper swipe
    // eslint-disable-next-line no-undef,no-unused-vars
    var twoSlider = new Swiper('.swiper-container-two', {
      speed: 0,
      onlyExternal:true,
      effect: 'fade',
    });

    twoSlider.on('transitionStart', function () {
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

      //animate
      let anim = twoSlider.realIndex;
      console.log(anim)
      $('.swiper-container-two .swiper-slide .info-slide__other').removeClass('show');
      if (anim == 0) {
        $('.one-page .animate-img').removeClass('anim-2 anim-3 anim-4 anim-5 anim-4-fix').addClass('anim-1');
      } else if (anim == 1) {
        $('.one-page .animate-img').removeClass('anim-3 anim-4 anim-5 anim-4-fix');
        setTimeout(function(){
          $('.one-page .animate-img').addClass('anim-1 anim-2');
        }, 450);
      }  else if (anim == 2) {
        $('.one-page .animate-img').removeClass('anim-1 anim-2 anim-4 anim-5 anim-4-fix').addClass('anim-1-fix');
        setTimeout(function(){
          $('.one-page .animate-img').addClass('anim-3');
        }, 450);
      } else if (anim == 3) {
        $('.one-page .animate-img').removeClass('anim-1 anim-2 anim-3').addClass('anim-4-fix');
        setTimeout(function(){
          $('.one-page .animate-img').addClass('anim-4 anim-5');
        }, 450);
      }  else if (anim == 4) {
        $('.one-page .animate-img').removeClass('anim-2 anim-3 anim-4 anim-5 anim-4-fix').addClass('anim-1');
      }

      setTimeout(function(){
        $('.swiper-container-two .swiper-slide-active .info-slide__other').addClass('show');
      }, 450);
    });

    //arrow click
    $('.two .arrow-left').click( function () {
      setTimeout(function(){
        $('.one .swiper-slide-active .info-slide__other').removeClass('show');
        twoSlider.slidePrev();
      }, 450);
    });

    $('.two .arrow-right').click( function () {
      setTimeout(function(){
        $('.one .swiper-slide-active .info-slide__other').removeClass('show');
      }, 450);
      setTimeout(function(){
        $('.one .swiper-slide-active .info-slide__other').removeClass('show');
        twoSlider.slideNext();
      }, 500);
    });

    //pag click
    $('.two .navigation-pag li').click( function () {
      let el = $(this).attr('data-number');
      twoSlider.slideTo(el)
    });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
