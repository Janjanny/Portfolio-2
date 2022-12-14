//variables for nav-bar
let navBar = $(".nav-bar");
let links = navBar.find("li");
let logo = $(".logo");

//textcontent variables
let introContent = $(".text-content");
let textItems = introContent.find('.item');

//img variables
let imgContent = $(".img-content");
let imgItems = imgContent.find('.img');

//animation variables
var itemDelay = 100;
var itemDelay2 = 50;
var j = 600;



//Nav Bar Animations
logo.delay(j).animate({
    top: "0px",
    opacity: 1
});


links.each(function() {
    $(this).delay(j).animate({
        top: "0px",
        opacity: 1
    });
    j+= itemDelay;
});

//introContent animations
textItems.each(function() {
    $(this).delay(j).animate({
        left: "0px",
        opacity: 1
    });
    j+=itemDelay;
});


//img content animations
imgItems.each(function () {
    $(this).delay(1000).animate({
        marginLeft: "0px",
        opacity: 1
    })
    j+=itemDelay2;
})

//nav bar responsive
$(".icon").delay(700).animate({
    opacity: 1
});
$(".icon").click(function() {
    $(this).toggleClass("uil-times");
    $(".nav-links").toggleClass("active");
    $(".nav-button").toggleClass("cntct-btn");
})