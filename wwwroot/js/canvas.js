var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var sizeH;
var sizeW;
var scale;
drawCanvas();
window.addEventListener("resize", (event) => {
    drawCanvas();
});
function drawCanvas() {
    sizeW = window.innerWidth;
    sizeH = window.innerHeight;
    canvas.style.width = sizeW + "px";
    canvas.style.height = sizeH + "px";
    scale = window.devicePixelRatio;

    canvas.width = sizeW * scale;
    canvas.height = sizeH * scale;
}


var x = canvas.width / 2;
var y = canvas.height / 2;
// console.log(x, y);
function drawHex(ctx, xCoord, yCoord, sideSize, line, color) {
    ctx.beginPath();
    ctx.moveTo(xCoord + sideSize * Math.cos(0), yCoord + sideSize * Math.sin(0));
    for (var i = 0; i < 8; i++) {
        ctx.lineTo(xCoord + sideSize * Math.cos(i * 2 * Math.PI / 6), yCoord + sideSize * Math.sin(i * 2 * Math.PI / 6));
    }
    ctx.lineWidth = line;
    ctx.strokeStyle = color;
    ctx.stroke();
}

canvas.addEventListener("mousemove", (e) => {
    var rect = canvas.getBoundingClientRect();
    // console.log("I'm here")
    var x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
    var y = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
    drawHexi(x,y);
});
canvas.addEventListener("mousedown", onmousedown, false);
function onmousedown(e) {
    move();
}

var FPS = 60;
init();
function init() {
    createTrail();
    setInterval(loop, 1000 / FPS);
}
var hexes = [];
function drawHexi(areaX, areaY) {
    // console.log("I'm here too");
    var plusX = areaX + 75;
    var plusY = areaY + 75;
    var minusX = areaX - 75;
    var minusY = areaY - 75;
    for(var y = 0; y < 2; y++){
        var rangeX = Math.random() * (plusX - minusX) + minusX;
        var rangeY = Math.random() * (plusY - minusY) + minusY;
        // console.log(rangeX, rangeY);
        var coord = [];
        coord.push(rangeX);
        coord.push(rangeY);
        let hex = drawHex(ctx, rangeX, rangeY, 5, 2, '#3e75ee');
        // console.log("this is a hex", hex);
    }
    // for(var j = 0; j < 10000; j+=5){
    //     setInterval(drawHex(ctx,rangeX + j, rangeY + j, 10,2,'green'), .5);
    // }
    return coord;
}
function move(){
    var hexMove = drawHexi();
    var moveX = hexMove[0];
    var moveY = hexMove[1];
    console.log("I'm working");
    drawHex(ctx, moveX, moveY, 10, 2, 'green');
}

function createTrail() {
    dot = {
        x: 100,
        y: 100,
        speed: 3,
        direction: Math.PI * 2 * Math.random()
    }
}


drawnToBottom = false;
var columns;
var drops;
var drawnToBottom;
function loop() {

    // Draw over the whole canvas to create the trail effect
    ctx.fillStyle = 'rgba(0, 0, 40, .1)';
    ctx.fillRect(0, 0, sizeW, sizeH);
    hexes.splice(0,1);
    // for(var y = 0; y < 3; y++){
    //     move();
    // }

}
// interval();
