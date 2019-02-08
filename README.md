# Push 2 MIDI Controller

## Use Ableton Push 2 with any software or hardware that supports USB MIDI

![Screenshot](./screenshot.png)

## ABOUT

This Max patch *receives* raw MIDI from the "Ableton Push 2 Live Port" **input**, processes it, and sends out MIDI notes to an output of your choice. The output can be a USB MIDI device, or a 'virtual' channel that can be used as an input with another piece of software like a DAW.
It also sends note data back out to the "Ableton Push 2 Live Port" **output** to control the pads/buttons LED's.

## FEATURES

- Chromatic and Diatonic scale modes
- Switch between scales using the note division buttons
- Switch the root note with the Page left/right buttons
- Switch the octave range with the Octave up/down buttons
- Settings to adjust the velocity output (min, max and curve)
- Sends MIDI aftertouch data

## SETUP

A copy of Max (available at cycling74.com) is required to run this patch. You **do not** need a paid version of Max to run this patch. Running in demo mode will work just fine. You just wont be able to save any modifications.

**IMPORTANT:** Make sure Ableton Live is not running when using this patch!

With a DAW or other piece of software:

- Disable the "Ableton Push 2 Live Port" and "Ableton Push 2 User Port" MIDI inputs and outputs in your softwares settings
- Enable input from the "from Max 1" MIDI input
- Make sure that "from Max 1" is selected as the output in the patch (it should be by default)

With a hardware synth or other USB MIDI device:

- Make sure your device is plugged in *before* you open the patch
- Select the hardware device and MIDI channel in the dropdown in the bottom right of the patch
- Make sure the device is set to receive on the same MIDI chanel that's selected in the patch
