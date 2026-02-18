//
//  Video 01
//  Pengine
//
//  Created by Ilya on 6/5/24.
//  Modified by FrankDavisHowardIV on 02/09/26.
//  Copyright © 2024 Pengine. All rights reserved.
//  https://www.youtube.com/watch?v=Zy9n2qj8Xh0
//
//  This code is provided for educational purposes only. It may not be used in commercial products.
//  What follows is a simple JavaScript program that draws circles on an HTML canvas. 
//  The drawBall function takes parameters for 
//      position, radius, fill color, and stroke color of the circle. 
//  If the fill color or stroke color is not provided, it defaults to red and black, respectively. 
//  The program then calls the drawBall function to draw two circles on the canvas.
//  To run this code, you would need to create an HTML file 
//      that includes a canvas element and links to this JavaScript file.
//
// This code is based on the Youtube Video Series "2D physics engine from Scratch(JS)
//  "https://www.youtube.com/watch?v=2Vo_fZ_28gQ&list=PLo6lBZn6hgca1T7cNZXpiq4q395ljbEI_&index=2

// I have made some modifications to the original code, such as 
//      adding default values for the new parameters fill and stroke colors, 
//      and adding these to the drawBall function.

const canvas = document.querySelector("canvas");
const drawA = canvas.getContext("2d");

function drawBall(x,y,r,fillColor,strokeColor)
    {
    drawA.beginPath();

    drawA.arc(x, y, r, 0, Math.PI * 2);

    if (strokeColor == undefined)
        { strokeColor = "black"; }
        
    if (fillColor == undefined)
        { fillColor = "red"; }

    drawA.strokeStyle = strokeColor;
    drawA.stroke();

    drawA.fillStyle = fillColor;
    drawA.fill();
    }

    drawBall(100,100,50,"darkblue","yellow");
    drawBall(300,100,10);

/*  drawBall(200,200,40,"darkgreen","pink");
    drawBall(300,300,30,"purple","cyan");
    drawBall(400,400,10,"orange","black");
    drawBall(350,350,20,"magenta","gray");
    drawBall(450,450,5,"brown","white");
 */






