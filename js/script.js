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
// UPDATING/DISPLAYING COST PART 1 ... -------------------------
  // The index of the dollar sign ‘$’
  const dollarSign = '$';
  let ioDollar = $activity.indexOf(dollarSign) + 1;
  // The cost of the activity the was just clicked.
  let costOf = $activity.slice(ioDollar);
  // the cost from the variable above, which is currently a string type, and turn it into a number type
  let price = parseInt(costOf);
// UPDATING/DISPLAYING COST PART 2 ... -------------------------
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
// Disabling conflicting activities part 1 ... ----------------
  const emDash = '—';
  const comma = ',';
  const ioDash = $activity.indexOf(emDash) + 1;
  const ioComma = $activity.indexOf(comma);
  const dayNtime = $activity.slice(ioDash, ioComma);

// Disabling conflicting activities part 2 ... -----------------------
//-------------------------
// BELOW HERE, HELP MEEEE !!!
//-------------------------
  // The .each() method is designed to make DOM looping constructs
  // concise and less error-prone.the keyword this refers to the element

  // the element is $(activities input), this is where 'this' comes in
  // const times =  $('.activities input').each(function (i, element){
  //     const $clickedActivity = $( this ).prop( "checked" );
  //     // console.log($clickedActivity);
  //     if ( true && true ) {
  //       if ( true ) {
  //           $clickedActivity.disabled = false;
  //         } else {
  //           $clickedActivity.disabled = true;
  //         }
  //     }
  //   });
  //   console.log(times);

// variables to select activity checkboxes
  const $jsFrameworks = $("input[name = 'js-frameworks']");
  const $jsLibs = $("input[name = 'js-libs']");
  const $express = $("input[name = 'express']");
  const $node = $("input[name = 'node']");

// if js-frameworks is checked, stop express from being checked
  $( $jsFrameworks ).change(function() {
      if ( $( this ).prop( "checked" ) ){
          $express.prop("disabled", true);
      } else {
          $express.prop("disabled", false);
      }
  });
// if express is checked, stop js-frameworks from being checked
  $($express).change(function() {
      if ( $( this ).prop( "checked" ) ) {
          $jsFrameworks.prop("disabled", true);
      } else {
          $jsFrameworks.prop("disabled", false);
      }
  });
  // if js-libs is checked, stop node from being checked
  $($jsLibs).change(function() {
      if ( $( this ).prop( "checked" ) ) {
          $node.prop("disabled", true);
      } else {
          $node.prop("disabled", false);
      }
  });
  // if node is checked, stop js-libs from being checked
  $($node).change(function() {
      if ( $( this ).prop( "checked" )) {
          $jsLibs.prop("disabled", true);
      } else {
          $jsLibs.prop("disabled", false);
      }
  });

// dont pass / end of activity function --------------
});

//--------------------------------------------
// Payment Section
//--------------------------------------------
// Hide the “Select Payment Method `option` element in the 'payment' menu.
$('#payment').change( function () {
  $('#payment option').eq(0).hide();
});
$('option[value="credit card"]').attr('selected', true);

const $paypal = $( "div p:contains('Paypal')" ).hide();
const $bitcoin = $( "div p:contains('Bitcoin')" ).hide();
// payment selections
$('#payment').change(function () {
  const payment = $(this).val();
  const $credit = $( '#credit-card' );
  if (payment === 'paypal' ) {
    $credit.hide();
    $paypal.show();
    $bitcoin.hide();
  } else if ( payment === 'bitcoin' ) {
    $credit.hide();
    $paypal.hide();
    $bitcoin.show();
  } else {
    $credit.show();
    $paypal.hide();
    $bitcoin.hide();
  }
});
// max input field for credit cardVal
$(document).ready(function () {
    $('#cc-num').prop('maxLength',16);
    $('#zip').prop('maxLength',5);
    $("#cvv").prop('maxLength', 3);
});
//--------------------------------------------
// Form Validation
//--------------------------------------------
// email validate
function validEmail ( email ) {
  const emailRegex = /^\w+@\w+\..{3}?$/;
  return emailRegex.test( email );
}

// REGISTER BUTTON VALIDATION
const $nameLetters = $('label[for="name"]');
const $emailLetters = $('label[for="mail"]');
const $ccNum = $('label[for="cc-num"]');
const $zip = $('label[for="zip"]');
const $cvv = $('label[for="cvv"]');
// regex
const cardRegex = /^\d{13,16}$/;
const zipRegex = /^\d{5}$/;
const cvvRegex = /^\d{3}$/;
const cardVal = $('#cc-num').val();
const zipVal = $('#zip').val();
const cvvVal = $('#cvv').val();

// complete fields warning
const $warning = $('<label></label>');
$('form').append($warning);
const $incomplete = $warning.text('Fill in empty fields').css({"color": "red", "font-weight": "bold"});
$incomplete.hide();

// Register Button
$( 'button' ).on( 'click', function(e) {
// name input
  if ( $('#name').val() === "" ) {
    $nameLetters.css({"color": "red", "font-weight": "bold"});
    $('#name').css({"border-color": "red"});
    e.preventDefault();
    $incomplete.show();
  }
// email input
  if ( $('#mail').val() === "" ) {
    $emailLetters.css({"color": "red", "font-weight": "bold"});
    $('#mail').css({"border-color": "red"});
    e.preventDefault();
    $incomplete.show();
  }
// activity section
  if ( !$( '.activities input' ).prop( "checked" ) ) {
    $('.activities legend').css({"color": "red", "font-weight": "bold"});
    e.preventDefault();
    $incomplete.show();
  }
// credit card
  if ( $('#payment').val() === 'credit card' ) {
    if ( $('#cc-num').val() === "" || (cardRegex.exec(cardVal)) === null) {
      $ccNum.css({"color": "red", "font-weight": "bold"});
      $('#cc-num').css({"border-color": "red"});
      e.preventDefault();
      $incomplete.show();
    }
    if ( $('#zip').val() === "" || (zipRegex.exec(zipVal)) === null ) {
      $zip.css({"color": "red", "font-weight": "bold"});
      $('#zip').css({"border-color": "red"});
      e.preventDefault();
      $incomplete.show();
    }
    if ($('#cvv').val() === "" || (cvvRegex.exec(cvvVal)) === null ) {
      $cvv.css({"color": "red", "font-weight": "bold"});
      $('#cvv').css({"border-color": "red"});
      e.preventDefault();
      $incomplete.show();
    }
  }
});
