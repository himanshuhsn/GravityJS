var origBoard = [];

//Assuming player 1 chhoses 0
const player1 = 'O';
const player2 = 'X';

//selecting all the cells
for (let i = 0; i < 7; i++) {
    const row = document.querySelectorAll(`.cell${i}`);
    origBoard.push(row);
}

//start game
function startGame() {
    document.querySelector(".endgame").style.diaplay = "none";
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            origBoard[i][j].innerText = '';
            origBoard[i][j].style.removeProperty('background-color');
            origBoard[i][j].addEventListener('click', turnClick, false);
        }
    }
    turnChecker = 0;
}

//process after clicking a cell
var turnChecker = 0;
function turnClick(square) {
    if (turnChecker % 2 == 0) {
        turn(square.target.id, player1);
        if (!gameWon) console.log(`Player${turnChecker % 2 + 1} turn`);
    }
    else if (turnChecker % 2 == 1) {
        turn(square.target.id, player2);
        if (!gameWon) console.log(`Player${turnChecker % 2 + 1} turn`);
    }
}

let gameWon = false;
function turn(squareId, player) {

    let r = parseInt(squareId[0], 10); //r for row
    let c = parseInt(squareId[1], 10); // c for column

    //console.log(squareId);
    //console.log(origBoard[][0]);

    if ( r == 6 || origBoard[r + 1][c].innerText != '') {
        if (origBoard[r][c].innerText == '') {
            document.getElementById(squareId).innerText = player;
            turnChecker++;
        }
        else if(origBoard[r][c].innerText != '') console.log('Place already occupied');
    }
    else {
        console.log('bad place');
    }

    gameWon = checkWin(origBoard, player, squareId);

    if (gameWon) {
        console.log(`${wonPlayer} Won`);
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                origBoard[i][j].removeEventListener('click', turnClick, false);
            }
        }
    }
}

startGame();