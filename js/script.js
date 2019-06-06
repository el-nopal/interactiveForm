//=======================================
// Put the first field in the `focus` state
// ======================================
$( "#name" ).focus();

// $( document ).ready(function() {
//   $( "#name" ).focus();
// });

//=======================================
// “Other” option to the Job Role section
// ======================================
// hide other input when not selected
$( "#other-title" ).hide();
// display other input when selected
$('#title').on('click keypress', function () {
  const selectedValue = $(this).val();
  if (selectedValue === 'other') {
    $( "#other-title" ).show();
  } else {
    $( "#other-title" ).hide();
  }
});
//=======================================
// T-shirt section
// ======================================
// Hide the “Select Theme” `option` element in the “Design” menu.
// $('#design option').eq(0).hide();
// Update the “Color” field to read “Please select a T-shirt theme”.
const $color = $('<option>Please select a T-shirt theme</option>');
$('#color').prepend($color);
// "Theme - JS Puns" colors: "Cornflower Blue," "Dark Slate Grey," and "Gold."
$('#design').on('click keypress', function (e) {
  const theme = $(e.target).val();
  if (theme === 'js puns') {
    $('#color option').eq(6).hide();
    $('#color option').eq(5).hide();
    $('#color option').eq(4).hide();
  } else if (theme === 'heart js') {
    $('#color option').eq(3).hide();
    $('#color option').eq(2).hide();
    $('#color option').eq(1).hide();
  }
  else {
    $('#color option').show();
  }
});

// "Theme - I ♥ JS" colors: "Tomato," "Steel Blue," and "Dim Grey."
