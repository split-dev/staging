import fullpage from 'fullpage.js/dist/fullpage.min'

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
        $(destination.item).find($('.animate-img')).addClass('anim-1')
        $(destination.item).find($('.swiper-slide-active .info-slide__head')).addClass('show')
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
    $('.fix-container').css('max-width', ($(window).height() + 240))

    //swiper swipe
    oneSlider.on('transitionStart', function () {
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

      //animate
      let anim = oneSlider.realIndex;
      console.log(anim)
      $('.swiper-container-one .swiper-slide .info-slide__other').removeClass('show');
      if (anim == 0) {
        $('.one-page .animate-img').removeClass('anim-2 anim-3 anim-4 anim-5').addClass('anim-1');
      } else if (anim == 1) {
        $('.one-page .animate-img').removeClass('anim-3 anim-4 anim-5');
        setTimeout(function(){
          $('.one-page .animate-img').addClass('anim-1 anim-2').removeClass('anim-1-fix');
        }, 800);
      }  else if (anim == 2) {
        $('.one-page .animate-img').removeClass('anim-1 anim-2 anim-4 anim-5').addClass('anim-1-fix');
        setTimeout(function(){
          $('.one-page .animate-img').addClass('anim-3');
        }, 800);
      } else if (anim == 4) {
        console.log('4')
      }

      setTimeout(function(){
        $('.swiper-container-one .swiper-slide-active .info-slide__other').addClass('show');
        $('.swiper-container-one .swiper-slide-active .info-slide__head').addClass('show');
      }, 450);
    });

    //arrow click
    $('.one .arrow-left').click( function () {
      $('.one .swiper-slide-active .info-slide__head').removeClass('show');
      $('.one .swiper-slide-active .info-slide__other').removeClass('show');
      setTimeout(function(){
        oneSlider.slidePrev();
      }, 450);
    });

    $('.one .arrow-right').click( function () {
      $('.one .swiper-slide-active .info-slide__head').removeClass('show');
      $('.one .swiper-slide-active .info-slide__other').removeClass('show');
      setTimeout(function(){
        oneSlider.slideNext();
      }, 450);
    });

    //pag click
    $('.one .navigation-pag li').click( function () {
      let el = $(this).attr('data-number');
      oneSlider.slideTo(el)
    });
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
