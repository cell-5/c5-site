import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'morphext/dist/morphext.css'
import 'animate.css'
import 'morphext/dist/morphext.js'
// import axios from 'axios'

export default function base () {
  'use strict'

  $(document).ready(function () {
    var SPEED = 5000

    $('.tagline-carousel').Morphext({
      animation: 'fadeIn',
      separator: ',',
      speed: SPEED,
      complete: function () {
        var section = $('.tagline-carousel').text().replace(' ', '-').replace(/\./g, '')
        $('.tagline-carousel').attr('href', '#' + (section === 'digital' ? 'solutions' : section))
      }
    })

    $(window).on('scroll', function () {
      // To shrink nav on scroll
      if ($(window).scrollTop()) {
        $('#logo').addClass('shrink')
      } else {
        $('#logo').removeClass('shrink')
      }
    })

    $('.portfolio-images').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      arrows: true,
      asNavFor: '.portfolio-content',
      nextArrow: '<span class="slick-next-arrow" role="button"><i class="fa fa-angle-right"></i></span>',
      prevArrow: '<span class="slick-prev-arrow" role="button"><i class="fa fa-angle-left"></i></span>',
      responsive: [{
        breakpoint: 767,
        settings: {
          arrows: false
        }
      } ]
    })

    $('.portfolio-content').slick({
      asNavFor: '.portfolio-images',
      arrows: false
    })

    // Team carousel
    $('.team').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      asNavFor: '.teamNav-slide',
      arrows: true,
      nextArrow: '<span class="slick-next-arrow" role="button"><i class="fa fa-angle-right"></i></span>',
      prevArrow: '<span class="slick-prev-arrow" role="button"><i class="fa fa-angle-left"></i></span>'
    })

    $('.teamNav-slide').slick({
      slidesToShow: 3,
      arrows: false,
      asNavFor: '.team',
      focusOnSelect: true
    })
  })
}
