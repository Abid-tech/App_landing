$(function(){
 
    
$('.screen-main').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  arrows: true,
  autoplaySpeed: 1500,
  nextArrow: '.right',
  prevArrow: '.left',
      responsive: [
                 {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        dots: false,
      }
    },
          {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        dots:false,
      }
    },
  ]
    
}); 
    
$('.review-main').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  arrows: true,
  autoplaySpeed: 1500,
  nextArrow: '.right2',
  prevArrow: '.left2',
responsive: [
                 {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: false,
      }
    },
          {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        dots:false,
      }
    },
  ]
    
});    
    

    
    
//BACK-TOP PART START    
$('.back-btn').on('click',function(){
    $('html,body').animate({scrollTop:0},1500);
})   
//BACK-TOP PART END
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    //BACK-TOP FADE START
    if(scrolling > 200){
       $('.back-btn').fadeIn();
    }
    else{
        $('.back-btn').fadeOut();
    }
    //BACK-TOP FADE END
    
    //NAVBAR ADD START
    if(scrolling > 100){
        $('.navbar').addClass('bg');
    }
    else{
        $('.navbar').removeClass('bg');
    }
    //NAVBAR ADD END
});   
    
//ANIMATION SCROLL START
var html_body = $('html, body');
$('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 70
            }, 1500);
            return false;
        }
    }
});     
    
    
//Closes Responsive Menu When a Scroll Link is Clicked
$('.nav-link').on('click',function(){
    $('.navbar-collapse').collapse('hide');
});
    
    
    
    
    
    
    
});