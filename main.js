var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navigation').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.navigation').css("background-color", "white").css("color", "gray");
        $('a').css("color", "gray");
    } else {
        if (st) {
            $('.navigation').css("background-color", "white").css("color", "gray");
            $('a').css("color", "gray");
        }

        // Scroll Up
        else if (st + $(window).height() < $(document).height()) {
            $('.navigation').css("background-color", "transparent").css("color", "white");
            $('a').css("color", "white");
        }
    }

    lastScrollTop = st;
}
