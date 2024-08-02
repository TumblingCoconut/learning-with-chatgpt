let xPos = 250;
let yPos = 0;
let xSpeed = 1;
let ySpeed = 4;

function setup() {
    noStroke();
    createCanvas(500, 500);
    background(255);
}

function draw() {
    background(230);
    fill(0, 0, 255);
    rect(0, 0, 200, 500);
    rect(300, 0, 200, 500);
    
    stroke(0);
    fill(255);
    ellipse(xPos, yPos, 40, 40);

    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos < 225 || xPos > 275) {
        xSpeed *= -1;
    
    }
    if (yPos >= 520) {
        yPos = -20;
        ySpeed = random(2, 10)
    }

}