$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    draggable: true,
    pauseOnFocus: true,
    pauseOnHover: false
  });

  var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      lastScrollTop = scrollTop;
    }
  });

  $('a').embedly({
  display: function(obj){
    // Overwrite the default display.
    if (obj.type === 'video' || obj.type === 'rich'){
      // Figure out the percent ratio for the padding. This is (height/width) * 100
      var ratio = ((obj.height/obj.width)*100).toPrecision(4) + '%'

      // Wrap the embed in a responsive object div. See the CSS here!
      var div = $('<div class="responsive-object">').css({
        paddingBottom: ratio
      });

      // Add the embed to the div.
      div.html(obj.html);

      // Replace the element with the div.
      $(this).replaceWith(div);
    }
  }
});

});
