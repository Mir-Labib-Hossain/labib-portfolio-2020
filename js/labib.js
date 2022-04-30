let labib = $("#labib");
let mast__text = $(".mast__text");
let limg = $("#limg");
let rellax = new Rellax('.rellax');

AOS.init();
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
let lh = "370vh";
    if (window.innerWidth < 500) {
        lh = "270vh";
    }
    labib.css({
        "height": lh,
        "overflow": "visible"
    });

        (function ($) {
            var s,
                spanizeLetters = {
                    settings: {
                        letters: $(".js-spanize")
                    },
                    init: function () {
                        s = this.settings;
                        this.bindEvents();
                    },
                    bindEvents: function () {
                        s.letters.html(function (i, el) {
                            //spanizeLetters.joinChars();
                            var spanizer = $.trim(el).split("");
                            return "<span>" + spanizer.join("</span><span>") + "</span>";
                        });
                    }
                };
            spanizeLetters.init();
        })(jQuery);
