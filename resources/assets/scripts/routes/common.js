import fullpage from 'fullpage.js/dist/fullpage.min'
import 'bootstrap'
import './two-slider'
import './three-slider'
import './four-slider'
import './five-slider'
import './six-slider'
import './seven-slider'

export default {
  init() {

    //pagination
    let pag = $('.tooltip-split li');

    let last = 0;




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


        function size() {
          //width
          let widthD = document.querySelector('body').getBoundingClientRect().width;
          let arrayOval = document.querySelectorAll('.oval');
          // eslint-disable-next-line no-unused-vars
          let arraySvg = document.querySelectorAll('.anim-svg');

          for (let i = 0; i<arrayOval.length; i++) {
            // eslint-disable-next-line no-unused-vars
            let left = arrayOval[i].getBoundingClientRect().left;
            let width = Number(arrayOval[i].getBoundingClientRect().width);
            let widthOval = width / 2;
            let summLeft = left + widthOval;
            Math.ceil(summLeft);
            let seven = document.querySelector('.seven-page .anim-svg').getBoundingClientRect().width;
            last = (summLeft + seven) - 5;
            $('.eight-page .anim-svg').css('left', last);

            if (arraySvg[i].getAttribute('data-position') == 'left') {
              arraySvg[i].style.left = summLeft;
            } else {
              arraySvg[i].style.left = Math.ceil(widthD - summLeft);
            }
          }
        }
        size();

        $(window).on('resize', function () {
          size();
        });

        //animate-start
        if (destination.index == 1) {
          $(destination.item).find($('.one .info-slide__head .desc')).addClass('show');
          $(destination.item).find($('.one .navigation-one')).addClass('show');
        } else if (destination.index == 2) {
          $(destination.item).find($('.two .info-slide__head .desc')).addClass('show');
          $(destination.item).find($('.two .navigation-two')).addClass('show');
        } else if (destination.index == 3) {
          $(destination.item).find($('.three .info-slide__head .desc')).addClass('show');
          $(destination.item).find($('.three .navigation-three')).addClass('show');
        } else if (destination.index == 4) {
          $(destination.item).find($('.four .info-slide__head .desc')).addClass('show');
          $(destination.item).find($('.four .navigation-four')).addClass('show');
        } else if (destination.index == 5) {
          $(destination.item).find($('.five .info-slide__head .desc')).addClass('show');
          $(destination.item).find($('.five .navigation-five')).addClass('show');
        } else if (destination.index == 6) {
          $(destination.item).find($('.six .info-slide__head .desc')).addClass('show');
          $(destination.item).find($('.six .navigation-six')).addClass('show');
        } else if (destination.index == 7) {
          $(destination.item).find($('.seven .info-slide__head .desc')).addClass('show');
          $(destination.item).find($('.seven .navigation-six')).addClass('show');
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
    $( '#Group-2 > g:not(.stairs)' ).hover(
      function() {
        $( '#Group-2 > g' ).not($( this )).css( 'opacity', '0.1' );
        let id = $( this ).attr('data-name');
        $(`[data-id="${id}"]`).css('opacity', '1');
        $('.bottom-box img').addClass('hide');
      }, function() {
        $( '#Group-2 > g' ).css( 'opacity', '1' );
        $('.bottom-box span').css('opacity', '0');
        $('.bottom-box img').removeClass('hide');
      }
    );


    $('.bottom-box img').click( function () {
      // eslint-disable-next-line no-undef
      fullpage_api.moveSectionDown();
    });

    $('#Group-2 > g:not(.cls-13)').click( function () {
      let id = Number($( this ).attr('data-name')) + 1;
      // eslint-disable-next-line no-undef
      fullpage_api.moveTo(id);
    });


    //swiper swipe
    oneSlider.on('transitionStart', function () {
      if(oneSlider.activeIndex > 0) {
        setTimeout( function () {
          $('.one .swiper-container .swiper-slide .info-slide__head').addClass('show-title')
        }, 100);
      } else  {
        $('.one .swiper-container .swiper-slide .info-slide__head').removeClass('show-title')
      }

      setTimeout( function () {
        if (oneSlider.activeIndex === 0) {
          $('.one .swiper-slide:first-child .info-slide__head').removeClass('hide-title');
          $('.one-page .animate-img').removeClass('hide-1 hide-2');
        } else if (oneSlider.activeIndex === 1) {
          $('.one-page .animate-img').removeClass('hide-1 hide-2');
        } else if (oneSlider.activeIndex === 2) {
          $('.one-page .animate-img').removeClass('hide-1 hide-3');
        } else if (oneSlider.activeIndex === 3) {
          $('.one-page .animate-img').removeClass('hide-4 hide-5');
        }  else if (oneSlider.activeIndex === 4) {
          $('.one-page .animate-img').removeClass('hide-1 hide-6');
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
      if (el == active) {
        return;
      } else {
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
      }
    });

    //img animation
    $('.one .arrow-right, .one .arrow-left, .one .navigation-pag li').click(function () {
      if ($(this).hasClass('active')) {
        return;
      } else {
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
      }
    });

    function nextSlide(numberSlide) {
      if (numberSlide == 0) {
        if (oneSlider.activeIndex == 1 || oneSlider.activeIndex == 2 && !oneSlider.activeIndex == 4) {
          $('.one-page .animate-img').addClass('hide-3 hide-4 hide-5 hide-6');
        } else if (oneSlider.activeIndex == 0 || oneSlider.activeIndex == 2 || oneSlider.activeIndex == 4) {
          $('.one-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5 hide-6');
        } else {
          $('.one-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6');
        }
      } else if (numberSlide == 1) {
        $('.one .swiper-slide:first-child .info-slide__head').addClass('hide-title');
        if (oneSlider.activeIndex == 0 || oneSlider.activeIndex == 2 && !oneSlider.activeIndex == 4) {
          $('.one-page .animate-img').addClass('hide-3 hide-4 hide-5 hide-6');
        } else if (oneSlider.activeIndex == 0 || oneSlider.activeIndex == 2 || oneSlider.activeIndex == 4) {
          $('.one-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5 hide-6');
        } else {
          $('.one-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6');
        }
      } else if (numberSlide == 2) {
        $('.one .swiper-slide:first-child .info-slide__head').addClass('hide-title');
        if (oneSlider.activeIndex == 0 || oneSlider.activeIndex == 1 || oneSlider.activeIndex == 4) {
          $('.one-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5 hide-6');
        } else {
          $('.one-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6');
        }
      } else if (numberSlide == 3) {
        $('.one .swiper-slide:first-child .info-slide__head').addClass('hide-title');
        $('.one-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6');
      } else if (numberSlide == 4) {
        $('.one .swiper-slide:first-child .info-slide__head').addClass('hide-title');
        if (oneSlider.activeIndex == 0 || oneSlider.activeIndex == 1 || oneSlider.activeIndex == 2) {
          $('.one-page .animate-img').addClass('hide-2 hide-3 hide-4 hide-5 hide-6');
        } else {
          $('.one-page .animate-img').addClass('hide-1 hide-2 hide-3 hide-4 hide-5 hide-6');
        }
      }
    }

    let platform = navigator.platform;
    if (platform == 'Win32') {
      $('.bottom-box').removeClass('mac');
    } else if (platform == 'MacIntel') {
      $('.fp-tooltip .tooltip-inner').addClass('mac');
      $('.bottom-box').addClass('mac');
    }


    //modal
    $('.button-abs').click(function (e) {
      e.preventDefault();
      let modal = $(this).attr('data-modal');
      $('.wrapper').addClass('show');
      $(modal).addClass('show');
    });

      //close
    $('.close').click( function (e) {
      e.preventDefault();
      $('.wrapper .show').removeClass('show');
      $('.wrapper').removeClass('show');
    });

    $(function($){
      $(document).mouseup(function (e){
        var div = $('.modal-box.show');
        if (!div.is(e.target)
          && div.has(e.target).length === 0) {
          $('.wrapper .show').removeClass('show');
          $('.wrapper').removeClass('show');
        }
      });
    });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
