import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import axios from 'axios'

export default function base () {
  'use strict'

  $(document).ready(function () {
    // var SPEED = 5000
    var HEADER_SIZE = 55
    // Tagline
    // $('.tagline-carousel').Morphext({
    //   animation: 'fadeIn',
    //   separator: ',',
    //   speed: SPEED,
    //   complete: function () {
    //     var section = $('.tagline-carousel').text().replace(' ', '-').replace(/\./g, '')
    //     $('.tagline-carousel').attr('href', '#' + (section === 'digital' ? 'solutions' : section))
    //   }
    // })

    // To close nav dropdown when a nav link is clicked
    // Disable menu item animated scrolling on standard pages.
    if (!$(document.body).hasClass('page-standard')) {
      $('header .nav-link').on('click', animateSectionScroll(true))
    }

    $('#logo a').on('click', animateTopScroll)
    $('.sitefooter-bottom a').on('click', animateTopScroll)
    $('.learn-more-btn').on('click', animateSectionScroll(false))
    $('.solutions-nav a').on('click', animateSectionScroll(false))
    $('.contact-us-link').on('click', animateSectionScroll(false))

    function animateSectionScroll (flag) {
      return function (e) {
        e.preventDefault()

        if (flag && window.innerWidth <= 767) {
          $('.navbar-toggler').click()
        }

        var section = $(this).attr('href')
        $('html,body').animate({
          scrollTop: section === '#home' || section === '#' ? 0 : $(section).offset().top - HEADER_SIZE
        }, 150)
      }
    }

    function animateTopScroll (e) {
      e.preventDefault()
      $('html,body').animate({
        scrollTop: 0
      }, 500)
    }

    var solutionsYOffset = Math.floor($('#solutions').offset().top)
    var profilesYOffset = Math.floor($('#profiles').offset().top)
    var contactUsYOffset = Math.floor($('#contact-us').offset().top)

    $(window).on('scroll', function () {
      var yOffset = window.pageYOffset + HEADER_SIZE
      var childNum = 4

      // To change active nav link
      if (yOffset >= 0 && yOffset < solutionsYOffset) {
        childNum = 1
      } else if (yOffset >= solutionsYOffset && yOffset < profilesYOffset) {
        childNum = 2
      } else if (yOffset >= profilesYOffset && yOffset < contactUsYOffset) {
        childNum = 3
      }

      $('header .nav-item.active').removeClass('active')
      $('header .nav-item:nth-child(' + childNum + ')').addClass('active')

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
      dots: true,
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

    // Contact form submission
    var form = $('#contact-form')
    var name = $('#name')
    var email = $('#email')
    var message = $('#message')

    form.submit(function (e) {
      e.preventDefault()

      var data = {
        name: name.val(),
        email: email.val(),
        message: message.val()
      }

      var errors = validate(data)

      if (errors) {
        showMessage('danger', 'Please fill in the form correctly.')
        return
      }

      axios.post(form.prop('action'), data)
        .then(function (response) {
          // showMessage('success', 'Message successfully sent!')
          // // clear form
          // form[0].reset()
          window.location = window.location.origin + '/' + 'thank-you.html'
        })
        .catch(function (error) {
          console.log(error)
          showMessage('danger', 'Something went wrong. Please try again some other time.')
        })
    })

    function validate (data) {
      var errors = false

      var emailReg = /^([a-zA-Z0-9\\.]+)@([a-zA-Z0-9\\-\\_\\.]+)\.([a-zA-Z0-9]+)$/i

      if (data.name === '' || !emailReg.test(data.email) || data.message === '') {
        return !errors
      }

      return errors
    }

    function showMessage (alertType, message) {
      var markup = '<div class="alert alert-' + alertType + '">' + message + '<div>'

      $('.alert').remove()
      form.append(markup)
    }
  })
}
