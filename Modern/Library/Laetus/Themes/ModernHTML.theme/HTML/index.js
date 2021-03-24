
var kbType = 'Letters';
$('#letters').show();
function laetusKeyPlaneDidChange(state) {
    if (state == 'Letters' || state == 'CapitalLetters')
        $('#letters').show();
    else
        $('#letters').hide();

    if (state == 'Numbers' || state == 'NumbersAlternate')
        $('#numbers').show();
    else
        $('#numbers').hide();

    if (state == 'NumberPad')
        $('#numpad').show();
    else
        $('#numpad').hide();
}