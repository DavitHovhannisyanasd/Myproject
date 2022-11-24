var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);



app.use(express.static("."));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);
// io.on('connection', function (socket) {
//     for(var i in messages) {
//       socket.emit("display message", messages[i]);
//     }
//     socket.on("send message", function (data) {
//         messages.push(data);
//         io.sockets.emit("display message", data);
//     });
//  });
 

let matrix = []
let grassArr = []
let grassEater = []
let predatorArr = []
let rockArr = []
let n = 40
let m = 50



// let side = 40;


const Grass = require("./grass")
for (let i = 0; i < n; i++) {
    matrix[i] = []
    for (let j = 0; j < m; j++) {
        let numbers = 1
        matrix[i][j] = numbers
    }
}

 
function createObj(matrix){
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                if (grassArr.length < 500) {
                    grassArr.push(new Grass(j, i))

                } else {
                    matrix[i][j] = 0
                }
            }
            else if (matrix[i][j] == 2) {
                if (grassEater.length < 25) {
                    grassEater.push(new GrassEater(j, i))
                } else {
                    matrix[i][j] = 0
                }
            }
            else if (matrix[i][j] == 3) {
                if (predatorArr.length < 10) {
                    predatorArr.push(new Predator(j, i))
                } else {
                    matrix[i][j] = 0
                }
            }
        }
    }
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEater) {
        grassEater[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }

}


io.on('connection', function (socket) {
    createObj(matrix)
    io.sockets.emit("send matrix", data);
 });
 