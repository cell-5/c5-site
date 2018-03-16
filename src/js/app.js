'use strict';

$(document).ready(function() {
    // Services
    $('.services-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 30000,
        slidesToShow: 1,
        arrows: true,
        focusOnSelect: true
    });

    // To close nav dropdown when a nav link is clicked
    $('header .nav-link').on('click', animateSectionScroll);
    $('#logo a').on('click', animateTopScroll);
    $('.sitefooter-bottom a').on('click', animateTopScroll);

    function animateSectionScroll(e) {
        e.preventDefault();

        if(window.innerWidth <= 767) {
            $('.navbar-toggler').click();
        }

        var section = $(this).attr('href');
        $('html,body').animate({
            scrollTop: section === '#home' || section === '#' ? 0 : $(section).offset().top
        }, 500);
    }

    function animateTopScroll(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    }

    var
        testimonialsYOffset = Math.floor($('#testimonials').offset().top),
        profilesYOffset = Math.floor($('#profiles').offset().top),
        contactUsYOffset = Math.floor($('#contact-us').offset().top);

    $(window).on('scroll', function() {
        var yOffset = window.pageYOffset,
            childNum = 4;

        // To change active nav link
        if (yOffset >= 0 && yOffset < testimonialsYOffset) {
            childNum = 1;
        } else if (yOffset >= testimonialsYOffset && yOffset < profilesYOffset) {
            childNum = 2;
        } else if (yOffset >= profilesYOffset && yOffset < contactUsYOffset) {
            childNum = 3;
        }

        $('header .nav-item.active').removeClass('active');
        $('header .nav-item:nth-child(' + childNum + ')').addClass('active');

        // To shrink nav on scroll
        if($(window).scrollTop()) {
            $('#logo').addClass('shrink');
        } else {
            $('#logo').removeClass('shrink');
        }
    });
});

(function ($) {
    "use strict";

    $('.team').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        asNavFor: '.teamNav-slide',
        arrows: true,
        nextArrow: '<span class="slick-next-arrow" role="button"><i class="fa fa-angle-right"></i></span>',
        prevArrow: '<span class="slick-prev-arrow" role="button"><i class="fa fa-angle-left"></i></span>',
    });

    $('.teamNav-slide').slick({
        slidesToShow: 4,
        arrows: false,
        asNavFor: '.team',
        focusOnSelect: true
    });
} (jQuery) );
