// jQuery easing
$('a.scroll[href*="#"]:not([href="#"])').click(function() {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 54
        },
        1000,
        "easeInOutExpo"
      );

      return false;
    }
  }
});

// Close navbar when click link
$(document).ready(function() {
  $("a.scroll").click(function(event) {
    $(".navbar-collapse").collapse("hide");
    if ($("#navDropdownMenu").isActive()) {
      $("#navbarProductsDropdownButton").dropdown("toggle");
    }
  });
});

// Collapse Navbar
var navbarCollapse = function() {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};

navbarCollapse();

$(window).scroll(navbarCollapse);

(function($) {
  $.fn.isActive = function() {
    console.log($(this.get(0)).hasClass("show"));
    return $(this.get(0)).hasClass("show");
  };
})(jQuery);

function addSpaces(initial) {
  initial.replace("/([0-9]{3})/", "\1 ");
  initial.replace("/[0-9]{3} ([0-9]{3})/", "\1 ");
  return initial;
}
