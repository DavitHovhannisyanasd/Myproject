// let LivingCreature = require("./LivingCraeture")
let socket = io()

// let matrix = []
// let grassArr = []
// let grassEater = []
// let predatorArr = []
// let rockArr = []
// let n = 40
// let m = 50
let side = 40;

let img;


function setup() {
    // for (let i = 0; i < n; i++) {
    //     matrix[i] = []
    //     for (let j = 0; j < m; j++) {
    //         let numbers = random([1, 0, 2, 3, 4])
    //         matrix[i][j] = numbers
    //     }
    // }

    frameRate(10);
    createCanvas(2000, 1000);
    background('#acacac');

    let ind = 1

    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix[i].length; j++) {
    //         if (matrix[i][j] == 1) {
    //             if (grassArr.length < 500) {
    //                 grassArr.push(new Grass(j, i, ind))

    //             } else {
    //                 matrix[i][j] = 0
    //             }
    //         }
    //         else if (matrix[i][j] == 2) {
    //             if (grassEater.length < 25) {
    //                 grassEater.push(new GrassEater(j, i, ind))
    //             } else {
    //                 matrix[i][j] = 0
    //             }
    //         }
    //         else if (matrix[i][j] == 3) {
    //             if (predatorArr.length < 10) {
    //                 predatorArr.push(new Predator(j, i, ind))
    //             } else {
    //                 matrix[i][j] = 0
    //             }
    //         }
    //     }
    // }
}


function update(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black")
                rect(x * side, y * side, side, side);
            }

            text(x + " " + y, x * side + side / 2, y * side + side / 2)
        }
    }

    // for (let i in grassArr) {
    //     grassArr[i].mul()
    // }
    // for (let i in grassEater) {
    //     grassEater[i].eat()
    // }
    // for (let i in predatorArr) {
    //     predatorArr[i].eat()
    // }
    // if (mouseIsPressed) {
    //     fill(0);
    //   } else {
    //     fill(255);
    //   }
    //   ellipse(mouseX, mouseY, 80, 80);
    // }
}
socket.on('send matrix', update)