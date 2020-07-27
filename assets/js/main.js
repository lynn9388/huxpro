---
---

// Navigation

// Drop Bootstarp low-performance Navbar
// Use customize navbar with high-quality material design animation
// in high-perf jank-free CSS3 implementation
var $body = document.body;
var $toggle = document.querySelector('.navbar-toggle');
var $navbar = document.querySelector('#huxblog_navbar');
var $collapse = document.querySelector('.navbar-collapse');

var __HuxNav__ = {
    close: function () {
        $navbar.className = " ";
        // Wait until animation end.
        setTimeout(function () {
            // Prevent frequently toggle
            if ($navbar.className.indexOf('in') < 0) {
                $collapse.style.height = "0px"
            }
        }, 400)
    },
    open: function () {
        $collapse.style.height = "auto"
        $navbar.className += " in";
    }
}

// Bind click event for toggle button in navigation bar
$toggle.addEventListener('click', function (e) {
    if ($navbar.className.indexOf('in') > 0) {
        __HuxNav__.close()
    } else {
        __HuxNav__.open()
    }
})

// Close toggle button when click outside toggle navigation
document.addEventListener('click', function (e) {
    if (e.target == $toggle) return;
    if (e.target.className == 'icon-bar') return;
    __HuxNav__.close();
})


// Search

// https://stackoverflow.com/questions/1912501/unescape-html-entities-in-javascript
function htmlDecode(input) {
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('search-results'),
    json: '{{ site.baseurl }}/assets/search.json',
    searchResultTemplate: '<div class="post-preview item"><a href="{url}"><h2 class="post-title">{title}</h2><h3 class="post-subtitle">{subtitle}</h3><hr></a></div>',
    noResultsText: 'No results',
    limit: 50,
    fuzzy: false,
    // a hack to get escaped subtitle unescaped. for some reason,
    // post.subtitle w/o escape filter nuke entire search.
    templateMiddleware: function (prop, value, template) {
        if (prop === 'subtitle' || prop === 'title') {
            if (value.indexOf("code")) {
                return htmlDecode(value);
            } else {
                return value;
            }
        }
    }
});

// Toggle search page
$(document).ready(function () {
    var $searchPage = $('.search-page');
    var $searchOpen = $('.search-icon');
    var $searchClose = $('.search-icon-close');
    var $searchInput = $('#search-input');
    var $body = $('body');

    $searchOpen.on('click', function (e) {
        e.preventDefault();
        $searchPage.toggleClass('search-active');
        var prevClasses = $body.attr('class') || '';
        setTimeout(function () {
            $body.addClass('no-scroll');
        }, 400)

        if ($searchPage.hasClass('search-active')) {
            $searchClose.on('click', function (e) {
                e.preventDefault();
                $searchPage.removeClass('search-active');
                $body.attr('class', prevClasses);  // from closure
            });
            $searchInput.focus();
        }
    });
});


// responsive tables
$(document).ready(function() {
    $("table").wrap("<div class='table-responsive'></div>");
    $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function() {
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height(),
            bannerHeight  = $('.intro-header .container').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop(),
                    $catalog = $('.side-catalog');

                //check if user is scrolling up by mouse or keyborad
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;


                //adjust the appearance of side-catalog
                $catalog.show()
                if (currentTop > (bannerHeight + 41)) {
                    $catalog.addClass('fixed')
                } else {
                    $catalog.removeClass('fixed')
                }
            });
    }
});
