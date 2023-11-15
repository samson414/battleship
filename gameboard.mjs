import { playerBoard, computerBoard, player} from './server.js'

const PlayerGameboard = document.getElementById("playergameboard");
const ComputerGameBoard = document.getElementById("computergameboard");
function printplayerboard() {
    const table = document.createElement("table");

    for (let y = 0; y < 7; y++) {
        let tablerow = document.createElement('tr')
        for (let x = 0; x < 7; x++) {
            let coords = 7 * y + x
            let tabledata = document.createElement('td')
            if (playerBoard.board[coords].isHit && playerBoard.board[coords].ship) {
                tabledata.classList.add("isHit")
                tabledata.innerHTML = 'X'
            } else if (playerBoard.board[coords].ship) {
                tabledata.classList.add("ship")
                tabledata.innerHTML = 'S'
            } else if (playerBoard.board[coords].isHit) {
                tabledata.classList.add('nothit')
                tabledata.classList.add('notship')
                tabledata.innerHTML = 'N'
            } else {
                tabledata.innerHTML = '0'
            }
            tablerow.appendChild(tabledata);
        }
        table.appendChild(tablerow);
    }
    PlayerGameboard.appendChild(table)
}

function printcomputerboard() {
    const table = document.createElement("table");

    for (let y = 0; y < 7; y++) {
        let tablerow = document.createElement('tr')
        for (let x = 0; x < 7; x++) {
            let coords = 7 * y + x
            let tabledata = document.createElement('td')
            if (computerBoard.board[coords].isHit && computerBoard.board[coords].ship) {
                tabledata.classList.add("isHit")
                tabledata.innerHTML = 'X'
            } else if (computerBoard.board[coords].ship) {
                tabledata.classList.add("ship")
                tabledata.innerHTML = 'S'
            } else if (computerBoard.board[coords].isHit) {
                tabledata.classList.add('nothit')
                tabledata.classList.add('notship')
                tabledata.innerHTML = 'N'
            } else {
                tabledata.innerHTML = '0'
            }
            tablerow.appendChild(tabledata);
        }
        table.appendChild(tablerow);
    }
    ComputerGameBoard.appendChild(table)
}

export { printcomputerboard, printplayerboard };