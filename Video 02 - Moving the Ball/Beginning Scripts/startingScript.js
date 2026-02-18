//
//  2D Physics Engine from Scratch (JS) 02: Moving the Ball
//  Video 02 - Moving the Ball
//  https://www.youtube.com/watch?v=eKMe3eUpdkI&list=PLo6lBZn6hgca1T7cNZXpiq4q395ljbEI_&index=3

//  This the starting point for the code in this video.

const canvas = document.querySelector("canvas");
const drawA = canvas.getContext("2d");

function drawBall(x,y,r)
    {
    drawA.beginPath();
    drawA.arc(x, y, r, 0, Math.PI * 2);    
    drawA.strokeStyle = "black";
    drawA.stroke();
    drawA.fillStyle = "red";
    drawA.fill();
    }

    drawBall(100,100,20);
    drawBall(200,200,30);







