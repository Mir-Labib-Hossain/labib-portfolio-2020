'use strict';
let back = $("#back");
let gal1 = $("#gal1");
let gal2 = $("#gal2");
let rgb = $("#rbgShiftSlider");
let move = $("#move");
let body = $("body");
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
document.getElementById("gimg").onclick = function () {
    location.href = "laptop.html";
};
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

let bc = 0;
function d() {
    if (window.innerWidth < 600) {
        back.text("Available only at PC / Laptop.");
    }
    else {
        if(bc == 0 ){
            back.html("&#xf0e2;");
            rgb.fadeOut();
            move.show();
            gal2.fadeOut(1000);
            gal1.fadeIn(1000);
            body.css({
                "background-color":"white"
            })
            bc=1;    
        }
        else{
            back.text("3D");
            move.hide();
            gal1.fadeOut(1000);
            gal2.fadeIn(1000);
            gal2.css({
                "background-color":"white"
            })
            bc=0;
        }
    }
}
    (function ($) {
        var container = [];
        $('#gal2').find('figure').each(function () {
            var $link = $(this).find('a'),
                item = {
                    src: $link.attr('href'),
                    w: $link.data('width'),
                    h: $link.data('height'),
                    title: $link.data('caption')
                };
            container.push(item);
        });

        $('a').click(function (event) {
            event.preventDefault();
            var $pswp = $('.pswp')[0],
                options = {
                    index: $(this).parent('figure').index(),
                    bgOpacity: 0.85,
                    showHideOpacity: true
                };
            var gal2 = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
            gal2.init();
        });

    }(jQuery));

    //row2
    var makeWinHeight = function () {
        var vh = $(window).height();
        var projects = vh / 2;
        $('#scene, .layer.main').height(vh);
        $('#scene .col a, #scene .col').height(projects);
    }
    $(document).ready(function () {
        makeWinHeight();

    });
    $(window).resize(function () {
        makeWinHeight();
    });

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);