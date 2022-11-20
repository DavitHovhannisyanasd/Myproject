let LivingCreature = require("./LivingCraeture")

module.exports = class Predator extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.time = 10;
        this.energy = 3;
    }

    chooseCell(ch) {
        return super.chooseCell(ch)
    }
    move() {
        this.getNewCoordinates();
        this.energy--;
        if (this.energy > 0) {
            let emptyCells = this.chooseCell(0).concat(this.chooseCell(1));
            let newCell = random(emptyCells);
            if (newCell) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 3;
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
            }
        }
        else {
            matrix[this.y][this.x] = 0;
            for (var i in predatorArr) {
                if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    mul() {
        this.getNewCoordinates();
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 3;
            let newPredator = new Predator(newX, newY, 2);
            predatorArr.push(newPredator);
            this.energy = 2;
        }
    }
    eat() {
        this.getNewCoordinates();
        if (this.time > 0 && this.chooseCell(2).length == 0) {
            this.time--;
        }
        else {
            let emptyCells = this.chooseCell(2);
            if (this.chooseCell(2).length > 0) {
                this.energy++
                this.time = 10;
                if (this.energy < 4) {
                    let newCell = random(emptyCells);
                    let newX = newCell[0];
                    let newY = newCell[1];
                    for (var i in grassEater) {
                        if (newX == grassEater[i].x && newY == grassEater[i].y) {
                            grassEater.splice(i, 1);
                            break;
                        }
                    }
                    matrix[newY][newX] = 3;
                    matrix[this.y][this.x] = 0;
                    this.x = newX;
                    this.y = newY;
                }
                else {
                    this.mul();
                }
            }
            else {
                this.move();
            }
        }
    }
}