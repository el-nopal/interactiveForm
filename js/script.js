//=============================================
//
// TREEHOUSE FSJS PROJECT 3 - INTERACTIVE FORM
//
// ============================================
//--------------------------------------------
// Put the first field in the `focus` state
//--------------------------------------------
// To focus on input box on page startup
$( document ).ready(function() {
  $( "#name" ).focus();
});
//--------------------------------------------
// “Other” option to the Job Role section
//--------------------------------------------
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
//--------------------------------------------
// T-shirt section
//--------------------------------------------
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

//--------------------------------------------
// Activity Section
//--------------------------------------------
// Creating a DOM element to display the total activity cost
let cost = 0;
const $total = $('<label></label>');
$('.activities').append($total);


// Listening for changes in the activity section
$('.activities').change(function (e) {
// The DOM `input` element that was just clicked.
  let $clicked = $(e.target);
// The text content of the above `input` element’s parent `label` element.
  let $activity = $clicked.parent().text();
  console.log($activity);

// updating/displaying cost part 1 ...
// The index of the dollar sign ‘$’
  const dollarSign = '$';
  let ioDollar = $activity.indexOf(dollarSign) + 1;
// The cost of the activity the was just clicked.
  let costOf = $activity.slice(ioDollar);
// the cost from the variable above, which is currently a string type, and turn it into a number type
  let price = parseInt(costOf);

// updating/displaying cost part 2 ...
  if ( $( $clicked ).prop( "checked" ) ) {
//add the cost of the currently clicked activity to the total cost variable,
    cost += price;
  } else {
// else subtract the cost.
    cost -= price;
  }
// set the text of the total cost element equal to the string ‘Total: $’
// concatenated with the current value of the total cost variable
  let $totalCost = $total.text('Total: $ ' + cost).css({"color": "green", "font-weight": "bold", "font-size": "20px"});

// Disabling conflicting activities part 1 ...
  const emDash = '—';
  const comma = ',';
  let ioDash = $activity.indexOf(emDash);
  let ioComma = $activity.indexOf(comma);
  let dayTime = $activity.slice(ioDash, ioComma);
  console.log(dayTime);

// Disabling conflicting activities part 2 ...
  let $checkboxes = $('.activities input');
  for (var i = 0; i < $checkboxes.length; i++) {
    $checkboxes[i];
    
  }
});

//--------------------------------------------
// Payment Section
//--------------------------------------------

//--------------------------------------------
// Form Validation
//--------------------------------------------
