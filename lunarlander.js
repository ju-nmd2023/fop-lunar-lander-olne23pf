function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  frameRate(30);
}
let environmentY = 0;
let screen = 0;
let velocity = 0;
const gravity = 0.01;
let x = 300;
let y = 280;
let rotation = 0;

let spacecraftX = x;
let spacecraftY = y + 50;

let moonY = -2000;

let birdY = -300;
let flightSpeedX = 1;
let flightSpeedX2 = -2;
let flightSpeedX3 = -3;
let flightSpeedX4 = -1.5;
let flightSpeedY = 0.1;
let spx = 0;
let spx2 = 0;
let spx3 = 30;
let spx4 = 20;
let spy = -50;
let spy3 = -200;

function scenery() {
  //space
  fill(50, 50, 50);
  noStroke();
  rect(0, 0, 600, 400);
}
//moving background when game is running
function environment(x, y) {
  push();
  translate(x, environmentY);
  //grass
  fill(50, 130, 50);
  noStroke();
  rect(0, 310, 600, 90);
  //sky
  fill(150, 210, 240);
  noStroke();
  rect(0, 310, 600, -400);
  //IMG2-sky
  fill(120, 200, 240);
  noStroke();
  rect(0, 0, 600, -400);
  //IMG3-sky
  fill(100, 190, 250);
  noStroke();
  rect(0, -400, 600, -400);

  //moon
  noStroke();
  fill(150, 150, 150);
  ellipse(130, moonY, 500, 240);
  pop();
}

function spacecraft(x, y, rotation) {
  push();
  noStroke();
  translate(spacecraftX, spacecraftY, rotation);
  rotate(rotation);
  //base
  fill(170, 170, 170);
  beginShape();
  vertex(285 - 300, 260 - 270);
  bezierVertex(
    285 - 300,
    260 - 270,
    250 - 300,
    185 - 270,
    300 - 300,
    160 - 270
  );
  bezierVertex(
    300 - 300,
    160 - 270,
    350 - 300,
    185 - 270,
    315 - 300,
    260 - 270
  );
  bezierVertex(
    315 - 300,
    260 - 270,
    300 - 300,
    265 - 270,
    285 - 300,
    260 - 270
  );
  endShape();
  //dark metal bottom
  fill(100, 100, 100);
  beginShape();
  vertex(285 - 300, 260 - 270);
  bezierVertex(
    285 - 300,
    260 - 270,
    300 - 300,
    265 - 270,
    315 - 300,
    260 - 270
  );
  bezierVertex(
    315 - 300,
    260 - 270,
    317 - 300,
    265 - 270,
    315 - 300,
    270 - 270
  );
  bezierVertex(
    315 - 300,
    270 - 270,
    300 - 300,
    275 - 270,
    285 - 300,
    270 - 270
  );
  bezierVertex(
    285 - 300,
    270 - 270,
    283 - 300,
    265 - 270,
    285 - 300,
    260 - 270
  );
  endShape();
  //red
  fill(170, 40, 40);
  beginShape();
  vertex(278 - 300, 180 - 270);
  bezierVertex(
    280 - 300,
    180 - 270,
    285 - 300,
    165 - 270,
    300 - 300,
    160 - 270
  );
  bezierVertex(
    300 - 300,
    160 - 270,
    315 - 300,
    165 - 270,
    320 - 300,
    180 - 270
  );
  bezierVertex(
    320 - 300,
    180 - 270,
    300 - 300,
    172 - 270,
    280 - 300,
    180 - 270
  );
  endShape();
  //red - right leg
  beginShape();
  vertex(315 - 300, 240 - 270);
  bezierVertex(
    315 - 300,
    240 - 270,
    316 - 300,
    235 - 270,
    320 - 300,
    235 - 270,
    330 - 300,
    239 - 270
  );
  bezierVertex(
    330 - 300,
    239 - 270,
    334 - 300,
    241 - 270,
    336 - 300,
    248 - 270,
    340 - 300,
    250 - 270
  );
  bezierVertex(
    340 - 300,
    250 - 270,
    335 - 300,
    278 - 270,
    330 - 300,
    279 - 270,
    325 - 300,
    280 - 270
  );
  bezierVertex(
    325 - 300,
    280 - 270,
    330 - 300,
    260 - 270,
    323 - 300,
    257 - 270,
    320 - 300,
    255 - 270
  );
  bezierVertex(
    320 - 300,
    255 - 270,
    315 - 300,
    252 - 270,
    314 - 300,
    248 - 270,
    315 - 300,
    240 - 270
  );
  endShape();
  //red - left leg
  beginShape();
  vertex(285 - 300, 240 - 270);
  bezierVertex(
    285 - 300,
    240 - 270,
    284 - 300,
    235 - 270,
    280 - 300,
    235 - 270,
    270 - 300,
    239 - 270
  );
  bezierVertex(
    270 - 300,
    239 - 270,
    266 - 300,
    241 - 270,
    264 - 300,
    248 - 270,
    260 - 300,
    250 - 270
  );
  bezierVertex(
    260 - 300,
    250 - 270,
    265 - 300,
    278 - 270,
    270 - 300,
    279 - 270,
    275 - 300,
    280 - 270
  );
  bezierVertex(
    275 - 300,
    280 - 270,
    270 - 300,
    260 - 270,
    277 - 300,
    257 - 270,
    280 - 300,
    255 - 270
  );
  bezierVertex(
    280 - 300,
    255 - 270,
    285 - 300,
    252 - 270,
    286 - 300,
    248 - 270,
    285 - 300,
    240 - 270
  );
  endShape();
  //widnow
  fill(110, 110, 110);
  ellipse(300 - 300, 210 - 270, 40, 40);
  //widnow - glass
  fill(200, 240, 255, 170);
  ellipse(300 - 300, 210 - 270, 30, 30);
  //screws
  fill(180, 180, 180);
  stroke(1);
  strokeWeight(0.2);
  //screws - window
  ellipse(300 - 300, 193 - 270, 2, 2);
  ellipse(310 - 300, 196 - 270, 2, 2);
  ellipse(316 - 300, 204 - 270, 2, 2);
  ellipse(316.5 - 300, 215 - 270, 2, 2);
  ellipse(310 - 300, 224 - 270, 2, 2);
  ellipse(300 - 300, 227 - 270, 2, 2);
  ellipse(290 - 300, 224 - 270, 2, 2);
  ellipse(283.5 - 300, 215 - 270, 2, 2);
  ellipse(284 - 300, 204 - 270, 2, 2);
  ellipse(290 - 300, 196 - 270, 2, 2);
  //screws - base
  ellipse(300 - 300, 180 - 270, 2, 2);
  ellipse(310 - 300, 181 - 270, 2, 2);
  ellipse(319 - 300, 182.5 - 270, 2, 2);
  ellipse(290 - 300, 181 - 270, 2, 2);
  ellipse(281 - 300, 182.5 - 270, 2, 2);
  pop();

  //fire
  if (keyIsDown(38)) {
    push();
    fill(250, 90, 0);
    stroke(255, 0, 0);
    triangle(x - 15, y, x - 10, y + 20, x - 5, y);
    triangle(x - 5, y, x, y + 30, x + 5, y);
    triangle(x + 5, y, x + 10, y + 20, x + 15, y);
    fill(255, 200, 0);
    noStroke();
    triangle(x - 13, y, x - 10, y + 10, x - 7, y);
    triangle(x - 3, y, x, y + 20, x + 3, y);
    triangle(x + 7, y, x + 10, y + 20, x + 13, y);
    pop();
  }
}
//Got birds from https://editor.p5js.org/KatalinVarga/sketches/rT-XktCX-
function bird(x, y) {
  push();
  translate(x, birdY);
  stroke(1);
  strokeWeight(2.5);
  noFill();
  // bird 1
  bezier(
    258 + spx,
    215 + spy,
    251 + spx,
    210 + spy,
    247 + spx,
    215 + spy,
    242 + spx,
    220 + spy
  );
  bezier(
    226 + spx,
    215 + spy,
    230 + spx,
    210 + spy,
    235 + spx,
    210 + spy,
    242 + spx,
    220 + spy
  );

  //bird 2
  stroke(1);
  strokeWeight(2.5);
  bezier(
    258 + spx2,
    315 + spy,
    251 + spx2,
    310 + spy,
    247 + spx2,
    315 + spy,
    242 + spx2,
    320 + spy
  );
  bezier(
    226 + spx2,
    315 + spy,
    230 + spx2,
    310 + spy,
    235 + spx2,
    310 + spy,
    242 + spx2,
    320 + spy
  );

  //bird 3:
  stroke(1);
  strokeWeight(2.5);
  bezier(
    288 + spx3,
    315 + spy3,
    281 + spx3,
    310 + spy3,
    277 + spx3,
    315 + spy3,
    272 + spx3,
    320 + spy3
  );
  bezier(
    256 + spx3,
    315 + spy3,
    260 + spx3,
    310 + spy3,
    265 + spx3,
    310 + spy3,
    272 + spx3,
    320 + spy3
  );

  //bird 4:
  stroke(1);
  strokeWeight(2.5);
  bezier(
    188 + spx4,
    215 + spy3,
    181 + spx4,
    210 + spy3,
    177 + spx4,
    215 + spy3,
    172 + spx4,
    220 + spy3
  );
  bezier(
    156 + spx4,
    215 + spy3,
    160 + spx4,
    210 + spy3,
    165 + spx4,
    210 + spy3,
    172 + spx4,
    220 + spy3
  );
  //bird 5:
  stroke(1);
  strokeWeight(2.5);
  bezier(
    88 + spx,
    115 + spy3,
    81 + spx,
    110 + spy3,
    77 + spx,
    115 + spy3,
    72 + spx,
    120 + spy3
  );
  bezier(
    56 + spx,
    115 + spy3,
    60 + spx,
    110 + spy3,
    65 + spx,
    110 + spy3,
    72 + spx,
    120 + spy3
  );
  pop();
}

function asteroids(x, y) {
  push();
  translate(x, y);
  beginShape();
  vertex(70, 50);
  fill(100, 100, 100);
  noStroke();
  bezierVertex(70, 50, 90, 70, 70, 80);
  bezierVertex(70, 80, 55, 85, 50, 80);
  bezierVertex(50, 80, 30, 80, 30, 70);
  bezierVertex(30, 70, 25, 50, 50, 50);
  bezierVertex(50, 50, 60, 40, 70, 50);
  endShape();
  fill(120, 120, 120);
  ellipse(65, 60, 8, 10);
  ellipse(40, 70, 8, 5);
  ellipse(50, 63, 6, 6);
  ellipse(60, 75, 12, 6);
  ellipse(39, 56, 7, 4);
  pop();
}

function infoBox() {
  environment(0, 0);
  spacecraft();
  spacecraftX = 100;
  spacecraftY = 330;
  push();
  fill(1);
  textFont("Courier");
  textAlign(CENTER);
  textSize(30);
  text("CONTROLS", 400, 100);
  textSize(30);
  text("←", 300, 160);
  text("↑", 365, 160);
  text("↓", 435, 160);
  text("→", 495, 160);

  textSize(12);
  text("left", 300, 180);
  text("velocity", 365, 180);
  text("down", 435, 180);
  text("right", 495, 180);
  fill(255);
  stroke(1);
  rect(350, 200, 100, 20);
  fill(1);
  noStroke();
  text("space-button", 400, 213);
  text("rotate", 400, 233);

  textSize(20);
  stroke(1);
  text("BACK", 540, 370);
  pop();
}

function resetGame() {
  //start game
  scenery();
  environment(0, environmentY, rotation);
  bird(0, birdY);
  //move the spacecraft
  spacecraft(spacecraftX, spacecraftY, rotation);
  //environmentY += velocity;
  velocity += gravity;
  birdY += velocity;
  if (keyIsDown(38)) {
    //UP
    spacecraftY -= 2;
    velocity += 0.5;
  } else if (keyIsDown(40)) {
    //DOWN
    velocity -= 0.5;
    spacecraftY += 1;
  } else {
    spacecraftY += 0;
  }

  if (keyIsDown(37)) {
    spacecraftX -= 6;
  } else if (keyIsDown(39)) {
    spacecraftX += 6;
  } else {
    spacecraftX += 0;
  }

  if (keyIsDown(32) && keyIsPressed) {
    rotation += 3;
  }

  //add walls on the sides of the canvas so the spacecraft cant move outside it
  if (spacecraftX > 40) {
    spacecraftX += -6;
  }
  if (spacecraftX < 560) {
    spacecraftX += 6;
  }

  birdY += 2;
  //obstacles - birds
  spx += flightSpeedX;
  spx2 += flightSpeedX2;
  spx3 += flightSpeedX3;
  spx4 += flightSpeedX4;
  spy -= flightSpeedY;
  if (spx < -100 || spx > 280) {
    flightSpeedX *= 1;
  }
  if (spx2 < -100 || spx2 > 280) {
    flightSpeedX2 *= -1;
  }
  if (spx3 < -100 || spx3 > 280) {
    flightSpeedX3 *= -1;
  }
  if (spx4 < -100 || spx4 > 280) {
    flightSpeedX4 *= -1;
  }
  if (spy < -150 || spy > 0) {
    flightSpeedY *= -1;
  }

  //background stops moving when the moon appears
  if (0 < environmentY < 2400) {
    environmentY += velocity;
  }
  if (environmentY > 2400) {
    environmentY -= velocity;
    //velocity = -0.02;
  }
  //console.log(spacecraftX);
  console.log(spacecraftY);
  console.log(environmentY);
  //console.log(environmentY);

  //collision
  if (
    2000 < environmentY < 2200 &&
    220 < spacecraftY < 400 &&
    70 < spacecraftX < 250 &&
    velocity < -1
  ) {
    screen = 2; //you win
  } else if (80 < spacecraftX < 250 && spacecraftY < 140) {
    screen = 3; // game over
  }
  if (environmentY > 2500 && spacecraftY < 10) {
    screen = 3; // game over
  }
}
function resetStart() {
  //start page
  environment(0, environmentY);
  environmentY = 0;
  spacecraft(spacecraftX, spacecraftY, rotation);
  rotation = 0;
  spacecraftX = 300;
  spacecraftY = 330;
  bird(0, birdY);
  birdY = -300;
  push();
  fill(1);
  textFont("Courier");
  textAlign(CENTER);
  textSize(30);
  text("Click to Start!", 300, 180);
  //info
  fill(255);
  stroke(1);
  ellipse(570, 370, 22, 22);
  fill(1);
  textFont("Courier");
  textSize(18);
  stroke(1);
  text("i", 570, 375);
  pop();
}

//got inspiration for the startpage and code structure from: https://editor.p5js.org/ehersh/sketches/BkCYHm7Rm
function draw() {
  clear();
  if (screen == 0) {
    //start screen
    resetStart();
  } else if (screen == 1) {
    //game screen
    resetGame();
    // Display velocity counter
    push();
    fill(255);
    textSize(20);
    textAlign(RIGHT);
    text("Velocity: " + velocity.toFixed(2), width - 10, 20);
    pop();
  } else if (screen == 2) {
    //you won
    fill(50);
    rect(0, 0, 600, 400);
    fill(255);
    textSize(30);
    textFont("Courier");
    textAlign(CENTER);
    text("YOU WON", 300, 200);
    textSize(20);
    text("Click to play again", 300, 230);
  } else if (screen == 3) {
    //game over
    fill(50);
    rect(0, 0, 600, 400);
    fill(200, 0, 0);
    textSize(30);
    textFont("Courier");
    textAlign(CENTER);
    text("GAME OVER", 300, 200);
    textSize(20);
    text("Click to try again", 300, 230);
  } else if (screen == 4) {
    infoBox();
  }
}

function mousePressed() {
  if (screen == 0) {
    if (mouseY > 360 && mouseY < 380 && mouseX > 558 && mouseX < 580) {
      screen = 4;
    } else if (mouseY > 0 && mouseY < 310 && mouseX > 0 && mouseX < 600) {
      screen = 1;
    }
  } else if (screen == 1) {
  } else if (screen == 2) {
    //you won
    if (mouseY < 230 && mouseY > 180 && mouseX > 190 && mouseX < 410) {
      screen = 0;
    }
  } else if (screen == 3) {
    //game over
    if (mouseY < 230 && mouseY > 180 && mouseX > 190 && mouseX < 410) {
      screen = 0;
    }
  } else if (screen == 4) {
    if (mouseY < 370 && mouseY > 355 && mouseX > 515 && mouseX < 560) {
      screen = 0;
    }
  }
}
