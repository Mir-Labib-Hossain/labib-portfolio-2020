let html = $("html");
let welcome = $("#welcome");
let rgb = $("#rbgShiftSlider");
let home = $("#home");
$(window).load(function() {
    $('#loading').hide();
    $('.uiText').css("color", "white");
  });
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
$("#volume").click(function () {
    $("#volume").css("display","none");
    setTimeout(startSong, 0);
    
});
setTimeout(gl, 6000);
function startSong(){
    new Audio("mp3/starting.mp3").play();
}
function gl() {
    new Audio("../mp3/glitch.mp3").play();
}