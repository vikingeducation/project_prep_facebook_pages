$(document).ready(function() {
  $('#sign-up-button').mouseenter(function() {
    $('#sign-up-button')
      .css('opacity', '')
      .css('opacity', '1');
  });

  $('#sign-up-button').mouseleave(function() {
    $('#sign-up-button')
      .css('opacity', '')
      .css('opacity', '.5');
  });
});