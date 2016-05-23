(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var counter = 0;
var firstGuess;
var secondGuess;
$(document).ready(function(){
  $('.card').click(function(){
    console.log(counter);
    if (counter === 0){
      $(this).children().first().toggle();
      $(this).addClass('clicked');
      firstGuess = $(this).children().first().attr('value');
      console.log(firstGuess);
      counter = 1;
    } else if (counter === 1){
      $(this).children().first().toggle();
      $(this).addClass('clicked');
      secondGuess = $(this).children().first().attr('value');
      console.log(secondGuess);
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

},{}]},{},[1]);
