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
import Drift from 'drift-zoom';


$(function () {
  var i = 1;
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


$(function () {
  var i = 1;
  $(".product-view_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
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
    ]
  });
  $('.slider-nav').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-view_slider',
    //centerMode: true,
    focusOnSelect: true
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

$('.quantity-input span').onclick (function() {
  val = parseInt($('.quantity-input input').val);

  if ($(this).hasClass('less')) {
      val = val - 1;
  } else if ($(this).hasClass('more')) {
      val = val + 1;
  }

  if (val < 1) {
      val = 1;
  }

  $('.quantity-input input').val(val);
})

/*
  Как узнать что на странице есть нужные DOM Nodes - почитать MDN по querySelector методу
*/

// 1. Найти на странице "карточка товара" слайдеры через querySelector (2 штуки)
// 2. в if statement проверить есть ли на текущей странице нужные DOM Nodes 
// if (slider1 && slider2)
// 2.1 если нужные DOM Nodes есть, инициализировать слайдеры
// 2.2 если нужные DOM Nodes есть, инициализровать Drift-плагин для каждой картинки в слайдере с 
// БОЛЬШОЙ картинкой


// Инициализировать слайдеры для каждой страницы где он используется через селектор с уникальным классом
