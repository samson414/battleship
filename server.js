// when a button is pressed in index.html
// load the boards: both the player and the AI
// everytime someone shoots, load the board again
// have default ships

import { Player, AI } from './player.js'
import { Battleship, Board } from './battleship.js'

const playerBoard = new Board();
const computerBoard = new Board();

const player = Player(computerBoard);
const computer = AI(playerBoard);

export { playerBoard, player };