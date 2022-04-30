let winload = $("#winload")
let desktop = $('#dekstop');
let single = $("#single");
let rain = $(".rain");
let mobile = $("#mobile");
let rainSound = document.getElementById("rainSound");
let winS = document.getElementById("winS");
AOS.init({
    delay: 2500,
    offset: -1200,
    easing: 'ease-in'
});
$(".cl").click(function(){
    document.getElementById("click").play();
});
function recModal() {
    document.getElementById('windowRec').style.display = 'block';
}
function closeRec() {
    console.log("recclos");
    document.getElementById('windowRec').style.display = 'none';
}
function emty() {
    document.getElementById("rec").src = 'images/emty.png';
}
function start() {
    document.getElementById("shut").style.display = "block"
    console.log("sut");
}
function shut() {
    document.getElementById("shut").style.display = "none";
}
let rainStop = 0;
function stop() {
    mobile.hide();
    console.log("stop Fu");
    if (rainStop == 1) {
        single.text("Start");
        rainSound.pause();
        rainStop = 0;
    }
    else {
        single.text("Stop");
        rainStop = 1;
        rainSound.play();
    }
}
var makeItRain = function () {
    $('.rain').empty();
    let increment = 0;
    let drops = "";
    let backDrops = "";
    while (increment < 100) {
        let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        increment += randoFiver;
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }
    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
}
$('.single-toggle.toggle').on('click', function () {
    desktop.toggleClass('single-toggle');
    $('.single-toggle.toggle').toggleClass('active');
    makeItRain();
});
setInterval(time, 1000);
setTimeout(lap, 2000);
setTimeout(pc, 0);
function pc() {
    if (window.innerWidth > 800) {
        setTimeout(stop, 0);
        makeItRain();
        setTimeout(thunder, 6000);
    }
    winS.play();
}
function thunder() {
    new Audio("../mp3/Thunder.mp3").play();
}
function thunderM() {
    document.getElementById("thunder").play();
}
function lap() {
    winload.fadeOut(1000);
    $(".toggles").hide();
}
function time() {
    var d = new Date();
    document.getElementById("timep").innerHTML = d.getHours() + ":" + d.getMinutes();
}
function visual() {
    makeItRain();
    mobile.attr("style", "display: none !important");
    $(".toggles").show();
    rainSound.play();
    desktop.removeClass("dek")
    desktop.addClass("thunderClass");
    setTimeout(thunderM, 2500);
    winS.play();
}