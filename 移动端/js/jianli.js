
FastClick.attach(document.body);

~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 750 * 100 + "px";
}();


new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd,
});

function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry, function (slide, index) {
        console.log(n)
        if (n === index) {

            if (n == 1) {
                slide.id = 'fir'
            } else if (n == 2) {
                slide.id = 'two';
            } else if (n == 3) {
                slide.id = 'thr'
            } else if (n == 4) {
                slide.id = "foun"
            } else if (n == 5) {
                slide.id = "five"
            } else if (n == 6) {
                slide.id = "six"
            }else if (n == 0) {
                slide.id = "fir"
            }



            if (slide.id) {
                slide.style.opacity = '1';
            }
            return;
        }

        slide.id = null;

    });

}

var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move";


    }, false);
}, 1000);
music.addEventListener("click", function () {
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);
