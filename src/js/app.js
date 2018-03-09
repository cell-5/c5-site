'use strict';

$(document).ready(function() {
    // Tagline
    var
        prev = [
          'web',
          'mobile',
          'design'
        ],
        curr = [
          'design',
          'software',
        ],
        next = [
          'software',
          'cloud',
          'web'
        ],

        prevUList = $('.tagline-text .roll-up-wrapper:first-child ul'),
        currUList = $('.tagline-text .roll-up-wrapper:nth-child(2) ul'),
        nextUList = $('.tagline-text .roll-up-wrapper:last-child ul'),

        prevListItems = toListItems(prev),
        currListItems = toListItems(curr),
        nextListItems = toListItems(next),

        maxCharLen = getMaxCharLen([prev, curr, next]);

    prevUList.html(prevListItems);
    currUList.html(currListItems);
    nextUList.html(nextListItems);

    currUList.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        prevUList.removeClass('roll-up');
        currUList.removeClass('roll-up');
        nextUList.removeClass('roll-up');

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
            prevUList.addClass('roll-up');
            currUList.addClass('roll-up');
            nextUList.addClass('roll-up');
        }.bind(this), 1500);
    });

    // To close nav dropdown when a nav link is clicked.
    $('header .nav-link').on('click', function(e) {
        e.preventDefault();

        if(window.innerWidth <= 767) {
            $('.navbar-toggler').click();
        }

        var section = $(this).attr('href');
        $('html,body').animate({
            scrollTop: section === '#home' ? 0 : $(section).offset().top - 52
        }, 250);
    });

    // Converts array items to html list items (pre-ES5 safe)
    function toListItems(list) {
        var returnValue = '';

        for(var i in list) {
            var item = list[i];
            var len = item.length;
            var letterSpacing = (maxCharLen - len) / len;
            returnValue +=
                '<li style="letter-spacing: ' +
                letterSpacing +
                'ch">' +
                item +
                '</li>';
        }

        return returnValue;
    }

    // Gets the max length of chars from the tagline rolling text list (pre-ES5 safe)
    function getMaxCharLen(twoDList) {
        var max = 0;

        for(var i in twoDList) {
            for(var j in twoDList[i]) {
                var len = twoDList[i][j].length;
                if(len > max) {
                    max = len;
                }
            }
        }

        return max;
    }
});
