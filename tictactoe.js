/* TicTacToe 
  Author: Bronson Brown
  Tech Used: HTML, CSS, JavaScript, Bootstrap
  Summary: TicTacToe with an Unbeatable AI 
*/

let squaresFilled = 0;
let playerTurn = 'X';
let prevTurn = 'O';
let aiPick = 0;
let count = 1;
let gameOver = false;

//set the local storage to a variable so we can increment also needed to parse strings.
let xWon = parseInt(localStorage.getItem("X"));
let aiWon = parseInt(localStorage.getItem("Y"));
let draw = parseInt(localStorage.getItem("draw"));

let squareX = {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',
}
let squareY = {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',
}


document.getElementById("draw").innerHTML = localStorage.getItem("draw");
document.getElementById("computerWins").innerHTML = localStorage.getItem("Y");
document.getElementById("playerWins").innerHTML = localStorage.getItem("X");

console.log(localStorage);



function checkaheadX() {
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById(i).innerHTML === 'Click') {
            squareX[i] = 'X';
            console.log(squareX)
            console.log(squareY)
            //Test to see if SquareX object literal has numerical value already
            if (checkForWin()) {
                //Here we reset SquareX object literal
                squareX[i] = '';
                console.log(squareX, "Checked for win")
                console.log(squareY, "check for win")
                //If player 'X' could win we set AI pick equal to X's winning pick
                aiPick = i;
                squareY[aiPick] = 'O'
                squaresFilled++;
                //We found the best value, let's end the loop early
                i = 9;

            }
            //Here we reset SquareX object literal
            squareX[i] = '';
            squareY[aiPick] = 'O'
            gameOver = false;

            console.log(squareX)
            console.log(squareY)
        }

    }


}

function checkaheadY() {

}

function aiMove() {
    let turn = playerTurn;
    while (playerTurn != 'X') {
        //Ai has a random move until it's possible to win at 3+ turns
        if (squaresFilled >= 3) {
            checkaheadX();
            document.getElementById(aiPick).innerHTML = turn;
            squaresFilled++;
            playerTurn = 'X';
            prevTurn = 'O';
            checkForWin();
        }
        else if (squareX[aiPick] === '' && document.getElementById(aiPick).innerHTML === 'Click') {
            //if the spot isn't already taken by player X we can use this
            document.getElementById(aiPick).innerHTML = turn;
            //places the ai pick
            squareY[aiPick] = 'O';
            //keeps track of the ai pick
            squaresFilled++;
            console.log(squaresFilled);
            playerTurn = 'X';
            prevTurn = 'O';
            //Player X's turn again, but let's see if we won
            checkForWin();
        }
        else {
            //spots already taken by player X. So let's generate a new option
            generatePick();

        }
    }
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
            document.getElementById(value).innerHTML = turn;
            squaresFilled++;
            console.log(squaresFilled);
            playerTurn = 'O';
            prevTurn = 'X';
            checkForWin();
            winner()
        }
        delayAi();
    }
}

function winner() {
    if (gameOver === true) {
        alert(prevTurn + " Is The Winner!")
        if (prevTurn = 'X') {
            xWon++;
            localStorage.setItem('X', xWon);

        }
        else {
            aiWon++;
            localStorage.setItem('Y', aiWon);
        }
        window.location.reload();
    }
    if (squaresFilled > 9) {
        alert("Draw")
        draw++;
        localStorage.setItem('draw', draw);
        window.location.reload();

    }
}



