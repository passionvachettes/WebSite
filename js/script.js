var resizeCarousel = function () {
  var currentWidth = $(window).outerWidth();
  var currentHeight = $(window).outerHeight();

  if (currentWidth >= 992) {
    $(".carousel .item").css({
      'height': currentHeight + 'px'
    });

    $(".carousel .item img").css({
      'min-width': '100%',
      'min-height': '100%'
    });
  }
  else {
    $(".carousel .item").css({
      'height': 'initial'
    });

    $(".carousel .item img").css({
      'height': 'auto',
      'min-height': 'inherit'
    });
  }
};

$(document).ready(function () {
  // on ready
  resizeCarousel();

  // on resize
  $(window).on('resize', resizeCarousel);
});
