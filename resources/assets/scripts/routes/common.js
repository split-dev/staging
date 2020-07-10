import fullpage from 'fullpage.js/dist/fullpage.min'

import './two-slider';

export default {
  init() {
    setTimeout( function () {

      //pagination
      let pag = $('.tooltip-split li');

      let last = 0;



      let widthD = window.innerWidth;

      function start() {
        new fullpage('#fullpage', {
          //options here
          scrollingSpeed: 1000,
          autoScrolling:true,
          resize:true,
          scrollHorizontally: true,
          licenseKey: ('15560068-077B4EC4-B9C3AECE-631A2B58'),
          // eslint-disable-next-line no-unused-vars
          onLeave: function(index, nextIndex, direction) {
            //line
            let arraySvg = $('.anim-svg');
            for (let i = 0; i<nextIndex.index; i++) {
              setTimeout( function () {
                $(arraySvg[i]).addClass('start');
              }, 400)
            }
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
              $('.about-scroll').removeClass('hide');
              $('.home-scroll').removeClass('hide');
            } else if (destination.index == 2) {
              $(destination.item).find($('.two .info-slide__head .desc')).addClass('show');
              $(destination.item).find($('.two .navigation-two')).addClass('show');
              $('.about-scroll').removeClass('hide');
              $('.home-scroll').removeClass('hide');
            } else if (destination.index == 3) {
              $(destination.item).find($('.three .info-slide__head .desc')).addClass('show');
              $(destination.item).find($('.three .navigation-three')).addClass('show');
              $('.about-scroll').removeClass('hide');
              $('.home-scroll').removeClass('hide');
            } else if (destination.index == 4) {
              $(destination.item).find($('.four .info-slide__head .desc')).addClass('show');
              $(destination.item).find($('.four .navigation-four')).addClass('show');
              $('.about-scroll').removeClass('hide');
              $('.home-scroll').removeClass('hide');
            } else if (destination.index == 5) {
              $(destination.item).find($('.five .info-slide__head .desc')).addClass('show');
              $(destination.item).find($('.five .navigation-five')).addClass('show');
              $('.about-scroll').removeClass('hide');
              $('.home-scroll').removeClass('hide');
            } else if (destination.index == 6) {
              $(destination.item).find($('.six .info-slide__head .desc')).addClass('show');
              $(destination.item).find($('.six .navigation-six')).addClass('show');
              $('.about-scroll').removeClass('hide');
              $('.home-scroll').removeClass('hide');
            } else if (destination.index == 7) {
              $(destination.item).find($('.seven .info-slide__head .desc')).addClass('show');
              $(destination.item).find($('.seven .navigation-six')).addClass('show');
              $('.about-scroll').removeClass('hide');
              $('.home-scroll').removeClass('hide');
            } else if (destination.index == 8) {
              $('.about-scroll').addClass('hide');
              $('.home-scroll').removeClass('hide');
            } else if (destination.index == 0) {
              $('.home-scroll').addClass('hide');
            }


            //tooltip
            if (destination.index > 0) {
              $('.tooltip_alt').addClass('show')
            }  else {
              $('.tooltip_alt').removeClass('show')
            }
          },
        });
        // eslint-disable-next-line no-undef
        fullpage_api.reBuild();
        flag = true
      }

      let flag = false;
      if( widthD < 1024 && flag) {
        return;
      } else if (widthD >= 1024 && !flag) {
        start();
        flag = true;
      }

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


      //five click-box
      if (widthD < 1024) {
        $(window).on('unload', function() {
          $(window).scrollTop(0, 0);
        });
        $('.one-page .card-header').click( function () {
          setTimeout(function(){
            arraySize[4] = $('.one-page .swiper-slide-active .info-slide__other').height();
            $('.one-page .swiper-wrapper').css('height', arraySize[4] + 'px');
          }, 250);
        });
      }

      let arraySlide = $('.one-page .swiper-wrapper .swiper-slide');
      let arraySize = [];
      for (let i = 0; i<arraySlide.length; i++) {
        arraySize[i] = $(arraySlide[i]).height() + 40;
      }
      $('.one-page .swiper-wrapper').css('height', arraySize[0]);
      //swiper swipe
      oneSlider.on('transitionStart', function () {


        $('.one-page .swiper-wrapper').css('height', arraySize[oneSlider.activeIndex]);
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
          $('.arrow-left').removeClass('no_click');
          $('.arrow-right').removeClass('no_click');
          $('.navigation-pag ul li').removeClass('no_click');
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

        if (oneSlider.activeIndex > 0 && oneSlider.activeIndex < 4) {
          $('.one-page .animate-img .arrow-left').removeClass('hide');
          $('.one-page .animate-img .arrow-right').removeClass('hide');
          $('.navigation-one .arrow-left').removeClass('opacity');
          $('.navigation-one .arrow-right').removeClass('opacity');
        } else if (oneSlider.activeIndex == 4) {
          $('.one-page .animate-img .arrow-right').addClass('hide');
          $('.navigation-one .arrow-right').addClass('opacity');
          $('.navigation-one .arrow-left').removeClass('opacity');
        } else if (oneSlider.activeIndex == 0) {
          $('.one-page .animate-img .arrow-left').addClass('hide');
          $('.navigation-one .arrow-left').addClass('opacity');
          $('.navigation-one .arrow-right').removeClass('opacity');
        }
      });

      //arrow click
      $('.one-page .arrow-left').click( function () {
        if (oneSlider.activeIndex > 0) {
          $('.swiper-container-one .swiper-slide-prev .info-slide__other').addClass('fade-left');
          $('.one .swiper-slide-active .info-slide__other').addClass('fade-right');
          setTimeout(function(){
            oneSlider.slidePrev();
          }, 500);
        }
      });

      $('.one-page .arrow-right').click( function () {
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
      $('.one-page .arrow-right, .one-page .arrow-left, .one-page .navigation-pag li').click(function () {
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
          setTimeout( function () {
            $('.one .swiper-container .swiper-slide .info-slide__head').removeClass('show-title');
          }, 200);
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
      } else if (platform == 'MacIntel'  || platform == 'iPhone' || platform == 'iPod' || platform == 'iPad') {
        $('.fp-tooltip .tooltip-inner').addClass('mac');
        $('.bottom-box').addClass('mac');
        $('.button_text_container').addClass('mac');
      }


      //modal
      $('.button_su_inner.modal-btn, .about__video').click(function (e) {
        e.preventDefault();
        let modal = $(this).attr('data-modal');
        $('.wrapper').addClass('show');
        $(modal).addClass('show');
        $('body').addClass('blocked');
        $('html').addClass('blocked');
      });

      //close
      $('.close').click( function (e) {
        e.preventDefault();
        $('.wrapper .show').removeClass('show');
        $('.wrapper').removeClass('show');
        let srcAttr = $(this).parent().find($('iframe')).attr('src');
        $(this).parent().find($('iframe')).attr('src', srcAttr);
        $('body').removeClass('blocked');
        $('html').removeClass('blocked');
      });

      $(function($){
        $(document).mouseup(function (e){
          let srcAttr = $('.modal-box.show').find($('iframe')).attr('src');
          $('.modal-box.show').find($('iframe')).attr('src', srcAttr);
          var div = $('.modal-box.show');
          if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $('.wrapper .show').removeClass('show');
            $('.wrapper').removeClass('show');
            $('body').removeClass('blocked');
            $('html').removeClass('blocked');
          }
        });
      });


      $(window).on('resize', function () {
        let widthD = window.innerWidth;
        if( widthD < 1024 && flag) {
          // eslint-disable-next-line no-undef
          fullpage_api.destroy('all');
          flag = false;
          $('.animate-img').addClass('start-zoom');
        } else if (widthD >= 1024 && !flag) {
          start();
          $('.animate-img').removeClass('start-zoom');
        }
      });

      //resize slider
      let dist = true;
      $(window).on('resize', function () {
        // eslint-disable-next-line no-unused-vars
        let widthD = document.querySelector('body').getBoundingClientRect().width;
        if( widthD < 1024 && dist && widthD > 575) {
          dist = false;
          arraySize = [84,295,438,295,371]
          if ($('.one-page .swiper-wrapper .swiper-slide-active').find($('.info-slide__other')).hasClass('info-slide__other')) {
            arraySlide = $('.one-page .swiper-wrapper .swiper-slide-active .info-slide__other').height();
          } else {
            arraySlide = $('.one-page .swiper-wrapper .swiper-slide-active .info-slide__head').height();
          }
          $('.one-page .swiper-wrapper').css('height', arraySize[oneSlider.activeIndex]);
        } else if (!dist && widthD > 1024) {
          $('.swiper-wrapper').css('height', 532.2);
          dist = true;
          return;
        }
      });

      $('.arrow-right, .arrow-left, .navigation-pag .ul .li').click( function () {
        $('.arrow-left').addClass('no_click');
        $('.arrow-right').addClass('no_click');
        $('.navigation-pag ul li').addClass('no_click');
      })
    }, 300)
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
