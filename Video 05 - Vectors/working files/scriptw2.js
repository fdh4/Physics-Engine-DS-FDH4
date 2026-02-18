/* 
    2D Physics Engine from Scratch (JS) 05: Vectors
    Video 05 - Vectors
    https://www.youtube.com/watch?v=eKMe3eUpdkI&list=PLo6lBZn6hgca1T7cNZXpiq4q395ljbEI_&index=6

    This is the final code for this video
*/

const canvas = document.querySelector('canvas');
const drawA = canvas.getContext('2d');

const BALLZ = [];

// const now = new Date();
// const minutes = String(now.getMinutes()).padStart(2, '0');

let Left, Right, Up, Down = false;      // I added ' = false '
let friction = 0.1;           


//a class Vector with basic vector operations
class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(v) {
        return new Vector(this.x+v.x, this.y+v.y);
    }

    subtr(v) {
        return new Vector(this.x-v.x, this.y-v.y);
    }

    mag() {
        return Math.sqrt(this.x**2, this.y**2);
    }

    mult(n) {
        return new Vector(this.x*n, this.y*n);
    }

    drawVector(start_x, start_y, n, color){
        drawA.beginPath();
        drawA.moveTo(start_x, start_y);
        drawA.lineTo(start_x + this.x * n, start_y + this.y * n);
        drawA.strokeStyle = color;
        drawA.stroke();
        drawA.closePath();
    }
}

class Ball {
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.vel = new Vector(0,0);
        this.acc = new Vector(0,0);
        this.acceleration = 1;
        this.player = false;
        BALLZ.push(this);
    }

    drawBall(){
        drawA.beginPath();
        drawA.arc(this.x, this.y, this.r, 0, Math.PI * 2);    
        drawA.strokeStyle = "black";
        drawA.stroke();
        drawA.fillStyle = "red";
        drawA.fill();
        drawA.closePath();
    }

    display() {
        this.vel.drawVector(this.x, this.y, 10, "green");
        this.acc.drawVector(this.x, this.y, 100, "blue");
    } 
}

function keyControl(b){    
    canvas.addEventListener("keydown", function(e){
        if (e.key === "ArrowLeft"){
            Left = true;
            }
        if (e.key === "ArrowRight"){
            Right= true;
            }
        if (e.key === "ArrowUp"){
            Up= true;
            }
        if (e.key === "ArrowDown"){
            Down= true;
            }
    });

    canvas.addEventListener("keyup", function(e){
        if (e.key === "ArrowLeft"){
            Left = false;
            }
        if (e.key === "ArrowRight"){
            Right= false;
            }
        if (e.key === "ArrowUp"){
            Up= false;
            }
        if (e.key === "ArrowDown"){
            Down= false;
            }
    });

    if(Left){
        b.acc.x = -b.acceleration;
    }
    if(Right){
        b.acc.x = b.acceleration;
    }
    if(Up){
        b.acc.y = -b.acceleration;
    }
    if(Down){
        b.acc.y = b.acceleration;
    }
    if(!Left && !Right){
        b.acc.x = 0;
    }
    if(!Up && !Down){
        b.acc.y = 0;
    }


    b.vel = b.vel.add(b.acc);
    b.vel = b.vel.mult(1.0001-friction);
    b.x += b.vel.x;
    b.y += b.vel.y;
}

function mainLoop(){
    drawA.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    BALLZ.forEach((b) => {
        b.drawBall();
        if(b.player){
            keyControl(b)
        };
        b.display();
    });
    requestAnimationFrame(mainLoop);
}
$(document).ready(function()
{
    $('#title').text('Video 05 - Introducing Vectors');
    $('#html_ver').text('html ver 45');
    $('#js_ver').text('JS ver 45');
    
    let Ball1 = new Ball(200, 200, 30);
    Ball1.player = true;

    requestAnimationFrame(mainLoop);
})








