

// Physics Engine according to Dan Stuts YouTube playlist "Physics Engine in from Scratch"
//         Accessed 05/15/2025
//         https://www.youtube.com/watch?v=2Vo_fZ_28gQ&list=PLo6lBZn6hgca1T7cNZXpiq4q395ljbEI_&index=2

//     Prior attempts are appended as a comment at the end of the code in LIFO order.
//     The code is a simple physics engine that simulates bouncing balls in a 2D space.
//     The code uses HTML5 canvas to render the balls and their movements.
//     The code is written in JavaScript and uses the 'requestAnimationFrame' function to create a smooth animation.


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;

let LEFT, UP, RIGHT, DOWN;

function drawBall(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();
}

// canvas.focus();         // this is the only way I could get the canvas to focus.
// canvas.tabIndex = 0;    // however, using 'tabIndex=0' does not fix the problem.

canvas.addEventListener('keydown', function(e) {
    if(e.keyCode === 37){LEFT = true;}
    if(e.keyCode === 38){UP = true}
    if(e.keyCode === 39){RIGHT = true;}
    if(e.keyCode === 40){DOWN = true;}
    
                        // Note that 'e.keycode' is deprecated.  
                        // Here is an alternative approach using the 'key' property.
                        // 
                        //       let fdhCharcode = e.key.charCodeAt();
                        //       console.log("fdhCharcode =", fdhCharcode);
                        // 
})

canvas.addEventListener('keyup', function(e) {
    if(e.keyCode === 37){LEFT = false;}
    if(e.keyCode === 38){UP = false}
    if(e.keyCode === 39){RIGHT = false;}
    if(e.keyCode === 40){DOWN = false;}
    
                        // Note that 'e.keycode' is deprecated.  
                        // Here is an alternative approach using the 'key' property.
                        // 
                        //       let fdhCharcode = e.key.charCodeAt();
                        //       console.log("fdhCharcode =", fdhCharcode);
                        // 
})

function move()
    {
        if(LEFT){x--;}
        if(UP){y--;}
        if(RIGHT){x++;}
        if(DOWN){y++;}
    }

function mainLoop()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        move(); 
        drawBall(x, y, 15);
        requestAnimationFrame(mainLoop);
    }

requestAnimationFrame(mainLoop);

















// ***************             End of code for attempt 2.12.             ******************



















// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");
// const twoTT = 2*Math.PI; // note: I use the variable 'TT' to store 2*Pi
// const BALLZ = [];

// let LEFT, UP, RIGHT, DOWN;
// let friction = 0.1;

// class Vector{              // *** class Vector Begin ***
//   constructor(x, y){
//       this.x = x;
//       this.y = y; 
//   }

//   add(v){
//     return new Vector(this.x + v.x, this.y + v.y);
//   }

//   subtr(v){
//     return new Vector(this.x - v.x, this.y - v.y);
//   }

//   mag(){
//     return Math.sqrt(this.x**2 + this.y**2);
//   }

//   mult(n){
//     return new Vector(this.x*n, this.y*n);
//   }
// }                        //  *** class Vector End ***

// class Ball{              // *** class Ball Begin ***
//   constructor(x,y,r){
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.vel = new Vector(0,0);
//     this.acc = new Vector(0,0);
//     this.acceleration = 0.1;
//     this.player = false;
//     BALLZ.push(this);
//   }

//   drawBall (){        // drawBall method of class Ball start
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.r, 0, twoTT);
//     ctx.strokeStyle = "black";
//     ctx.stroke();
//     ctx.fillStyle = "purple";
//     ctx.fill();
//   }                   // drawBall method of class Ball end

//   display(){
//     ctx.beginPath();
//     ctx.moveTo(this.x, this.y);
//     ctx.lineTo(this.x + this.acc_x*500, this.y + this.acc_y*500);
//     ctx.strokeStyle = "green";
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(this.x, this.y);
//     ctx.lineTo(this.x + this.vel_x*50, this.y + this.vel_y*50);
//     ctx.strokeStyle = "blue";
//     ctx.stroke();

//   }
// }                        //  *** class Ball End ***

// function keyControl(b){         // *** function keyControl Begin ***

//   canvas.addEventListener('keydown', function(e){       //  *** keyDown listener Begin ***

//       let fdhIcode = e.key.charCodeAt();

//             // // console.log("fdhIcode =", fdhIcode);

//       if(fdhIcode == 115){LEFT = true;}

//       if(fdhIcode == 99){DOWN = true;}

//       if(fdhIcode == 101){UP = true;}
        
//       if(fdhIcode == 102){RIGHT = true;}
        
//     }
//   );                                                    // *** keyDown listener  End ***

// canvas.addEventListener('keyup', function(e){     // *** keyUp listener Begin ***
//    let fdhIcode = e.key.charCodeAt();

//      if (fdhIcode == 115){LEFT = false;}
       
//      if (fdhIcode == 99){DOWN = false;}

//      if (fdhIcode == 101){UP = false;}

//      if (fdhIcode == 102){RIGHT = false;}
//     }
// );                                                // *** keyUp listener End ***

//       if (LEFT){
//         b.acc.x = -b.acceleration;
//       }

//       if (UP){
//         b.acc.y = -b.acceleration;
//       }

//       if (RIGHT){
//         b.acc.x = b.acceleration;
//       }

//       if (DOWN){
//         b.acc.y = b.acceleration;
//       }

//       if(!LEFT && !RIGHT){
//         b.acc.x = 0;
//       }
  
//     if(!UP && !DOWN){
//       b.acc.y = 0;
//     }

//     b.vel = b.vel.add(b.acc);
//     b.vel = b.vel.mult(1-friction);
//     b.x += b.vel.x;
//     b.y += b.vel.y;

// }                               // *** function keyControl End ***
    
//     function mainLoop() {       // *** function mainLoop Begin ***
//       ctx.clearRect(0,0,canvas.clientHeight, canvas.clientWidth);
//       BALLZ.forEach((b) => {
//         b.drawBall();
//         if (b.player){
//           keyControl(b);
//         }
//         b.display();
//       });
//       requestAnimationFrame(mainLoop);
//     }                           // *** function mainLoop End ***

//     let Ball1 = new Ball(canvas.width/2, canvas.height/2, 15);
//     // let Ball2 = new Ball(300, 400, 20);

//     Ball1.player = true;
//     // Ball2.player = false;

//     requestAnimationFrame(mainLoop);

// end of code for initial attempt.







































// //   scratch code
//     // console.log("fdhIcode =", fdhIcode);
//     //  console.log(fdhIcode);

//       //
//       // Add a rectangle at (10, 10) with size 100x100 pixels
//       // ctx.fillRect(10, 10, 100, 100);
//       //

//       // console.log(text);
//       //  console.log();
//       // console.log("x = ",x);
//       // console.log("y = ", y);
//       // console.log();
//       // console.log();
//       // console.log("e.key.charCodeAt():");
//       // console.log(fdhIcode);
//       // console.log();   
//       //   console.log();
//       //   console.log("Key:  ");
//       // console.log(e.key);
//       //   console .log();
//       //   console.log("Code:  ");
//       // console.log(e.code);
//       //   console.log();
//       //   console.log("charCode:  ");
//       // console.log(e.key.charCodeAt()); 
//       //   console.log();
//       //   console.log();

//       //   let text = e.key;
//       //   let fdhIcode = e.key.charCodeAt();
//       // console.log(e.code.charCodeAt());
//       // console.log();
//       // console.log();
//   // if (fdhIcode == "100")
//   //   {
//   //      console.log("d => NONE");
//   //   }

//   //   if (fdhIcode == "101")
//   //   {
//   //        console.log("e => UP");
//   //       y--;
//   //   }

//   // if (fdhIcode == "99")
//   //   {
//   //      console.log("c => DOWN");
//   //     y++;
//   //   }

//   // if (fdhIcode == "115")
//   //   {
//   //     console.log("s => LEFT");
  
//   //    x--;
//   //   }
    
//   // if (fdhIcode == "102")
//   //   {
//   //    console.log("f => RIGHT");
//   //   x++;
//   //   }


