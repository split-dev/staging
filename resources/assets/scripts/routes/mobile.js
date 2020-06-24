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
