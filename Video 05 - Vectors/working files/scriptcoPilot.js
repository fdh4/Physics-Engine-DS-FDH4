let Left = false, Right = false, Up = false, Down = false;

function setupControls() {
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft")  Left = true;
        if (e.key === "ArrowRight") Right = true;
        if (e.key === "ArrowUp")    Up = true;
        if (e.key === "ArrowDown")  Down = true;
    });

    document.addEventListener("keyup", function(e) {
        if (e.key === "ArrowLeft")  Left = false;
        if (e.key === "ArrowRight") Right = false;
        if (e.key === "ArrowUp")    Up = false;
        if (e.key === "ArrowDown")  Down = false;
    });
}

function keyControl(b) {
    if (Left)  b.acc_x = -b.acceleration;
    if (Right) b.acc_x =  b.acceleration;
    if (!Left && !Right) b.acc_x = 0;

    if (Up)    b.acc_y = -b.acceleration;
    if (Down)  b.acc_y =  b.acceleration;
    if (!Up && !Down) b.acc_y = 0;

    b.vel_x += b.acc_x;
    b.vel_y += b.acc_y;

    b.vel_x *= 1.00001 - friction;
    b.vel_y *= 1.00001 - friction;

    b.x += b.vel_x;
    b.y += b.vel_y;
}
