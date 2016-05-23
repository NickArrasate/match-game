var counter = 0;
var firstGuess;
var secondGuess;
$(document).ready(function(){
  $('.card').click(function(){
    if (counter === 0){
      $(this).children().first().toggle();
      $(this).addClass('clicked');
      firstGuess = $(this).children().first().attr('value');
      counter = 1;
    } else if (counter === 1){
      $(this).children().first().toggle();
      $(this).addClass('clicked');
      secondGuess = $(this).children().first().attr('value');
      counter = 2;
       if (firstGuess === secondGuess) {
          $('.clicked').removeClass('card').removeClass('clicked').addClass('matched');
          $('.matched').off();
          counter = 0;
        } else if(firstGuess !== secondGuess){
          $('.clicked').removeClass('clicked');
          counter = 2;
        }
    } else if (counter === 2){
        $('.card p').hide();
        counter = 0;
    }
  });
});
