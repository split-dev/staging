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
        $(destination.item).find($('.anim-svg')).addClass('start')
      },
    });

    // eslint-disable-next-line no-undef,no-unused-vars
    var oneSlider = new Swiper('.swiper-container', {
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
      }, function() {
        $( '#ILLUSTRATION > g' ).css( 'opacity', '1' );
      }
    );

    // eslint-disable-next-line no-unused-vars
    function position(leftE,topE,heightE, classEl) {
      /*console.log(leftE)
      console.log(topE)
      console.log(heightE)*/
      //let fixPos = topE + heightE - 40;
      let percent = topE + heightE - (10 * heightE / 100);
      $(`[counterel="${classEl}"]`).css({'left': leftE, 'top': percent})
      /*$('.cls-sub-' + class).css({'left': left, 'top': top + 50});*/
    }

    /*setTimeout(function(){
      console.log()
    }, 1000);*/
 /*   document.querySelector('#ILLUSTRATION .counter').getBoundingClientRect()*/
    let array = document.querySelectorAll('#ILLUSTRATION .counter');
    let counter = array.length;
    for (let i = 0; i < counter; i++) {
      let left = (array[i]).getBoundingClientRect().left;
      let top = (array[i]).getBoundingClientRect().top;
      let height = (array[i]).getBoundingClientRect().height;
      let classEl = (array[i]).getAttribute('counter');
      position(left,top,height, classEl);
    }
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {
  },
};
