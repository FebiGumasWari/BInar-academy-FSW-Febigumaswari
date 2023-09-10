const prevIcon = '<i class="bi bi-chevron-left owlIcon"/>';
const nextIcon = '<i class="bi bi-chevron-right owlIcon"/>';

$(".owl-carousel").owlCarousel({
  center: true,
  items: 2,
  autoplay: true,
  autoplayTimeout: 5000,
  autoWidth: true,
  loop: true,
  margin: 32,
  nav: true,
  navText: [prevIcon, nextIcon],
  dots: false,
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1,
    },
    // breakpoint from 600 up
    600: {
      items: 2,
    },
    // breakpoint from 1000 up
    1000: {
      items: 2,
    },
    1200: {
      items: 2,
    },
    1400: {
      items: 2,
    },
  },
});
