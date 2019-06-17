//=============================================
//
// TREEHOUSE FSJS PROJECT 3 - INTERACTIVE FORM
//
// ============================================


//=======================================
// Put the first field in the `focus` state
// ======================================
// To focus on input box on page startup
$( document ).ready(function() {
  $( "#name" ).focus();
});
//=======================================
// “Other” option to the Job Role section
// ======================================
// hide other input when not selected
$( "#other-title" ).hide();
// display other input when selected
$('#title').on('click keypress', function () {
  const selected = $(this).val(); // .val() - Get the current value of the first element in the set of matched elements.
  if (selected === 'other') {
    $( "#other-title" ).show();
  } else {
    $( "#other-title" ).hide();
  }
});
//=======================================
// T-shirt section
// ======================================
// Hide the “Select Theme” `option` element in the “Design” menu.
$('#design').change( function () {
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
  const $jsPuns = $( "#color option:contains('JS Puns')" );
  const $heartJs = $( "#color option:contains('I')" );
// 'I &#9829; JS' and  'JS Puns'
  if (theme === 'js puns' ) {
    $jsPuns.show();
    $heartJs.hide();
  } else if ( theme === 'heart js' ) {
    $heartJs.show();
    $jsPuns.hide();
  } else {
    $jsPuns.hide();
    $heartJs.hide();
    $color.hide();
  }
});

//=======================================
// Activity Section
// ======================================
// Creating a DOM element to display the total activity cost
let cost = 0;
const $total = $('<label></label>');
$('.activities').append($total);


// Listening for changes in the activity section
$('.activities').change(function () {
  // The DOM `input` element that was just clicked.
  let $clicked = $('.activities input:checked');
  // The text content of the above `input` element’s parent `label` element.
  let $activity = $clicked.parent().text();
  console.log($activity);

  // updating/displaying cost part 1 ...
  // The index of the dollar sign ‘$’
  const dollarSign = '$';
  let indexOfDollar = $activity.indexOf(dollarSign) + 1;
  // The cost of the activity the was just clicked.
  let costOf = $activity.slice(indexOfDollar);
  console.log(costOf);
  // the cost from the variable above, which is currently a string type, and turn it into a number type
  let price = parseInt(costOf);
  console.log(typeof price);

  // updating/displaying cost part 2 ...
  if ( $( $clicked ).prop( "checked" ) ) {
    // clicked add cost
    cost += price;
  } else {
    // not clicked substract
    cost -= price;
  }

  let $totalCost = $('<b>Total: $ ' + cost + '</b>').css({"color": "green", "font-size": "20px"});
  alert(cost);
});


//=======================================
// Payment Section
// ======================================

//=======================================
// Form Validation
// ======================================
