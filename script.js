import $ from "jquery";
var breakpoint = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
$(".slick").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  draggable: true,
  infinite: true,
  dots: false,
  arrows: true,
  speed: 1000,
  mobileFirst: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: breakpoint.sm,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: breakpoint.md,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: breakpoint.lg,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: breakpoint.xl,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }
  ]
});
