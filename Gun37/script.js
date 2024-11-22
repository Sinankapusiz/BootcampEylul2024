const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const dinoImage = new Image();
dinoImage.src = "dino.png";
let basladi = false;

let dw = 22, dh = 24,
    dx = 0, dy = canvas.height / 2 - dh;

function baslat(){
    basladi = true;
    requestAnimationFrame(ciz);
}

function dinoCiz() {
    ctx.drawImage(dinoImage, dx, dy, dw, dh);
}


function zeminCiz() {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#535353";
    ctx.stroke();
}

zeminCiz();
dinoImage.onload = function () {
    dinoCiz();
}