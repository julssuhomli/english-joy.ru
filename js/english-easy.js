$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    navText:["туда", "сюда"],
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:true
        },
      600:{
          items:2,
          nav:true
          },
      1000:{
          items:3,
          nav:true,
          loop:true
      }
    }
    });

    // $(".fairy-button").mouseover(function(){
    //   $('body').css({'background': 'url(blue-dirt.jpg) fixed', 'background-size': '100% 100%'});
    // })
    //
    // $(".fairy-button").mouseout(function(){
    //   $('body').css({'background': 'url(background-egg-yellow.jpg) fixed', 'background-size': '100% 100%'});
    // });
    $(".fairy-button").mouseover(function(){
        $("#rainbow").fadeIn(2000);
    });
    $(".fairy-button").mouseout(function(){
        $("#rainbow").fadeOut(1000);
    });
})
