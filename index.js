$(document).ready(function(){
    $(window).scroll(function(){
  
    
    if(this.scrollY > 500){
        $('.scroll-up').addClass("show")
    }else{
        $('.scroll-up').removeClass("show")
    }
    
    
    });
    
    
    
    
    //SLIDE UP SCRIPT
    $('.scroll-up').click(function(){
     $('html').animate({scrollTop: 0})
    });
    


    //MENU BUTTON SCRIPT
    
    $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active")
    $('.menu-btn i').toggleClass("active")
    })


 $(".owl-carousel").owlCarousel({
items:1,
loop:true,
nav:true,
dots:true,
autoplay:true,
smartSpeed:1500,
autoplayHoverPause:true

 });

    }); 
