const playerOne = 'X';
const playerTwo = 'O';
let playerTurn = 'X';
let previousTurn = 'O';
let squaresFilled = 0;

let squareX = {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',
}
let squareY = {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',
}

function checkForWin() {
    //Sixteen possible ways to win
    //1
    if ((squareX[1] === 'X' && squareX[2] === 'X' && squareX[3] === 'X') || (squareY[1] === 'O' && squareY[2] === 'O' && squareY[3] === 'O')) {
        //6
        console.log(squareX)
        console.log(squareY)
        alert(previousTurn + " is the Winner");
        window.location.reload();
    }

    if ((squareX[4] === 'X' && squareX[5] === 'X' && squareX[6] === 'X') || (squareY[4] === 'O' && squareY[5] === 'O' && squareY[6] === 'O')) {
        console.log(squareX)
        console.log(squareY)
        alert(previousTurn + " is the Winner");
        window.location.reload();
    }
    15

    if ((squareX[1] === 'X' && squareX[4] === 'X' && squareX[7] === 'X') || (squareY[1] === 'O' && squareY[4] === 'O' && squareY[7] === 'O')) {
        console.log(squareX)
        console.log(squareY)
        alert(previousTurn + " is the Winner");
        window.location.reload();
    }

    if ((squareX[2] === 'X' && squareX[5] === 'X' && squareX[8] === 'X') || (squareY[2] === 'O' && squareY[5] === 'O' && squareY[8] === 'O')) {
        console.log(squareX)
        console.log(squareY)
        alert(previousTurn + " is the Winner");
        window.location.reload();
    }
    if ((squareX[3] === 'X' && squareX[6] === 'X' && squareX[9] === 'X') || (squareY[3] === 'O' && squareY[6] === 'O' && squareY[9] === 'O')) {
        console.log(squareX)
        console.log(squareY)
        alert(previousTurn + " is the Winner");
        window.location.reload();
    }
    if ((squareX[1] === 'X' && squareX[5] === 'X' && squareX[9] === 'X') || (squareY[1] === 'O' && squareY[5] === 'O' && squareY[9] === 'O')) {
        console.log(squareX)
        console.log(squareY)
        alert(previousTurn + " is the Winner");
        window.location.reload();
    }
    if ((squareX[3] === 'X' && squareX[5] === 'X' && squareX[9] === 'X') || (squareY[3] === 'O' && squareY[5] === 'O' && squareY[9] === 'O')) {
        console.log(squareX)
        console.log(squareY)
        alert(previousTurn + " is the Winner");
        window.location.reload();
    }
    if ((squareX[7] === 'X' && squareX[8] === 'X' && squareX[9] === 'X') || (squareY[7] === 'O' && squareY[8] === 'O' && squareY[9] === 'O')) {
        console.log(squareX)
        console.log(squareY)
        alert(previousTurn + " is the Winner");
        window.location.reload();
    }
}

function checkPlayerTurn(playerTurn) {
    if (playerTurn === 'X') {
        setSelection(X)
        playerTurn = 'O';
    }
    else if (playerTurn === 'O') {
        setSelection(O)
        playerTurn = 'X'
    }
}
function setSelection(val) {
    let turn = playerTurn;
    //Game should start at 'X'
    let value = val;
    //Use the Id val to change our HTML

    // checkForWin();
    //Increment Squares 

    if (turn === 'X') {
        //Change between players
        squareX[value] = 'X'
        if (document.getElementById(value).innerHTML === 'Click') {
            document.getElementById(value).innerHTML = turn;
            previousTurn = 'X'
            playerTurn = 'O'

            checkForWin();
        }
    }
    if (turn === 'O') {
        if (document.getElementById(value).innerHTML === 'Click') {
            document.getElementById(value).innerHTML = turn;
            squareY[value] = 'O'
            previousTurn = 'O'
            playerTurn = 'X'
            checkForWin();
        }
    }
}


