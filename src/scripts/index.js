import "core-js/stable";
import "regenerator-runtime/runtime";

import logoSvg from '../pics/icons/logo.svg'

// Styles
import '../assets/styles/main.scss';

// App
import $ from "jquery";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

$(function () {
  $(".slider").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: '.slider-arrow--left',
    nextArrow: '.slider-arrow--right',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          arrows: false,
          dots: true
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  const arrows = document.querySelectorAll('.slider-arrow');
  const [firstArrow] = arrows;

  if (arrows.length > 0) {
    const arrowHeight = firstArrow.clientHeight;

    function setSliderArrowsOffset() {
      const sliderImageHeight = document.querySelector('.product_pic').offsetHeight;
      const arrowsOffset = Number.parseInt(sliderImageHeight / 2 - arrowHeight);

      arrows.forEach(function (arrow) {
        arrow.style.top = `${arrowsOffset}px`
      })
    }

    setSliderArrowsOffset();

    $(window).on('resize', function () {
      setSliderArrowsOffset()
    })
  }
});
