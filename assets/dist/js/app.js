
const canvas = document.getElementById("canvas");
const sizeNum = document.querySelector("#sizeNum");
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const colorPalette = document.querySelector("#color");


const ctx = canvas.getContext("2d");

let color = colorPalette.value;
let size = sizeNum.textContent
let isPressed = false;
let x;
let y;

colorPalette.addEventListener("input", updateFirst =>{
    color = colorPalette.value;
  })


console.log(color);
decreaseBtn.addEventListener('click',e=>{
    sizeNum.textContent--
    size = sizeNum.textContent})
    increaseBtn.addEventListener('click',e=>{
        sizeNum.textContent++ 
        size = sizeNum.textContent})
function decreaseSize(){
    sizeNum.textContent--

}
function increaseSize(){
 sizeNum.textContent++ 
}
console.log(size);
canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    createCircle(x2, y2);
    createLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function createCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle
  ctx.fillStyle = color;
  ctx.fill();
}

function createLine(x1, y1, x2, y2) {
  ctx.beginPath(); // Start a new path
  ctx.moveTo(x1, y1); // Move the pen to (30, 50)
  ctx.lineTo(x2, y2); // Draw a line to (150, 100)
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke(); // Draw the line
}
function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
