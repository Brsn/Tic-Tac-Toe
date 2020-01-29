const playerOne = 'X';
const playerTwo = 'O';
let playerTurn = 'X';
let squaresFilled = 0;

let squares = {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',
}

function checkForWin() {
    //Sixteen possible ways to win
    //1
    if (squares[1] === 'X' && squares[2] === 'X' && squares[3] === 'X') {
        alert("Player X is the Winner");
        reset();
    }
    //2
    if (squares[1] === 'O' && squares[2] === 'O' && squares[3] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //3
    if (squares[4] === 'O' && squares[5] === 'O' && squares[6] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //4
    if (squares[4] === 'X' && squares[5] === 'X' && squares[6] === 'X') {
        alert("Player X is the Winner");
        reset();
    }
    //5
    if (squares[7] === 'O' && square[8] === 'O' && squares[9] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //6
    if (squares[7] === 'X' && squares[8] === 'X' && squares[9] === 'X') {
        alert("Player X is the Winner");
        reset();
    }
    //7
    if (squares[1] === 'O' && squares[4] === 'O' && squares[7] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //8
    if (squares[1] === 'O' && squares[4] === 'O' && squares[7] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //9
    if (squares[2] === 'O' && squares[5] === 'O' && squares[8] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //10
    if (squares[2] === 'O' && squares[5] === 'O' && squares[8] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //11
    if (squares[3] === 'O' && squares[6] === 'O' && squares[9] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //12
    if (squares[3] === 'O' && squares[6] === 'O' && squares[9] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //13
    if (squares[1] === 'O' && squares[5] === 'O' && squares[9] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //14
    if (squares[1] === 'O' && squares[5] === 'O' && squares[9] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //15
    if (squares[3] === 'O' && squares[5] === 'O' && squares[7] === 'O') {
        alert("Player X is the Winner");
        reset();
    }
    //16
    if (squares[3] === 'O' && squares[5] === 'O' && squares[7] === 'O') {
        alert("Player X is the Winner");
        reset();
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
    if (document.getElementById(value).innerHTML === 'Click') {
        document.getElementById(value).innerHTML = turn;
        //Set it equal to the turn either 'X' or 'O'
        squaresFilled++;
        // checkForWin();
        //Increment Squares Filled
        if (turn === 'X') {
            //Change between players
            squares[value] = 'X'
            playerTurn = 'O'
            checkForWin();
        }
        else (playerTurn = 'X')
        squares[value] = 'O'
        checkForWin();
    }
}


