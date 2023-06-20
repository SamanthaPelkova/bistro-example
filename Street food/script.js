(function ($) {
  $(function () {
    /* scroll to sections */
    $(".jq--scroll-about-us").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--about-us").offset().top },
        1000
      );
    });
  });
})(jQuery);

(function ($) {
  $(function () {
    /* scroll to sections */
    $(".jq--scroll-specialita").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--specialita").offset().top },
        1000
      );
    });
  });
})(jQuery);

(function ($) {
  $(function () {
    /* scroll to sections */
    $(".jq--scroll-references").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--references").offset().top },
        1000
      );
    });
  });
})(jQuery);

(function ($) {
  $(function () {
    /* scroll to sections */
    $(".jq--scroll-photogallery").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--photogallery").offset().top },
        900
      );
    });
  });
})(jQuery);

(function ($) {
  $(function () {
    /* scroll to sections */
    $(".jq--scroll-contact").click(function () {
      $("html, body").animate(
        { scrollTop: $(".jq--contact").offset().top },
        800
      );
    });
  });
})(jQuery);

(function ($) {
  $(function () {
    /* scroll to sections */
    $(".jq--scroll-btn1").click(function () {
      $("html, body").animate({ scrollTop: $(".jq--btn1").offset().top }, 1000);
    });
  });
})(jQuery);

(function ($) {
  $(function () {
    /* scroll to sections */
    $(".jq--scroll-btn2").click(function () {
      $("html, body").animate({ scrollTop: $(".jq--btn2").offset().top }, 1000);
    });
    /* mobile navigation */
    $(".jq--nav--icon").click(function () {
      $(".nav-background").slideToggle();
      $(".mobile-nav-back").fadeToggle();
      $("nav ul").fadeToggle();
    });
    $(".jq--image-hamburger").click(function () {
      if ($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png") {
        $($(".jq--image-hamburger").attr("src", "img/crossMenu.png"));
      } else {
        $($(".jq--image-hamburger").attr("src", "img/hamburgerMenu.png"));
      }
    });
  });
})(jQuery);
