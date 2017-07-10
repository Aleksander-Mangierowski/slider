$(function(){
    //replaceImg();
    var sliderTimer = setInterval(replaceImg, 5000);
});


// **************************
function replaceImg() {
    var first = $('.first');
    var x1 = first.position().left;
    var y1 = first.position().top;

    var second = $('.second');
    var x2 = second.position().left;
    var y2 = second.position().top;

    var third = $('.third');
    var x3 = third.position().left;
    var y3 = third.position().top;

    var fourth = $('.fourth');
    var x4 = fourth.position().left;
    var y4 = fourth.position().top;

    var fifth = $('.fifth');
    var x5 = fifth.position().left;
    var y5 = fifth.position().top;

    var sixth = $('.sixth');
    var x6 = sixth.position().left;
    var y6 = sixth.position().top;

    var seventh = $('.seventh');
    var x7 = seventh.position().left;
    var y7 = seventh.position().top;

    var eighth = $('.eighth');
    var x8 = eighth.position().left;
    var y8 = eighth.position().top;

    var ninth = $('.ninth');
    var x9 = ninth.position().left;
    var y9 = ninth.position().top;

    /////////////

    $('.ninth img').animate({left: x1, top: y1, height: 245}, 1000, function(){
        $(".first a").append($('.ninth img'));
    });
    
    $('.eighth img').animate({left: x9, top: y9, height: 300}, 1000, function(){
        $(".ninth a").prepend($('.eighth img'));
    });

    $('.seventh img').animate({left: x8, top: y8, height: 245}, 1000, function(){
        $(".eighth a").prepend($('.seventh img'));
    });

    $('.sixth img').animate({left: x7, top: y7, height: 300}, 1000, function(){
        $(".seventh a").prepend($('.sixth img'));
    });

    $('.fifth img').animate({left: x6, top: y6, height: 245, width: 400}, 1000, function(){
        $(".sixth a").prepend($('.fifth img'));
    });

    $('.fourth img').animate({left: x5, top: 0, height: 549, width: 800}, 1000, function(){
        $(".fifth a").prepend($('.fourth img'));
    });

    $('.third img').animate({left: x4, top: y4, height: 300}, 1000, function(){
        $(".fourth a").prepend($('.third img'));
    });

    $('.second img').animate({left: x3, top: y3, height: 245}, 1000, function(){
        $(".third a").prepend($('.second img'));
    });

    $('.first img').animate({left: x2, top: y2, height: 300}, 1000, function() {
        $(".second a").prepend($('.first img')[0]);
    });   

}


