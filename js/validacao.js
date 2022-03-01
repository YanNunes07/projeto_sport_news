$(document).ready(function(){
    $('.carousel').carousel({
        duration: 100,
        shift: 0
    })
    // exemplo de funções para parar as imagens com botão 
    $('.next').click(function(){
        $('.carousel').carousel('next');
    })
    $('.prev').click(function(){
        $('.carousel').carousel('prev');
    })
})

var instance = M.Carousel.init({
    fullWidth: true
})

// Or with jQuery
$('.carousel.carousel-slider').carousel({
    fullWidth: true
}) 

instance.next(1);
