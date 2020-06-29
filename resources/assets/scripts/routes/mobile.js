//width
let widthD = document.querySelector('body').getBoundingClientRect().width;
if(widthD < 1023) {
  $('.animate-img').addClass('start-zoom')
}

//open-menu
$('.menu-icon').click( function (e) {
  e.preventDefault();
  $('.mobile-wrapper').addClass('show');
  $('.mobile-menu').addClass('open');
  $('body').addClass('blocked');
  $('html').addClass('blocked');
});

//mob-scroll
$('.mobile-menu').on('click','a', function (event) {
  event.preventDefault();
  $('.mobile-wrapper').removeClass('show');
  $('.mobile-menu').removeClass('open');
  $('body').removeClass('blocked');
  var id  = $(this).attr('data-link'),
    top = $('.' + id).offset().top;
  $('body,html').animate({scrollTop: top}, 500);
});

//close-nav
$('.mobile-menu .close-nav').click( function () {
  $('.mobile-menu').removeClass('open');
  $('.mobile-wrapper').removeClass('show');
  $('body').removeClass('blocked');
  $('html').removeClass('blocked');
});

$(function($){
  $(document).mouseup(function (e){
    var div = $('.mobile-menu');
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      $('.mobile-wrapper').removeClass('show');
      $('.mobile-menu').removeClass('open');
      $('body').removeClass('blocked');
      $('html').removeClass('blocked');
    }
  });
});
