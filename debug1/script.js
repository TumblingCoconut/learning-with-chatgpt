// Made variables global
// Change starting x and y positions
let xPos = 250;
let yPos = 250;
let xSpeed = 1;
let ySpeed = 4.5;


function setup() {
    createCanvas(500, 500);
    background(0);
    noStroke();

}

// Moved draw function outside of setup function
function draw() {
    background(0, 0, 0, 5);

    fill(255, 0, 255);
    ellipse(xPos, yPos, 30, 30);

    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos <= 15 || xPos >= 485) {
        xSpeed *= -1;
    }
    if (yPos <= 15 || yPos >= 485) {
        ySpeed *= -1;
    }
}