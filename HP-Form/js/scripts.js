// Trivia game Psuedo Code

// Welcome Page with msg "Welcome to Disney Trivia"
// Directions?
// Three strikes and you lose.
// The user should type their name.
// When user clicks button to submit their name the first question appears

$(document).ready(function() {

  var firstName = '';
  var middleName = '';
  var lastName = '';

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerName = $('#first-name').val();
    console.log(playerName);
    $('#show-first-name').text(playerName);
    playerName = $('#middle-name').val();
    console.log(playerName);
    $('#show-middle-name').text(playerName);
    playerName = $('#last-name').val();
    console.log(playerName);
    $('#show-last-name').text(playerName);
  });

}) // ready function ends