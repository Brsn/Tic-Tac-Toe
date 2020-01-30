/* TicTacToe 
  Author: Bronson Brown
  Tech Used: HTML, CSS, JavaScript, Bootstrap
  Summary: TicTacToe with an Unbeatable AI using minimax algorithm
*/
let playerTurn = 'X';
let previousTurn = 'O';
let aiPick = 0;
let squaresFilled = 0;


let squareX = {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',
}
let squareY = {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',
}

let squaresXMoves = [];



function aiMove() {
    let turn = playerTurn;
    while (playerTurn != 'X')
        if (squareX[aiPick] === '' && document.getElementById(aiPick).innerHTML === 'Click') {
            //if the spot isn't already taken by player X we can use this
            document.getElementById(aiPick).innerHTML = turn;
            squareY[aiPick] = 'O';
            previousTurn = 'O';
            squaresFilled++;
            console.log(squaresFilled);
            playerTurn = 'X';
            checkForWin();
        }
        else {
            //spots already taken by player X. So let's generate a new option
            generatePick();
        }
}

function generatePick() {
    //Randomly generates the AI's pick between 1-9
    aiPick = Math.floor((Math.random() * 9) + 1);
}

function checkForWin() {
    /*Sixteen possible ways to win. Also Holy if statements. We have two object literals that store 1-9 x or o values. 
    Once three in a row feel in one of those objects we have a winner. Also page will refresh upon winning.*/

    if ((squareX[1] === 'X' && squareX[2] === 'X' && squareX[3] === 'X') || (squareY[1] === 'O' && squareY[2] === 'O' && squareY[3] === 'O')) { }
    if ((squareX[4] === 'X' && squareX[5] === 'X' && squareX[6] === 'X') || (squareY[4] === 'O' && squareY[5] === 'O' && squareY[6] === 'O')) { }
    if ((squareX[1] === 'X' && squareX[4] === 'X' && squareX[7] === 'X') || (squareY[1] === 'O' && squareY[4] === 'O' && squareY[7] === 'O')) { }
    if ((squareX[2] === 'X' && squareX[5] === 'X' && squareX[8] === 'X') || (squareY[2] === 'O' && squareY[5] === 'O' && squareY[8] === 'O')) { }
    if ((squareX[3] === 'X' && squareX[6] === 'X' && squareX[9] === 'X') || (squareY[3] === 'O' && squareY[6] === 'O' && squareY[9] === 'O')) { }
    if ((squareX[1] === 'X' && squareX[5] === 'X' && squareX[9] === 'X') || (squareY[1] === 'O' && squareY[5] === 'O' && squareY[9] === 'O')) { }
    if ((squareX[3] === 'X' && squareX[5] === 'X' && squareX[9] === 'X') || (squareY[3] === 'O' && squareY[5] === 'O' && squareY[9] === 'O')) { }
    if ((squareX[7] === 'X' && squareX[8] === 'X' && squareX[9] === 'X') || (squareY[7] === 'O' && squareY[8] === 'O' && squareY[9] === 'O')) { }

}

function delayAi() {
    //Delay the Ai to give it "thinking" feeling.
    setTimeout(20000, aiMove());
}


function setSelection(val) {
    /* Game should start at 'X' and we use the Id val to change our HTML 
        Upon completion if X turn playerTurn will change to AI*/
    let turn = playerTurn;
    let value = val;
    if (turn === 'X') {
        squareX[value] = 'X'
        if (document.getElementById(value).innerHTML === 'Click') {
            document.getElementById(value).innerHTML = turn;
            previousTurn = 'X'
            squaresXMoves.push(value);
            squaresFilled++;
            console.log(squaresFilled);
            console.log(squaresXMoves);
            playerTurn = 'O'
            checkForWin();
        }
        delayAi();
    }
    // if (turn === 'O') {
    //     if (document.getElementById(value).innerHTML === 'Click') {
    //         document.getElementById(value).innerHTML = turn;
    //         squareY[value] = 'O'
    //         previousTurn = 'O'
    //         playerTurn = 'X'
    //         checkForWin();
    //     }
    // }
}


