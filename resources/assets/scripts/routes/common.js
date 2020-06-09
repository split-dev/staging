import fullpage from 'fullpage.js/dist/fullpage.min'

export default {
  init() {

    //pagination
    let pag = $('.tooltip-split li');

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
        $(destination.item).find($('.anim-svg')).addClass('start')
      },
    });

    // eslint-disable-next-line no-undef,no-unused-vars
    var oneSlider = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

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
      }, function() {
        $( '#ILLUSTRATION > g' ).css( 'opacity', '1' );
      }
    );

    /*let left = $('#ILLUSTRATION .cl-4').position().left;
    let top = $('#ILLUSTRATION .cl-4').position().top;

    $('.cls-sub-4').css({'left': left, 'top': top + 50})*/

    console.log($('.fix-container').offset().left)

    if (!$('body').height() < 768) {
      let leftLine = $('.oval').position().left + ($('.oval').width() - 120);
      $('.one-page .anim-svg').css({'left': leftLine})
    } else {
      let leftLine = $('.oval').position().left + ($('.oval').width() / 2);
      $('.one-page .anim-svg').css({'left': leftLine})
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
