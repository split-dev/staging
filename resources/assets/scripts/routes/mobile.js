//width
let widthD = document.querySelector('body').getBoundingClientRect().width;
if(widthD < 1023) {
  $('.animate-img').addClass('start-zoom')
}

//open-menu
$('.menu-icon').click( function (e) {
  e.preventDefault();
  $('.mobile-menu').addClass('open');
  $('body').addClass('blocked');
});

//mob-scroll
$('.mobile-menu').on('click','a', function (event) {
  event.preventDefault();
  $('.mobile-menu').removeClass('open');
  $('body').removeClass('blocked');
  var id  = $(this).attr('data-link'),
    top = $('.' + id).offset().top;
  $('body,html').animate({scrollTop: top}, 500);
});

//close-nav
$('.mobile-menu .close-nav').click( function () {
  $('.mobile-menu').removeClass('open');
  $('body').removeClass('blocked');
});
