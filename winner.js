let wonPlayer = undefined;

function checkWin(board, player, curPos) {
    //console.log(player);
    // console.log(board);
    // console.log(document.getElementById('00').innerText);
    //console.log(curPos);

    var i = parseInt(curPos[0], 10);
    var j = parseInt(curPos[1], 10);

    let direction = ['r', 'rd', 'd', 'dl', 'l', 'lu', 'u', 'ur'];

    for (let p = 0; p < direction.length; p++) {
        let change = [];
        element = direction[p];
        switch (element) {
            case 'r': change = ['i+a', 'j']; break;
            case 'rd': change = ['i+a', 'j+a']; break;
            case 'd': change = ['i', 'j+a']; break;
            case 'dl': change = ['i-a', 'j+a']; break;
            case 'l': change = ['i-a', 'j']; break;
            case 'lu': change = ['i-a', 'j-a']; break;
            case 'u': change = ['i', 'j-a']; break;
            case 'ur': change = ['i+a', 'j-a']; break;
        }

        let a = 0, arr = [];
        for (a = 0; a <= 3; a++) {
            if (eval(change[0]) < 0 || eval(change[0]) > 6 || eval(change[1]) < 0 || eval(change[1]) > 6) {
                break;
            }

            //console.log( eval(change[0])+''+eval(change[1]) );

            if (document.getElementById(eval(change[0]) + '' + eval(change[1])).innerText != player) {
                break;
            }

            arr.push([eval(change[0]), eval(change[1])]);
        }

        if (a == 4) {
            
            if(player === 'O') wonPlayer = 'PLAYER1';
            else if(player === 'X') wonPlayer = 'PLAYER2';

            for (let i = 0; i < arr.length; i++) {
                board[arr[i][0]][arr[i][1]].style.backgroundColor = "blue";
            }
            console.log(arr);
            return true;
        }
    }

    return false;
}