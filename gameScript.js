(function() {

    var NUMBERS = 100;
    var DELAY = 500;

    var playButton = document.getElementById('button-play');
    playButton.click();

    var gameBoard = document.getElementById('answerbox');

    var numberButtons = [];

    for (var i = 1; i <= NUMBERS; i++) {
        numberButtons[i] = gameBoard.children[i].firstChild;
    }

    var numberButtonsSorted = sortButtons(numberButtons);

    clickButtons(numberButtonsSorted, 1);

    function sortButtons(numberButtons) {
        var numberButtonsSorted = [];
        for (var i = 1; i <= NUMBERS; i++) {
            numberButtonsSorted[numberButtons[i].innerHTML] = numberButtons[i];
        }
        return numberButtonsSorted;
    }

    function clickButtons(buttons, currentButton) {
        if (currentButton > NUMBERS) {
            return;
        }
        buttons[currentButton].click();
        window.setTimeout(clickButtons, DELAY, buttons, currentButton + 1);
    }
})();