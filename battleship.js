var Battleship = function (name, length) {
    this.length = length
    this.hits = 0
    this.name = name;
    this.isSunk = false;

    this.hit = () => {
        this.hits += 1
        this.CheckisSunk();
    }

    this.CheckisSunk = () => {
        if (this.hits >= this.length) {
            this.isSunk = true
            return this.isSunk
        }
        else {
            this.isSunk = false
            return this.isSunk
        }
    }
}

var Board = function () {
    this.length = 7;
    this.width = 7;

    this.hitlist = [];
    this.board = [];
    for (let x = 0; x < 49; x++) {
        this.board.push({
          ship: false,
          isHit: false
        });
      }
    
    this.hitlistshow = () => {
        return this.hitlist;
    }
    this.printboard = () => {
        let boardString = "";
        for (let i = 0; i < this.board.length; i++) {
            const cell = this.board[i];
            
            boardString += cell.isHit ? (cell.ship ? "X " : "N ") : (cell.ship ? "S " : "O ");           
            if ((i + 1) % 7 === 0) {
                boardString += "\n";
            }
        }
        return boardString;
    };


    this.placeShips = (x, y, ship) => {
        if (Number.isInteger(x) && Number.isInteger(y) && x < 7 && y < 7 && ship.length) {
            if (x + ship.length > 7) {
                        throw new Error('placement of ship out of bounds')
                    } 
            else {
                for (let z = x ; z < ship.length + x; z++){
                    let actualcoord = 7 * (y - 1) + z
                    this.board[actualcoord].ship = ship; // y - 1 to counter the zero-based index
                    this.board[actualcoord].isHit = false;
                }
            }
        }
        
    }

    // test code to see if the print board is working
    /* 
    this.checkShips = (x, y) => {
        if (this.board[7 * (y - 1) + x - 1].ship) {
            return true
        } else {
            return false
        }
    }
    */

    this.receiveAttack = (coords) => {
        coords = coords - 1;
        this.board[coords].isHit = true;
        if (this.board[coords].ship) {
            let shipname = this.board[coords].ship;
            shipname.hit();
            this.hitlist.push({coords: coords, isHit: true})
        } 
        else {
            this.hitlist.push({coords: coords, isHit: false})
        }
        return this.hitlist;
    }

    this.checkifallsunk = () => {
        let gameover = true;
        for (let x = 0; x < 49; x++) {
            if (this.board[x].ship && !this.board[x].ship.isSunk) {
                gameover = false;
            }
        }
        return gameover
    
    }

}

export { Battleship, Board };

const GameBoard = new Board();
//const ship1 = new Battleship('ship1', 3);
const ship2 = new Battleship('ship2', 2);
GameBoard.placeShips(1, 1, ship2)

//console.log(GameBoard.printboard())
//console.log(GameBoard.hitlist[0])

