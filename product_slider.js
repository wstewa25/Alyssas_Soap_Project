$(document).ready(function(){ //bxSlider code for products page
    $("#slider").bxSlider({
        minSlides: 2, //2 slides per carousel page, moves by one when arrow clicked, pager underneath
        maxSlides: 2,
        pager: true,
        pagerType: "long",
        slideWidth: 600,
        moveSlides: 1,
    });
});