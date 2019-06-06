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

// "Theme - JS Puns" colors: "Cornflower Blue," "Dark Slate Grey," and "Gold."
// $('#color option').eq(0).css({color: red});
// "Theme - I ♥ JS" colors: "Tomato," "Steel Blue," and "Dim Grey."
