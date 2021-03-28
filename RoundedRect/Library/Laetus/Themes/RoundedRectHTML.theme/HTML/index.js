
var kbType = 'Letters';
$('#letters').show();
function laetusKeyPlaneDidChange(state) {
    // if (state == 'Letters' || state == 'CapitalLetters')
    //     $('#letters').show();
    // else
    //     $('#letters').hide();

    // if (state == 'Numbers' || state == 'NumbersAlternate')
    //     $('#numbers').show();
    // else
    //     $('#numbers').hide();

    // if (state == 'NumberPad')
    //     $('#numpad').show();
    // else
    //     $('#numpad').hide();
}

function laetusRawKeyPlaneDidChange(state) {
    var keyPlane = state.split('-');
    var lastItem = keyPlane[keyPlane.length - 1];
    pickerShowing = false;
    switch (lastItem) {
        case 'Punctuation':
            if (state.indexOf('Portrait') != -1) {
                $('#numbers').show();
                $('#numbersLandscape').hide();
                $('#lettersLandscape').hide();
                $('#letters').hide();
                $('#numpad').hide();
            }
            else {
                $('#numbersLandscape').show();
                $('#lettersLandscape').hide();
                $('#letters').hide();
                $('#numbers').hide();
                $('#numpad').hide();
            }
            break;
        case 'Alternate':
            if (state.indexOf('Portrait') != -1) {
                $('#numbers').show();
                $('#numbersLandscape').hide();
                $('#lettersLandscape').hide();
                $('#letters').hide();
                $('#numpad').hide();
            }
            else {
                $('#numbersLandscape').show();
                $('#lettersLandscape').hide();
                $('#letters').hide();
                $('#numbers').hide();
                $('#numpad').hide();
            }
            break;
        case 'Display':
            if (state.indexOf('Portrait') != -1) {
                $('#numbers').hide();
                $('#numbersLandscape').hide();
                $('#lettersLandscape').hide();
                $('#letters').show();
                $('#numpad').hide();
            }
            else {
                $('#numbersLandscape').hide();
                $('#lettersLandscape').show();
                $('#letters').hide();
                $('#numbers').hide();
                $('#numpad').hide();
            }
            break;
        case 'Letters':
            if (state.indexOf('Portrait') != -1) {
                $('#numbers').hide();
                $('#numbersLandscape').hide();
                $('#lettersLandscape').hide();
                $('#letters').show();
                $('#numpad').hide();
            }
            else {
                $('#numbersLandscape').hide();
                $('#lettersLandscape').show();
                $('#letters').hide();
                $('#numbers').hide();
                $('#numpad').hide();
            }
            break;
        case 'Pad_Default':
            if (state.indexOf('Portrait') != -1) {
                $('#numpad').show();
                $('#numbers').hide();
                $('#numbersLandscape').hide();
                $('#lettersLandscape').hide();
                $('#letters').hide();
            }
            else {
                $('#numbers').hide();
                $('#numbersLandscape').hide();
                $('#lettersLandscape').hide();
                $('#letters').hide();
                $('#numpad').hide();
            }
            break;
        case 'Keyboard_Letters':
            $('#numbers').hide();
            $('#numbersLandscape').hide();
            $('#lettersLandscape').hide();
            $('#letters').hide();
            $('#numpad').hide();
            break;
    }

}