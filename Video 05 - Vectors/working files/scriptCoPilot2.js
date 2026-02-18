const input = new InputHandler();

class InputHandler {
    constructor() {
        this.Left  = false;
        this.Right = false;
        this.Up    = false;
        this.Down  = false;

        document.addEventListener("keydown", (e) => this.keyDown(e));
        document.addEventListener("keyup",   (e) => this.keyUp(e));
    }

    keyDown(e) {
        if (e.key === "ArrowLeft")  this.Left  = true;
        if (e.key === "ArrowRight") this.Right = true;
        if (e.key === "ArrowUp")    this.Up    = true;
        if (e.key === "ArrowDown")  this.Down  = true;
    }

    keyUp(e) {
        if (e.key === "ArrowLeft")  this.Left  = false;
        if (e.key === "ArrowRight") this.Right = false;
        if (e.key === "ArrowUp")    this.Up    = false;
        if (e.key === "ArrowDown")  this.Down  = false;
    }
}

function keyControl(b, input) {

    if (input.Left)  b.acc_x = -b.acceleration;
    if (input.Right) b.acc_x =  b.acceleration;
    if (!input.Left && !input.Right) b.acc_x = 0;

    if (input.Up)    b.acc_y = -b.acceleration;
    if (input.Down)  b.acc_y =  b.acceleration;
    if (!input.Up && !input.Down) b.acc_y = 0;

    b.vel_x += b.acc_x;
    b.vel_y += b.acc_y;

    b.vel_x *= 1.00001 - friction;
    b.vel_y *= 1.00001 - friction;

    b.x += b.vel_x;
    b.y += b.vel_y;
}

function mainLoop() {
    drawA.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);

    BALLZ.forEach((b) => {
        b.drawBall();
        if (b.player) keyControl(b, input);
        b.display();
    });

    requestAnimationFrame(mainLoop);
}
