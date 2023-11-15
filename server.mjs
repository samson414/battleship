// when a button is pressed in index.html
// load the boards: both the player and the AI
// everytime someone shoots, load the board again
// have default ships

import { Player, AI } from './player.js'
import { Battleship, Board } from './battleship.js'
import { printcomputerboard, printplayerboard } from './gameboard.js'


const playerBoard = new Board();
const computerBoard = new Board();

const player = new Player(computerBoard);
const computer = new AI(playerBoard);
function gamestarter() {
    
    const Ship1_1 = new Battleship('ship1_1', 1)
    const Ship1_2 = new Battleship('ship1_2', 1)
    const Ship1_3 = new Battleship('ship1_3', 1)

    const Ship2_1 = new Battleship('ship2_1', 2)
    const Ship2_2 = new Battleship('ship2_2', 2)

    const Ship3_1 = new Battleship('ship3_1', 3)
    const Ship3_2 = new Battleship('ship3_2', 3)

    playerBoard.placeShips(3, 3, Ship3_1)
    playerBoard.placeShips(1, 2, Ship3_2)
    playerBoard.placeShips(1, 7, Ship1_1)
    playerBoard.placeShips(4, 5, Ship1_2)
    playerBoard.placeShips(5, 4, Ship1_3)
    playerBoard.placeShips(2, 6, Ship2_1)
    playerBoard.placeShips(5, 2, Ship2_2)

    computerBoard.placeShips(3, 3, Ship3_1)
    computerBoard.placeShips(1, 2, Ship3_2)
    computerBoard.placeShips(1, 7, Ship1_1)
    computerBoard.placeShips(4, 5, Ship1_2)
    computerBoard.placeShips(5, 4, Ship1_3)
    computerBoard.placeShips(2, 6, Ship2_1)
    computerBoard.placeShips(5, 2, Ship2_2)

    printcomputerboard();
    printplayerboard();
}

function restartgame() {
    gamestarter();
}

function test (num1, num2) {
    return num1 * num2
}

const startgamebutton = document.getElementById('gamestarter');
startgamebutton.addEventListener('click', () => {test(3, 4)})

console.log(test(3,4));


export { playerBoard, computerBoard , player, computer };
