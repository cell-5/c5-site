'use strict';

$(document).ready(function() {
    // To animate tagline
    $("#rotating-text").Morphext({
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
            scrollTop: section === '#home' || section === '#' ? 0 : $(section).offset().top - 52
        }, 500);
    }
});
