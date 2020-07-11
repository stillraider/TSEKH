let navWrap = $(".header-wrap");
let navBlocks = $(".header__burger");
let headerJackdaw = $(".header-wrap__jackdaw");
let html = $("html");

navBlocks.on("click", 
    function () {
        navWrap.show();
        html.css("overflow", "hidden");
    }
)
headerJackdaw.on("click", 
    function () {
        navWrap.hide();
        html.css("overflow", "inherit");
    }
)

$(".phone").mask("+7 (999) 999-9999");





$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 1,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else{
        document.querySelector('body').classList.add('no-webp');
    }
});