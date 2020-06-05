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
        $(pag[nextIndex.index]).children('a').addClass('active')
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

    $('#ILLUSTRATION g').click( function () {
      console.log(this)
    });

    //hover menu
    $( '#ILLUSTRATION > g:not(.cls-13)' ).hover(
      function() {
        $( '#ILLUSTRATION > g' ).not($( this )).css( 'opacity', '0.1' );
      }, function() {
        $( '#ILLUSTRATION > g' ).css( 'opacity', '1' );
      }
    );
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
