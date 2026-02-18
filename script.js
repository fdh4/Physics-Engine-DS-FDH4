/*
    2D Physics Engine from Scratch (JS)
    Video 07 - Ball Ball Collisions
    https://www.youtube.com/watch?v=Bd-8Vk8krog
    This is the final code for video 07
*/
const canvas = document.querySelector("canvas");
const drawA = canvas.getContext("2d");

const BALLZ = [];

let Left = false, Right = false, Up = false, Down = false;

let friction = 0.1;

class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(v){
        return new Vector(this.x+v.x, this.y+v.y);
    }

    subtr(v){
        return new Vector(this.x-v.x, this.y-v.y);
    }

    mag(){
        return Math.sqrt(this.x**2 + this.y**2)
    }

    mult(n){
        return new Vector(this.x*n, this.y*n);
    }

    normalVector(){
        return new Vector(-this.y, this.x).unitizeVector();
    }

    unitizeVector(){
        if(this.mag() === 0) {return new Vector(0,0);}
        else{return new Vector(this.x/this.mag(), this.y/this.mag());}       
    }

    static dotProduct(v1,v2){
        return v1.x*v2.x + v1.y*v2.y;
    }

    drawVector(start_x, start_y, n, color){
        drawA.beginPath();
        drawA.moveTo(start_x, start_y);
        drawA.lineTo(start_x + this.x*n , start_y + this.y*n );     //  I used 50 instead of 100 here
        drawA.strokeStyle = color;
        drawA.stroke();
        drawA.closePath();
    }
}

//--- code below added from coPilot code: ----------------------------- // |

class InputHandler {                                                    // |
    constructor() {                                                     // |
        this.Left  = false;                                             // |
        this.Right = false;                                             // |
        this.Up    = false;                                             // |
        this.Down  = false;                                             // |
                                                                        // |
        document.addEventListener("keydown", (e) => this.keyDown(e));   // |
        document.addEventListener("keyup",   (e) => this.keyUp(e));     // |
    }                                                                   // |
                                                                        // |         
    keyDown(e) {                                                        // |
        if (e.key === "ArrowLeft")  this.Left  = true;                  // |
        if (e.key === "ArrowRight") this.Right = true;                  // |
        if (e.key === "ArrowUp")    this.Up    = true;                  // |
        if (e.key === "ArrowDown")  this.Down  = true;                  // |
    }                                                                   // |
                                                                        // |
    keyUp(e) {                                                          // |
        if (e.key === "ArrowLeft")  this.Left  = false;                 // |
        if (e.key === "ArrowRight") this.Right = false;                 // |
        if (e.key === "ArrowUp")    this.Up    = false;                 // |
        if (e.key === "ArrowDown")  this.Down  = false;                 // |
    }                                                                   // |
}
const input = new InputHandler();                                       // |
                                                                        // |
//--- code above added from coPilot code: ----------------------------- // |

class Ball {
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.vel = new Vector(0,0);
        this.acc = new Vector(0,0);
        this.acceleration = 0.25;
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
        this.vel.drawVector(550,400,50,"green");
        this.acc.unitizeVector().drawVector(550,400,50,"blue");
        this.acc.normalVector().drawVector(550,400,50,"red");
        drawA.beginPath();
        drawA.arc(550,400,50, 0, Math.PI * 2);    
        drawA.strokeStyle = "black";
        drawA.stroke();

    }
}
//--this code block added from coPilot code: ----------- // |                                                     // |
//                                                       // |
function setupControls() {                               // |
    document.addEventListener("keydown", function(e) {   // |
        if (e.key === "ArrowLeft")  Left = true;         // |
        if (e.key === "ArrowRight") Right = true;        // |
        if (e.key === "ArrowUp")    Up = true;           // |
        if (e.key === "ArrowDown")  Down = true;         // |
    });                                                  // |
                                                         // |
    document.addEventListener("keyup", function(e) {     // |
        if (e.key === "ArrowLeft")  Left = false;        // |
        if (e.key === "ArrowRight") Right = false;       // |
        if (e.key === "ArrowUp")    Up = false;          // |
        if (e.key === "ArrowDown")  Down = false;        // |
    });                                                  // |
}                                                        // | 
//                                                       // |
function keyControl(b, input) {                          // |
                                                         // |
    if (input.Left){b.acc.x = -b.acceleration};          // | 
    if (input.Right){b.acc.x =  b.acceleration};         // |
    if (!input.Left && !input.Right){b.acc.x = 0};       // |
                                                         // |
    if (input.Up)    {b.acc.y = -b.acceleration};        // |
    if (input.Down)  {b.acc.y =  b.acceleration};        // |
    if (!input.Up && !input.Down) {b.acc.y = 0};         // |

    b.vel = b.vel.add(b.acc);                            // |
    b.vel = b.vel.mult(1.00001 - friction);              // |

    b.x += b.vel.x;                                      // |
    b.y += b.vel.y;                                      // |
}                                                        // |

//---above code added from coPilot code ---------------- // |

function mainLoop() {
    drawA.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);

    BALLZ.forEach((b) => {
        b.drawBall();
        if (b.player) keyControl(b, input);
        b.display();
    });

    requestAnimationFrame(mainLoop);
}

$(document).ready(function()
{
    $('#title').text('Video 07 - Ball Ball Collisions');
    $('#code_ver').text('html ver 46 * * * JS ver 46');
    
    let Ball1 = new Ball(200, 200, 30);

    let Ball2 = new Ball(300, 250, 40);

    Ball1.player = true;

    setupControls();

    requestAnimationFrame(mainLoop);
    
})











