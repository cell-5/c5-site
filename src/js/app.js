'use strict';

$(document).ready(function() {
    // Services
    $('.services-carousel').slick({
        slidesToShow: 3,
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        asNavFor: '.services-carousel-active',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.services-carousel-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.services-carousel'
    });

    // To animate tagline
    setTimeout(function() {
        $('#rotating-text').text('web, mobile, design, cloud, social media, s.e.o., legacy code uplift, start-up growth');
        $('.tagline-text-wrapper ul li:first-child').addClass('active');
        $('#rotating-text').Morphext({
            animation: "fadeIn",
            separator: ",",
            speed: 15000,
            complete: function () {
                setTimeout(function() {
                    var active = $('.tagline-text-wrapper ul li.active');
                    active.removeClass('active');
                    if(active.next().length) {
                        active.next().addClass('active');
                    } else {
                        $('.tagline-text-wrapper ul li:first-child').addClass('active');
                    }
                }, 15000)
            }
        });
    }, 15000);

    // To close nav dropdown when a nav link is clicked
    $('header .nav-link').on('click', animateSectionScroll);
    $('.cta a').on('click', animateSectionScroll);
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

    var servicesYOffset = Math.floor($('#services').offset().top),
        testimonialsYOffset = Math.floor($('#testimonials').offset().top),
        profilesYOffset = Math.floor($('#profiles').offset().top),
        contactUsYOffset = Math.floor($('#contact-us').offset().top);

    $(window).on('scroll', function() {
        var yOffset = window.pageYOffset,
            childNum = 5;

        // To change active nav link
        if (yOffset >= 0 && yOffset < servicesYOffset) {
            childNum = 1;
        } else if (yOffset >= servicesYOffset && yOffset < testimonialsYOffset) {
            childNum = 2;
        } else if (yOffset >= testimonialsYOffset && yOffset < profilesYOffset) {
            childNum = 3;
        } else if (yOffset >= profilesYOffset && yOffset < contactUsYOffset) {
            childNum = 4;
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
