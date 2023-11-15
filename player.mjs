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