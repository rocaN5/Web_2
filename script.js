$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 200){
      $('#top-button').fadeIn();
    } else{
      $('#top-button').fadeOut();
    }
  });

  $("#top-button").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});

$(document).ready(function(){
  $('.heaer-adapt-slider').click(function(){
      $('.heaer-adapt-slider').toggleClass('button-active');
      $('.menu-slider').slideToggle(200);
  });
});
