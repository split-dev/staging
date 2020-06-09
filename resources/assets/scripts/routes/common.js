import fullpage from 'fullpage.js/dist/fullpage.min'

export default {
  init() {

    //pagination
    let pag = $('.tooltip-split li');

    //width
    let width = $('body').width();


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


        //position line
        if (nextIndex.index > 0) {
          let Line = $(nextIndex.item).find($('.oval')).offset().left + ($('.oval').width() / 2);
          let position = $(nextIndex.item).find($('.anim-svg')).attr('data-position');
          if (position == 'left') {
            $(nextIndex.item).find($('.anim-svg')).css({'left': Line});
          } else {
            let res = width - Line + 5;
            console.log(res)
            $(nextIndex.item).find($('.anim-svg')).css({'right': res});
          }
        }
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

    let left = $('#ILLUSTRATION .cl-4').position().left;
    let top = $('#ILLUSTRATION .cl-4').position().top;

    $('.cls-sub-4').css({'left': left, 'top': top + 50})
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
