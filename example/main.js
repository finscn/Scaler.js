
// 设计尺寸
var designWidth = 600;
var designHeight = 800;

var FPS = 30;
var canvas, context;

var scaler = new Scaler({
    width: designWidth,
    height: designHeight,
    scaleMode: Scaler.ASPECT_FIT
});

// scaler.scaleMode = Scaler.CENTER;
// scaler.scaleMode = Scaler.ASPECT_FILL;
// scaler.scaleMode = Scaler.ASPECT_FIT;
// scaler.scaleMode = Scaler.WIDTH_FIT;
// scaler.scaleMode = Scaler.HEIGHT_FIT;
// scaler.scaleMode = Scaler.SCALE_FIT;


window.onload = function() {
    start();
}
window.onresize = function() {
    resize();
}
window.onorientationchange = function() {
    resize();
}


function start() {
    canvas = document.getElementById("canvas");
    resize();
    context = canvas.getContext("2d");
    setInterval(function() {
        render();
    }, 1000 / FPS >> 0);
}

function resize() {
    scaler.setScreenSize(window.innerWidth, window.innerHeight);
    scaler.update();
    scaler.resizeCanvas(canvas);
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.save();
    context.translate(scaler.offsetX, scaler.offsetY);
    context.fillStyle = "#2070c0"
    context.fillRect(0, 0, designWidth, designHeight);
    context.fillStyle = "#f3f3f3";
    context.beginPath();
    context.arc(designWidth / 2, designHeight / 2, designWidth / 3, 0, Math.PI * 2);
    context.fill();
    context.closePath();
    context.restore();
}

function changeMode(event){
    var target=event.target;
    var value=target.textContent;
    scaler.setScaleMode(Scaler[value]);
    scaler.resizeCanvas(canvas);
}

