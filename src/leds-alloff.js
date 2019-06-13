inlets = 1;
outlets = 1;
autowatch = 1;

// Constants
const OFF_VELOCITY = 0;

const PAD_LOW = 36;
const PAD_HIGH = 99;
const PAD_PREPEND = 144;

const MODE_BUTTON_LOW = 36;
const MODE_BUTTON_HIGH = 43;
const MODE_PREPEND = 176;

function bang() {
  // Turn off pads
  for (let i = PAD_LOW; i <= PAD_HIGH; i++) {
    outlet(0, PAD_PREPEND, i, OFF_VELOCITY);
  }

  // Turn off mode buttons
  for (let i = MODE_BUTTON_LOW; i <= MODE_BUTTON_HIGH; i++) {
    outlet(0, MODE_PREPEND, i, OFF_VELOCITY);
  }

  // Turn off octave buttons
  outlet(0, MODE_PREPEND, 54, OFF_VELOCITY);
  outlet(0, MODE_PREPEND, 55, OFF_VELOCITY);

  // Turn off page buttons
  outlet(0, MODE_PREPEND, 62, OFF_VELOCITY);
  outlet(0, MODE_PREPEND, 63, OFF_VELOCITY);

  post("ALL PADS OFF");
}
