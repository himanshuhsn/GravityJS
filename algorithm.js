let wonPlayer = undefined;

function checkWin(board, player, curPos) {
    //console.log(player);
    // console.log(board);
    // console.log(document.getElementById('00').innerText);
    //console.log(curPos);

    function dirArr(element) {
        let change = [];
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
        return change;
    }

    var i = parseInt(curPos[0], 10);
    var j = parseInt(curPos[1], 10);

    let direction = ['r', 'rd', 'd', 'dl', 'l', 'lu', 'u', 'ur'];

    for (let p = 0; p < direction.length / 2; p++) {

        let change;
        let a = 1, arr = [[i,j]], flag1 = true, flag2 = true, count = 0;
        for (a = 1; a <= 3; a++) {

            change = dirArr(direction[p]);
            if (eval(change[0]) >= 0 && eval(change[0]) <= 6 && eval(change[1]) >= 0 && eval(change[1]) <= 6) {
                if (flag1) {
                    if (board[eval(change[0])][eval(change[1])].innerText === player) {
                        arr.push([eval(change[0]), eval(change[1])]);
                        count++;
                    }
                    else flag1 = false;
                }
            }

            change = dirArr(direction[p + 4]);
            if (eval(change[0]) >= 0 && eval(change[0]) <= 6 && eval(change[1]) >= 0 && eval(change[1]) <= 6) {
                if (flag2) {
                    if (board[eval(change[0])][eval(change[1])].innerText === player) {
                        arr.push([eval(change[0]), eval(change[1])]);
                        count++;
                    }
                    else flag2 = false;
                }
            }
            console.log(count);
        }

        if (count >= 3) {

            if (player === 'O') wonPlayer = 'PLAYER1';
            else if (player === 'X') wonPlayer = 'PLAYER2';

            for (let i = 0; i < arr.length; i++) {
                board[arr[i][0]][arr[i][1]].style.backgroundColor = "red";
            }
            console.log(arr);
            return true;
        }
    }

    return false;
}