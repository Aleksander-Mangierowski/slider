// var slideWidth=772;
// var centerHeight = 600;
// var sliderTimer;
// $(function(){
//     $('.ul-center').width($('.ul-center').children().length * centerHeight);
//         sliderTimer=setInterval(nextSlide,1000);
//         // $('.viewport').hover(function(){
//         //     clearInterval(sliderTimer);
//         // },function(){
//         //     sliderTimer=setInterval(nextSlide,1000);
//         // });
//     });

replaceImg();

// **************************
function replaceImg() {
    var first = $('.first');
    var x1 = first.offset().left;
    var y1 = first.offset().top;

    var second = $('.second');
    var x2 = second.offset().left;
    var y2 = second.offset().top;

    var third = $('.third');
    var x3 = third.offset().left;
    var y3 = third.offset().top;

    var fourth = $('.fourth');
    var x4 = fourth.offset().left;
    var y4 = fourth.offset().top;

    var fifth = $('.fifth');
    var x5 = fifth.offset().left;
    var y5 = fifth.offset().top;

    var sixth = $('.sixth');
    var x6 = sixth.offset().left;
    var y6 = sixth.offset().top;

    var seventh = $('.seventh');
    var x7 = seventh.offset().left;
    var y7 = seventh.offset().top;

    var eighth = $('.eighth');
    var x8 = eighth.offset().left;
    var y8 = eighth.offset().top;

    var ninth = $('.ninth');
    var x9 = ninth.offset().left;
    var y9 = ninth.offset().top;

    /////////////

    $('.ninth img').animate({left: x1, top: y1}, 3000,);
    
    $('.eighth img').animate({left: x9, top: y9}, 3000, function(){
    $(".ninth a").prepend($('.eighth img'))});

    $('.seventh img').animate({left: x8, top: y8}, 3000, function(){
    $(".eighth a").prepend($('.seventh img'))});

    $('.sixth img').animate({left: x7, top: y7}, 3000, function(){
    $(".seventh a").prepend($('.sixth img'))});

    $('.fifth img').animate({left: x6, top: y6}, 3000, function(){
    $(".sixth a").prepend($('.fifth img'))});

    $('.fourth img').animate({left: x5, top: y5}, 3000, function(){
    $(".fifth a").prepend($('.fourth img'))});

    $('.third img').animate({left: x4, top: y4}, 3000, function(){
    $(".fourth a").prepend($('.third img'))});

    $('.second img').animate({left: x3, top: y3}, 3000, function(){
        $(".third a").prepend($('.second img'))}
    );

    $('.first img').animate({left: x2, top: y2}, 3000, function() {
        $(".second a").prepend($('.first img'))
    });
    

    $(".first a").append($('<img/>',{alt: "", src: "images/sitecompli.jpg"})); 
}


