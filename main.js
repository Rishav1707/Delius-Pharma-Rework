/* Please ❤ this if you like it! */

(function ($) {
  "use strict";

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass("start-style").addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass("start-style");
      }
    });
  });

  //Navbar
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").toggleClass("show");
  });

  //Animation Homepage
  const typed = new Typed(".multiple-text", {
    strings: [
      "The site is under construction.",
      "We will be live soon.",
      "Stay Tuned.",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  //Menu On Hover

  $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest(".nav-item");
      _d.addClass("show");
      setTimeout(function () {
        _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 1);
    }
  });

  //Swiper Section*(Countires)
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: true,
    autoplayTimeout: 100,
    autoplayHoverPause: true,

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //ScrollRevealJS
  ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 400,
  });

  ScrollReveal().reveal(".main-title, ", {
    delay: 250,
    origin: "left",
  });
  ScrollReveal().reveal(".sec-01, .image", {
    delay: 300,
    origin: "bottom",
  });
  ScrollReveal().reveal(".text-box", { delay: 350, origin: "right" });
  ScrollReveal().reveal(".media-icons i", {
    delay: 250,
    origin: "bottom",
    interval: 200,
  });
  ScrollReveal().reveal(".sec-02 .image, .sec-03 .image", {
    delay: 150,
    origin: "top",
  });
  ScrollReveal().reveal(".media-info li", {
    delay: 150,
    origin: "left",
    interval: 200,
  });

  //Numbers Speak for Themselves Section (CounterUP)
  $(document).ready(function () {
    var isCounterUpActivated = false;
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      var elementOffset = $(".running-number").offset().top;
      var distance = elementOffset - scrollTop;

      if (distance < 600 && !isCounterUpActivated) {
        activateCounterUp();
        isCounterUpActivated = true;
      }
    });

    function activateCounterUp() {
      $(".counter").each(function () {
        var $this = $(this);
        var targetValue = parseInt($this.text());
        var suffix = $this.data("suffix");

        $({ Counter: 0 }).animate(
          { Counter: targetValue },
          {
            duration: 3000, // Adjust the duration to control animation speed (in milliseconds)
            easing: "swing",
            step: function () {
              var formattedValue = Math.ceil(this.Counter);

              if (suffix && suffix !== "+") {
                formattedValue += suffix;
              }

              $this.text(formattedValue);
            },
            complete: function () {
              if (suffix && suffix === "+") {
                $this.text($this.text() + suffix);
              }
            },
          }
        );
      });

      setInterval(function () {
        $(".counter").each(function () {
          var $this = $(this);
          var targetValue = parseInt($this.text().replace(/[^\d.-]/g, ""));
          var suffix = $this.data("suffix");

          $({ Counter: 0 }).animate(
            { Counter: targetValue },
            {
              duration: 3000, // Adjust the duration to control animation speed (in milliseconds)
              easing: "swing",
              step: function () {
                var formattedValue = Math.ceil(this.Counter);

                if (suffix && suffix !== "+") {
                  formattedValue += suffix;
                }

                $this.text(formattedValue);
              },
              complete: function () {
                if (suffix && suffix === "+") {
                  $this.text($this.text() + suffix);
                }
              },
            }
          );
        });
      }, 6000); // Repeat the animation every 6 seconds (adjust as needed)
    }
  });

  
})(jQuery);
