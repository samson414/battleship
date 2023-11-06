import { Board, Battleship } from './battleship.js';

const Player = function (ComputerBoard) {

    const coordinateAttack = (x, y) => {
        let actualcoord = 7 * (y - 1) + x
        ComputerBoard.receiveAttack(actualcoord);
        ComputerBoard.printboard();
    };

    return { coordinateAttack };
};

const AI = function (playerboard) {
    let hitlist = playerboard.hitlistshow();

    const randomnumber = (num) => {
        return Math.floor(Math.random() * num);
    };

    const randommove = () => {
        let num = 1;
        //let num = randomnumber(49); // not using a zero-based index
        if (hitlist.length > 0 && hitlist[hitlist.length - 1].isHit && !hitlist[hitlist.length - 1].coords.includes(num)) {
            const hitchoices = [-1, 1]
            num = hitlist[hitlist.length - 1].coords + hitchoices[Math.random() * 2]
            playerboard.receiveAttack(num);
            return num
        }
        
        if (hitlist.some(obj => obj.coords === num)) {
            num = randomnumber(49);
            return num
            
        } else { 
            playerboard.receiveAttack(num);
            return num
        }

        // If shot hit, hit adjacent to the shot; else, hit randomly again
    };

    return { randommove };
};

export { Player, AI };

const playerBoard = new Board();
const computerBoard = new Board();

const player = Player(computerBoard);
const computer = AI(playerBoard);

// Perform coordinate attack by the player

const ship1 = new Battleship('ship1', 3);
computerBoard.placeShips(3, 3, ship1)
computerBoard.placeShips(4, 4, ship1)


playerBoard.placeShips(3, 3, ship1)
playerBoard.placeShips(4, 4, ship1)


player.coordinateAttack(2, 3, computerBoard); // x=2, y=3

// Perform random move by the AI
console.log(computer.randommove())

console.log(playerBoard.printboard())
console.log(computerBoard.printboard())

let hits = playerBoard.hitlistshow()
console.log(hits[0]);