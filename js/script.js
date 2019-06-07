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
$('#design').on('click keypass change', function () {
  $('#design option').eq(0).hide();
});
// Update the “Color” field to read “Please select a T-shirt theme”.
const $color = $('<option value="default">Please select a T-shirt theme</option>');
$('#color').prepend($color).val('default');
// hide colors until theme is selected
$('#color option').hide();
// when a theme is selected colors is given to correct theme
$('#design').change(function (e) {
  const theme = $(this).val();
  if (theme === 'js puns') {
    $('#color option').eq(0).hide();
    $('#color option').eq(6).hide();
    $('#color option').eq(5).hide();
    $('#color option').eq(4).hide();
  }
  else {
    $('#color option').eq(6).show();
    $('#color option').eq(5).show();
    $('#color option').eq(4).show();
  }
});

$('#design').change(function (e) {
  const theme = $(this).val();
  if (theme === 'heart js') {
    $('#color option').eq(0).hide();
    $('#color option').eq(3).hide();
    $('#color option').eq(2).hide();
    $('#color option').eq(1).hide();
  }
  else {
    $('#color option').eq(3).show();
    $('#color option').eq(2).show();
    $('#color option').eq(1).show();
  }
});
