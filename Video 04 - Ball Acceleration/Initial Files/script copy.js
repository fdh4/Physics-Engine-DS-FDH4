//
/*    2D Physics Engine from Scratch (JS) 04: Ball Acceleration
    04: Ball Acceleration
    https://www.youtube.com/watch?v=eKMe3eUpdkI&list=PLo6lBZn6hgca1T7cNZXpiq4q395ljbEI_&index=5

    This is the initial code for this video */

const canvas = document.querySelector("canvas");
const drawA = canvas.getContext("2d");

const BALLZ = [];

let Left, Right, Up, Down = false;               // I added ' = false '

class Ball {
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        BALLZ.push(this);
        this.player = false;
    }

    drawBall(){
    drawA.beginPath();
    drawA.arc(this.x, this.y, this.r, 0, Math.PI * 2);    
    drawA.strokeStyle = "black";
    drawA.stroke();
    drawA.fillStyle = "red";
    drawA.fill();
    }
}

function keyControl(b){    
    canvas.addEventListener("keydown", function(e)
        {
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

    if(Left){b.x--;}
    if(Right){b.x++;}
    if(Up){b.y--;}
    if(Down){b.y++;}

}


function mainLoop(){
    drawA.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    //keyControl(Ball1)
    BALLZ.forEach((b) => {
        b.drawBall()
        if(b.player){keyControl(b)};
        });
    requestAnimationFrame(mainLoop);
}

let Ball1 = new Ball(200,200,30);
let Ball2 = new Ball(300,300,10);

Ball1.player = true
Ball2.player = true

requestAnimationFrame(mainLoop);










