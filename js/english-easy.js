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

    $(".fairy-button").mouseover(function(){
        $("#rainbow").fadeIn(2000);
    });
    $(".fairy-button").mouseout(function(){
        $("#rainbow").fadeOut(1000);
    });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-82994780-1', 'auto');
  ga('send', 'pageview');
})
