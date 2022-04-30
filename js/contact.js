
  AOS.init({
    easing:"linear",
     duration:1000
});

if (navigator.userAgent.indexOf("Firefox") != -1) {
    document.getElementsByClassName("detail")[0].style.flex = "60%";
    document.getElementById("social").style.flex = "40%";
    document.getElementById("d1").style.height = "auto";
}
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
var images = [
    "../images/cover (1).jpg",
    "../images/cover (2).jpg",
    "../images/cover (3).jpg",
    "../images/cover (4).jpg",
    "../images/cover (5).jpg",
]
// instanciate slider
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
function sendMail() {
    window.open('mailto:mirlabibhossain99@gmail.com?subject=Hello From Portfolio&body=body');
}
function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
document.querySelector('#CopyM').onclick = function () {
    document.getElementsByClassName("tooltiptext")[0].innerHTML = "Number Copied";
    Clipboard_CopyTo('01670820474');
}
document.querySelector('#CopyE').onclick = function () {
    document.getElementsByClassName("tooltiptext")[1].innerHTML = "Email Copied";
    Clipboard_CopyTo('mirlabibhossain@gmail.com');
}