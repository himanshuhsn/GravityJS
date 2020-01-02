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
            origBoard[i][j].addEventListener('click', turnClick, false);
        }
    }
}

//process after clicking a cell
function turnClick(square) {
    turn(square.target.id, player1);
}

function turn(squareId, player) {

    let r = parseInt(squareId[0], 10); //r for row
    let c = parseInt(squareId[1], 10); // c for column

    //console.log(squareId);
    //console.log(origBoard[][0]);

    if (r == 6 || origBoard[r + 1][c].innerText != '') {
        document.getElementById(squareId).innerText = player;
    }
    else{
        console.log('bad place');
    }

    let gameWon = checkWin(origBoard, player, squareId);

    if(gameWon) console.log('Game Won');
}