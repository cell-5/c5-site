'use strict';

$(document).ready(function() {
    // To animate tagline
    setTimeout(function() {
        $('#rotating-text').text('web, mobile, design, cloud, social media, s.e.o., legacy code uplift, start-up growth');
        $('.tagline-text-wrapper ul li:first-child').addClass('active');
        $('#rotating-text').Morphext({
            animation: "fadeIn",
            separator: ",",
            speed: 7500,
            complete: function () {
                setTimeout(function() {
                    var active = $('.tagline-text-wrapper ul li.active');
                    active.removeClass('active');
                    if(active.next().length) {
                        active.next().addClass('active');
                    } else {
                        $('.tagline-text-wrapper ul li:first-child').addClass('active');
                    }
                }, 7500)
            }
        });
    }, 15000);

    // To close nav dropdown when a nav link is clicked
    $('header .nav-link').on('click', animateSectionScroll);

    $('.cta a').on('click', animateSectionScroll);

    $('.sitefooter-bottom a').on('click', animateSectionScroll);

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

    var homeYOffset = $('#tagline').height() + $('#home').height(),
        testimonialsYOffset = $('#testimonials').offset().top + $('#testimonials').height(),
        profilesYOffset = $('#profiles').offset().top + $('#profiles').height();

    $(window).on('scroll', function() {
        var yOffset = window.pageYOffset;
        var childNum = 4;

        // To change active nav link
        if(yOffset <= homeYOffset) {
            childNum = 1;
        } else if(yOffset <= testimonialsYOffset) {
            childNum = 2;
        } else if(yOffset <= profilesYOffset) {
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
