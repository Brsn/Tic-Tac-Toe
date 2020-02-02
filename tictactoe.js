/* TicTacToe 
  Author: Bronson Brown
  Tech Used: HTML, CSS, JavaScript, Bootstrap
  Summary: TicTacToe with an Unbeatable AI 
*/

let squaresFilled = 0;
let playerTurn = 'X';
let prevTurn = 'O';
let aiPick = 0;
let aiXPick = 0;
let aiYPick = 0;
let gameOver = false;
var won = false;
let bestYMove = 0;
let bestXMove = 0;

//set the local storage to a variable so we can increment also needed to parse strings.
let xWon = parseInt(localStorage.getItem("X"));
let oWon = parseInt(localStorage.getItem("O"));
let draw = parseInt(localStorage.getItem("draw"));

let squareX = {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',
}
let squareY = {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',
}


document.getElementById("draw").innerHTML = localStorage.getItem("draw");
document.getElementById("computerWins").innerHTML = localStorage.getItem("O");
document.getElementById("playerWins").innerHTML = localStorage.getItem("X");

console.log(localStorage);



function checkAheadX() {
    bestXMove = 0;
    //bestXMove will equal a game winning move
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById(i).innerHTML === 'Click') {
            squareX[i] = 'X';
            //Test to see if SquareX object literal has numerical value already
            if (checkForWin()) {
                bestXMove = i;
                //We found a best move, let's store it.
                squareX[i] = '';
                //Here we reset SquareX object literal
                gameOver = false;
            }
            //Here we reset SquareX object literal
            squareX[i] = '';
            // squareY[aiPick] = 'O' 
        }
    }
    aiXPick = bestXMove;
    //aiPick is now the best move(So we can use it)
    console.log("bestXMove", bestXMove)
    console.log(squareY)
    console.log(squareX)
}
function checkAheadY(...squareY) {
    let tempSquareY = squareY;

    bestYMove = 0;
    let loop = 0;
    generatePick();
    while (loop === 0) {
        if (tempSquareY[aiPick] !== 'Click') {
            generatePick();
        }
        if (document.getElementById(aiPick).innerHTML === 'Click' && checkForWin()) {
            tempSquareY[aiPick] = 'O';
            //Test to see if SquareY object literal has numerical value already
            bestYMove = aiYPick;
            aiYPick = bestYMove;
            //We found a best move, let's store it.
            //squareY[i] = '';
            //Here we reset squareY object literal
            gameOver = false;
        }
        else {
            loop++;
            //  tempSquareY[aiPick] = '';
        }
        console.log(squareY)
        console.log(squareX)
        console.log("bestYMove", bestYMove)
    }
    console.log("bestYMove", bestYMove)
}







function aiMove() {

    let move = 0;
    let turn = playerTurn;
    console.log(turn);
    console.log(aiPick, "From beginning");
    while (playerTurn != 'X' && squaresFilled <= 8) {
        checkAheadY();

        console.log(squareY, "from the Y check aheads")
        //if we find a Y winning value, lets use it  
        checkAheadX();
        //if we find an X winning value, lets use it
        console.log(squareY, "from the X check aheads")
        //Make sure it's O's turn and no infinite loop created by going if more than 8 squares
        if (bestYMove > 0 && move === 0) {
            aiYPick = bestYMove;
            console.log(aiYPick, "From best move from Y");
            if (document.getElementById(aiYPick).innerHTML === 'Click') {
                document.getElementById(aiYPick).innerHTML = 'O';
                squareY[aiYPick] = 'O';
                squaresFilled++;
                prevTurn = 'O';
                playerTurn = 'X'
                move++;
                console.log("Squares filled", squaresFilled);
                winner(checkForWin());
            }
            console.log(aiPick);
        }
        if (bestXMove > 0 && move === 0) {
            aiXPick = bestXMove;
            console.log(aiXPick, "From best move from X");
            if (document.getElementById(aiXPick).innerHTML === 'Click') {
                document.getElementById(aiXPick).innerHTML = 'O';
                squareY[aiXPick] = 'O';
                squaresFilled++;
                prevTurn = 'O';
                playerTurn = 'X'
                move++;
                console.log("Squares filled", squaresFilled);
                winner(checkForWin());
            }
        }

        //if we don't have a game winning pick, let's go back to random generating
        else if (bestYMove === 0 && bestXMove === 0 && move === 0) {
            generatePick()
            console.log(aiPick, "From generate the pick")
            //Ai has a random move until it's possible to win at 3+ turns
            if (document.getElementById(aiPick).innerHTML === 'Click') {
                document.getElementById(aiPick).innerHTML = 'O';
                squareY[aiPick] = 'O';
                squaresFilled++;
                prevTurn = 'O';
                playerTurn = 'X'
                move++;
                console.log("Squares filled", squaresFilled);
                winner(checkForWin());
            }
        }
        else {
            //if we find an X winning value, lets use it
            generatePick();
            console.log(aiPick, "from the final else statement")
            console.log(turn);
        }
    }
    //reset the values at the end
    bestYMove = 0;
    bestXMove = 0;
    console.log(squareY)
    console.log(squareX)
}

function generatePick() {
    //Randomly generates the AI's pick between 1-9
    aiPick = Math.floor((Math.random() * 9) + 1);
}

function checkForWin() {
    /*Sixteen possible ways to win. Also Holy if statements. We have two object literals that store 1-9 x or o values. 
    Once three in a row feel in one of those objects we have a winner. Also page will refresh upon winning.*/

    if ((squareX[1] === 'X' && squareX[2] === 'X' && squareX[3] === 'X') || (squareY[1] === 'O' && squareY[2] === 'O' && squareY[3] === 'O')) {
        gameOver = true;
        return true;

    }
    if ((squareX[4] === 'X' && squareX[5] === 'X' && squareX[6] === 'X') || (squareY[4] === 'O' && squareY[5] === 'O' && squareY[6] === 'O')) {
        gameOver = true;
        return true;
    }
    if ((squareX[7] === 'X' && squareX[8] === 'X' && squareX[9] === 'X') || (squareY[7] === 'O' && squareY[8] === 'O' && squareY[9] === 'O')) {
        gameOver = true;
        return true;
    }
    if ((squareX[1] === 'X' && squareX[4] === 'X' && squareX[7] === 'X') || (squareY[1] === 'O' && squareY[4] === 'O' && squareY[7] === 'O')) {
        gameOver = true;
        return true;
    }
    if ((squareX[2] === 'X' && squareX[5] === 'X' && squareX[8] === 'X') || (squareY[2] === 'O' && squareY[5] === 'O' && squareY[8] === 'O')) {
        gameOver = true;
        return true;
    }
    if ((squareX[3] === 'X' && squareX[6] === 'X' && squareX[9] === 'X') || (squareY[3] === 'O' && squareY[6] === 'O' && squareY[9] === 'O')) {
        gameOver = true;
        return true;
    }
    if ((squareX[1] === 'X' && squareX[5] === 'X' && squareX[9] === 'X') || (squareY[1] === 'O' && squareY[5] === 'O' && squareY[9] === 'O')) {
        gameOver = true;
        return true;
    }
    if ((squareX[3] === 'X' && squareX[5] === 'X' && squareX[7] === 'X') || (squareY[3] === 'O' && squareY[5] === 'O' && squareY[7] === 'O')) {
        gameOver = true;
        return true;


    }

    else {
        return false;
    }

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
        squareX[value] = 'X';
        if (document.getElementById(value).innerHTML === 'Click') {
            document.getElementById(value).innerHTML = 'X';
            squaresFilled++;
            console.log(squaresFilled);
            playerTurn = 'O';
            prevTurn = 'X';
            console.log(squareY)
            console.log(squareX)
            winner(checkForWin());
            console.log("Squares filled", squaresFilled);
        }
        delayAi();
    }
}

function winner() {
    if (gameOver === true) {
        alert(prevTurn + " Is The Winner!")
        if (turn = 'X') {
            xWon++;
            localStorage.setItem('X', xWon);
            window.location.reload();
        }
        if (turn = 'O') {
            oWon++;
            localStorage.setItem('O', oWon);
            window.location.reload();
        }
        else if (squaresFilled === 9) {
            alert("Draw")
            draw++;
            localStorage.setItem('draw', draw);
            window.location.reload();

        }
    }
}

