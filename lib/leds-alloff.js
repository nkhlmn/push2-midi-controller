"use strict";

inlets = 1;
outlets = 1;
autowatch = 1; // Constants

var OFF_VELOCITY = 0;
var PAD_LOW = 36;
var PAD_HIGH = 99;
var PAD_PREPEND = 144;
var MODE_BUTTON_LOW = 36;
var MODE_BUTTON_HIGH = 43;
var MODE_PREPEND = 176;

function bang() {
  // Turn off pads
  for (var i = PAD_LOW; i <= PAD_HIGH; i++) {
    outlet(0, PAD_PREPEND, i, OFF_VELOCITY);
  } // Turn off mode buttons


  for (var _i = MODE_BUTTON_LOW; _i <= MODE_BUTTON_HIGH; _i++) {
    outlet(0, MODE_PREPEND, _i, OFF_VELOCITY);
  } // Turn off octave buttons


  outlet(0, MODE_PREPEND, 54, OFF_VELOCITY);
  outlet(0, MODE_PREPEND, 55, OFF_VELOCITY); // Turn off page buttons

  outlet(0, MODE_PREPEND, 62, OFF_VELOCITY);
  outlet(0, MODE_PREPEND, 63, OFF_VELOCITY);
  post("ALL PADS OFF");
}