'use strict';

$(document).ready(function() {
    // Slogan
    const
        prev = [
          'web',
          'mobile',
          'software',
          'design'
        ],
        curr = [
          'design',
          'digital'
        ],
        next = [
          'digital',
          'cloud',
          's.e.o.',
          'web'
        ],
        prevUList = $('.text-roller div:first-child ul'),
        currUList = $('.text-roller div:nth-child(2) ul'),
        nextUList = $('.text-roller div:last-child ul');

    let
        prevListItems = toListItems(prev),
        currListItems = toListItems(curr),
        nextListItems = toListItems(next);

    prevUList.html(prevListItems);
    currUList.html(currListItems);
    nextUList.html(nextListItems);

    currUList.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        prevUList.removeClass('text-roll-up');
        currUList.removeClass('text-roll-up');
        nextUList.removeClass('text-roll-up');

        prev.shift();
        prev.push(next[0]);
        prevListItems = toListItems(prev);
        prevUList.html(prevListItems);

        curr.shift();
        curr.push(next[1]);
        currListItems = toListItems(curr);
        currUList.html(currListItems);

        next.shift();
        next.push(prev[0]);
        currListItems = toListItems(next);
        nextUList.html(currListItems);

        setTimeout(function() {
            prevUList.addClass('text-roll-up');
            currUList.addClass('text-roll-up');
            nextUList.addClass('text-roll-up');
        }.bind(this), 1500);
    });

    // To close nav dropdown when a nav link is clicked.
    $('header .nav-link').on('click', function(e) {
        e.preventDefault();

        if(window.innerWidth <= 767) {
            $('.navbar-toggler').click();
        }

        const section = $(this).attr('href');
        $('html,body').animate({
            scrollTop: section === '#home' ? 0 : $(section).offset().top - 52
        }, 500);
    });
});

function toListItems(list) {
  return list.map(function(item) {
    const len = item.length;
    const letterSpacing = (8 - len) / len;
    return '<li style="letter-spacing: ' + letterSpacing + 'ch">' + item + '</li>';
  });
}
