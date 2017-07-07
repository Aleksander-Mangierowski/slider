var slideWidth=772;
var centerHeight = 600;
var sliderTimer;
$(function(){
    $('.ul-center').width($('.ul-center').children().length * centerHeight);
        sliderTimer=setInterval(nextSlide,1000);
        // $('.viewport').hover(function(){
        //     clearInterval(sliderTimer);
        // },function(){
        //     sliderTimer=setInterval(nextSlide,1000);
        // });
    });

function nextSlide(){
    var currentSlide=parseInt($('.ul-center').data('current'));
    currentSlide++;
    
    if (currentSlide == $('.ul-center').children().length)
    {
        currentSlide=0; 
        // alert(0);  
    }
    
    $('.ul-center').animate({top: -currentSlide*centerHeight - 55},300).data('current',currentSlide);
}