class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
        this.directions = [];
    }


    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells)
        if (newCell) {


            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 2;

            let newGrassEater = new GrassEater(newX, newY, 2)
            grassEater.push(newGrassEater)
            this.energy = 1

        }
    }



    chooseCell(ch) {
        return super.chooseCell(ch)

    }

    move() {
        this.energy--;
        if (this.energy > 0) {
            this.getNewCoordinates()
            let emptyCells = this.chooseCell(0);
            let newCell = random(emptyCells);
            if (newCell) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 2
                matrix[this.y][this.x] = 0
                this.x = newX
                this.y = newY
            }
        }
        else {
            matrix[this.y][this.x] = 0
            for (let i in grassEater) {
                if (this.x == grassEater[i].x && this.y == grassEater[i].y) {
                    grassEater.splice(i, 1)
                }
            }
        }


    }

    eat() {
        let emptyCells = this.chooseCell(1)
        if (this.chooseCell(1).length > 0) {
            this.energy++
            if (this.energy < 12) {
                let newCell = random(emptyCells)
                let newX = newCell[0]
                let newY = newCell[1]
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                matrix[newY][newX] = 2
                matrix[this.y][this.x] = 0
                this.x = newX
                this.y = newY
            }
            else {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }

}
