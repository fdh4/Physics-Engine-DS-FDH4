//
//  2D Physics Engine from Scratch (JS) 02: Moving the Ball
//  Video 02 - Moving the Ball
//  https://www.youtube.com/watch?v=eKMe3eUpdkI&list=PLo6lBZn6hgca1T7cNZXpiq4q395ljbEI_&index=3

//  This the final code for this video.

const canvas = document.querySelector("canvas");
const drawA = canvas.getContext("2d");

let x=100;
let y=100;

let Left, Right, Up, Down = false               // I added ' = false '


function drawBall(x,y,r)
    {
    drawA.beginPath();
    drawA.arc(x, y, r, 0, Math.PI * 2);    
    drawA.strokeStyle = "black";
    drawA.stroke();
    drawA.fillStyle = "red";
    drawA.fill();
    }

    function move(){
        if(Left){x--;}
        if(Right){x++;}
        if(Up){y--;}
        if(Down){y++;}
    }
canvas.addEventListener("keydown", function(e)
    {
    if (e.key === "ArrowLeft")
        Left = true;
    
    if (e.key === "ArrowRight")
        Right= true;

    if (e.key === "ArrowUp")
        Up= true;

    if (e.key === "ArrowDown")
        Down= true;
        
    });


    canvas.addEventListener("keyup", function(e)
    {
        console.log(e);     // added by FDH4 to aid debug

    if (e.key === "ArrowLeft")
        Left = false;
    
    if (e.key === "ArrowRight")
        Right= false;

    if (e.key === "ArrowUp")
        Up= false;

    if (e.key === "ArrowDown")
        Down= false;
        
    });

/* setInterval(function(){
    drawA.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    move()
    drawBall(x,y,20); */

function mainLoop(){
    drawA.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    move()
    drawBall(x,y,20);
    requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);










