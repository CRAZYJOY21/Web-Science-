$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        easing: 'linear',
        centerMode: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 10000,
        // variableWidth: true
    });
})

$('.carousel').carousel({
    interval: 2000
})

