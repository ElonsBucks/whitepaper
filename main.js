var slides, mains;

$(window).ready(function(){
    slides = $('.slide');
    mains = $('.main, h1');
    var getScr = $(document).scrollTop()+$(window).height();
    for(i = 0; i < slides.length; i++){
        if($(slides[i]).offset().top <= getScr){
            $(slides[i]).css("transform", "translate(0%)");
        }
    }
    for(i = 0; i < mains.length; i++){
        if($(mains[i]).offset().top <= getScr){
            $(mains[i]).css("opacity", "1");
        }
    }
});

window.onscroll = function(){
    var getScr = $(document).scrollTop()+$(window).height();
    for(i = 0; i < slides.length; i++){
        if($(slides[i]).offset().top <= getScr){
            $(slides[i]).css("transform", "translate(0%)");
        }
    }
    for(i = 0; i < mains.length; i++){
        if($(mains[i]).offset().top <= getScr){
            $(mains[i]).css("opacity", "1");
        }
    }
}