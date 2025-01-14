$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
    loop: true,
    autoplayHoverPause: true,
    navigation: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
    // close all inner dropdowns when parent is closed
    document
      .querySelectorAll(".navbar .dropdown")
      .forEach(function (everydropdown) {
        everydropdown.addEventListener("hidden.bs.dropdown", function () {
          // after dropdown is hidden, then find all submenus
          this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
            // hide every submenu as well
            everysubmenu.style.display = "none";
          });
        });
      });

    document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
      element.addEventListener("click", function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains("submenu")) {
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          if (nextEl.style.display == "block") {
            nextEl.style.display = "none";
          } else {
            nextEl.style.display = "block";
          }
        }
      });
    });
  }
  // end if innerWidth
});

// document.addEventListener("DOMContentLoaded", function () {
//   // make it as accordion for smaller screens
//   if (window.innerWidth > 992) {
//     document
//       .querySelectorAll(".navbar .nav-item ")
//       .forEach(function (everyitem) {
//         everyitem.addEventListener("mouseover", function (e) {
//           let el_link = this.querySelector("a[data-bs-toggle]");
//           $(this).find(".dropdown-menu").first().stop(true, true).slideDown();

//           if (el_link != null) {
//             let nextEl = el_link.nextElementSibling;
//             el_link.classList.add("show");
//             nextEl.classList.add("show");
//           }
//         });
//         everyitem.addEventListener("mouseleave", function (e) {
//           let el_link = this.querySelector("a[data-bs-toggle]");
//           $(this).find(".dropdown-menu").first().stop(true, true).slideUp();

//           if (el_link != null) {
//             let nextEl = el_link.nextElementSibling;
//             el_link.classList.remove("show");
//             nextEl.classList.remove("show");
//           }
//         });
//       });
//   }
//   // end if innerWidth
// });

$(window).on("load resize", function () {
  const $dropdown = $(".drop-ani");
  const $dropdownToggle = $(".ani-toggle");
  const $dropdownMenu = $(".ani-menu");
  const showClass = "show";
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).first().stop(true, true).slideDown();
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
        $this.find($dropdownMenu).first().stop(true, true).slideUp();
        // $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

$(window).on("load resize", function () {
  const $dropdown = $(".drop-ani-sub");
  const $dropdownToggle = $(".ani-toggle-sub");
  const $dropdownMenu = $(".ani-menu-sub");
  const showClass = "show";
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).first().stop(true, true).slideDown();
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
        $this.find($dropdownMenu).first().stop(true, true).slideUp();
        // $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

$(window).on("load resize", function () {
  const $dropdown = $(".drop-ani-sub-1");
  const $dropdownToggle = $(".ani-toggle-sub-1");
  const $dropdownMenu = $(".ani-menu-sub-1");
  const showClass = "show";
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).first().stop(true, true).slideDown();
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
        $this.find($dropdownMenu).first().stop(true, true).slideUp();
        // $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

// DOMContentLoaded  end
$(document).ready(function () {
  $(".myWrapper").easyTicker({
    direction: "up",
    easing: "swing",
    speed: "slow",
    interval: 3000,
    height: "81px",
    visible: 0,
    mousePause: true,
    controls: {
      up: "",
      down: "",
      toggle: "",
      playText: "Play",
      stopText: "Stop",
    },
    callbacks: {
      before: false,
      after: false,
    },
  });
});

$(document).ready(function () {
  $(".myWrappermobile").easyTicker({
    direction: "up",
    easing: "swing",
    speed: "slow",
    interval: 3000,
    height: "150px",
    visible: 0,
    mousePause: true,
    controls: {
      up: "",
      down: "",
      toggle: "",
      playText: "Play",
      stopText: "Stop",
    },
    callbacks: {
      before: false,
      after: false,
    },
  });
});

$(".dropdown").on("show.bs.dropdown", function () {
  $(this).find(".mobile-menu").first().stop(true, true).slideDown();
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$(".dropdown").on("hide.bs.dropdown", function () {
  $(this).find(".mobile-menu").first().stop(true, true).slideUp();
});

// jQuery(".dropdown-toggle").on("click", function (e) {
//   $(this).next().toggle();
// });
// jQuery(".dropdown-menu.keep-open").on("click", function (e) {
//   e.stopPropagation();
// });

$(function () {
  $().timelinr({
    orientation: "horizontal",
    // value: horizontal | vertical, default to horizontal
    containerDiv: "#timeline",
    // value: any HTML tag or #id, default to #timeline
    datesDiv: "#dates",
    // value: any HTML tag or #id, default to #dates
    datesSelectedClass: "selected",
    // value: any class, default to selected
    datesSpeed: "normal",
    // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to normal
    issuesDiv: "#issues",
    // value: any HTML tag or #id, default to #issues
    issuesSelectedClass: "selected",
    // value: any class, default to selected
    issuesSpeed: "fast",
    // value: integer between 100 and 1000 (recommended) or 'slow', 'normal' or 'fast'; default to fast
    issuesTransparency: 0,
    // value: integer between 0 and 1 (recommended), default to 0.2
    issuesTransparencySpeed: 1000,
    // value: integer between 100 and 1000 (recommended), default to 500 (normal)
    prevButton: "#prev",
    // value: any HTML tag or #id, default to #prev
    nextButton: "#next",
    // value: any HTML tag or #id, default to #next
    arrowKeys: "true",
    // value: true/false, default to false
    startAt: 1,
    // value: integer, default to 1 (first)
    autoPlay: "false",
    // value: true | false, default to false
    autoPlayDirection: "forward",
    // value: forward | backward, default to forward
    autoPlayPause: 2000,
    // value: integer (1000 = 1 seg), default to 2000 (2segs)<
  });
});
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
