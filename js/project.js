AOS.init({
    easing:"linear",
    duration:1000
});
let rgb = $("#rbgShiftSlider");
var images = [
    "../images/cover (1).jpg",
    "../images/cover (3).jpg",
    "../images/cover (2).jpg",
    "../images/cover (4).jpg",
    "../images/cover (3).jpg",
    "../images/cover (5).jpg",
]
var rbgShiftSlider = new rbgShiftSlider({
    nav: true,
    navElement: '.scene-nav',
    slideImages: images,
    stageWidth: 1920,
    stageHeight: 1080,
    displacementImage: 'http://hmongouachon.com/_demos/rgbShiftSlider/displace-circle.png',
    fullScreen: true,
    transitionDuration: 0.35, // must be 0.1 > transitionGhostDuration
    transitionGhostDuration: 0.25,
    transitionFilterIntensity: 350,
    transitionSpriteIntensity: 2,
    mouseDispIntensity: 3,
    interactive: true,
    autoPlay: true,
    autoPlaySpeed: 5500,
});
function fulls() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}
(function ($) {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof (settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof (settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 50,           // how long it should take to count between the target numbers
        refreshInterval: 10,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));
jQuery(function ($) {
    // custom formatting example
    $('.count-number').data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

    // start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
});

$.js = function (el) {
    return $('[data-js=' + el + ']')
};
$.js = function (el) {
    return $('[data-js=' + el + ']')
};
function carousel() {
    $.js('timeline-carousel').slick({
        infinite: false,
        arrows: false,
        dots: true,
        autoplay: false,
        speed: 1100,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
}
carousel();
(function ($) {
    $.fn.timelineScroll = function () {
        var selectors = {
            id: $(this),
            item: $(this).find(".timelineScroll-item"),
            activeClass: "timelineScroll-item--active",
            img: ".timelineScroll__img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" +
            selectors.item
                .first()
                .find(selectors.img)
                .attr("src") +
            ")"
        );
        var itemLength = selectors.item.length;
        $(window).scroll(function () {
            var max, min;
            var pos = $(this).scrollTop();
            selectors.item.each(function (i) {
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                var that = $(this);
                if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        selectors.item
                            .last()
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.last().addClass(selectors.activeClass);
                } else if (pos <= max - 40 && pos >= min) {
                    selectors.id.css(
                        "background-image",
                        "url(" +
                        $(this)
                            .find(selectors.img)
                            .attr("src") +
                        ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
            });
        });
    };
})(jQuery);

$("#timelineScroll-1").timelineScroll();

// <!-- Skill bar -->

$(window).scroll(function () {
    var hT = $('#skill').offset().top,
        hH = $('#skill').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - 1.4 * wH)) {
        jQuery(document).ready(function () {
            jQuery('.skillbar-container').each(function () {
                jQuery(this).find('.skillBar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 5000); // 5 seconds
            });
        });
    }
});