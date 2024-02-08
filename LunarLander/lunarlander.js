let spacecraftY = 100;
let backgroundY = 0;
let velocity = 1;
const acceleration = 0.1;

function setup() {
  createCanvas(600, 400);
}
function scenery() {
  background(50, 50, 50);
}

//moving background when game is running
function background(x, y) {
  push();
  translate(x, y);
  //STARTIMAGE-IMG1
  //grass
  fill(50, 130, 50);
  noStroke();
  rect(0, 350, 600, 100);
  //sky
  fill(150, 210, 240);
  noStroke();
  rect(0, 350, 600, -400);

  //IMG2
  fill(100, 190, 250);
  noStroke();
  rect(0, 0, 600, -400);

  pop();
}

//draw spacecraft
function spacecraft(x, y) {
  push();
  translate(x, y);
  noStroke();
  //base
  fill(170, 170, 170);
  beginShape();
  vertex(285, 260);
  bezierVertex(285, 260, 250, 185, 300, 160);
  bezierVertex(300, 160, 350, 185, 315, 260);
  bezierVertex(315, 260, 300, 265, 285, 260);
  endShape();
  //dark metal bottom
  fill(100, 100, 100);
  beginShape();
  vertex(285, 260);
  bezierVertex(285, 260, 300, 265, 315, 260);
  bezierVertex(315, 260, 317, 265, 315, 270);
  bezierVertex(315, 270, 300, 275, 285, 270);
  bezierVertex(285, 270, 283, 265, 285, 260);
  endShape();
  //red
  fill(170, 40, 40);
  beginShape();
  vertex(278, 180);
  bezierVertex(280, 180, 285, 165, 300, 160);
  bezierVertex(300, 160, 315, 165, 320, 180);
  bezierVertex(320, 180, 300, 172, 280, 180);
  endShape();
  //red - right leg
  beginShape();
  vertex(315, 240);
  bezierVertex(315, 240, 316, 235, 320, 235, 330, 239);
  bezierVertex(330, 239, 334, 241, 336, 248, 340, 250);
  bezierVertex(340, 250, 335, 278, 330, 279, 325, 280);
  bezierVertex(325, 280, 330, 260, 323, 257, 320, 255);
  bezierVertex(320, 255, 315, 252, 314, 248, 315, 240);
  endShape();
  //red - left leg
  beginShape();
  vertex(285, 240);
  bezierVertex(285, 240, 284, 235, 280, 235, 270, 239);
  bezierVertex(270, 239, 266, 241, 264, 248, 260, 250);
  bezierVertex(260, 250, 265, 278, 270, 279, 275, 280);
  bezierVertex(275, 280, 270, 260, 277, 257, 280, 255);
  bezierVertex(280, 255, 285, 252, 286, 248, 285, 240);
  endShape();
  //widnow
  fill(110, 110, 110);
  ellipse(300, 210, 40, 40);
  //widnow - glass
  fill(200, 240, 255, 170);
  ellipse(300, 210, 30, 30);
  //screws
  fill(180, 180, 180);
  stroke(1);
  strokeWeight(0.2);
  //screws - window
  ellipse(300, 193, 2, 2);
  ellipse(310, 196, 2, 2);
  ellipse(316, 204, 2, 2);
  ellipse(316.5, 215, 2, 2);
  ellipse(310, 224, 2, 2);
  ellipse(300, 227, 2, 2);
  ellipse(290, 224, 2, 2);
  ellipse(283.5, 215, 2, 2);
  ellipse(284, 204, 2, 2);
  ellipse(290, 196, 2, 2);
  //screws - base
  ellipse(300, 180, 2, 2);
  ellipse(310, 181, 2, 2);
  ellipse(319, 182.5, 2, 2);
  ellipse(290, 181, 2, 2);
  ellipse(281, 182.5, 2, 2);

  pop();
}

let gameIsRunning = true;
function draw() {
  scenery();
  background(0, backgroundY);
  spacecraft(0, spacecraftY);

  if (gameIsRunning === true) {
    //background moving/spacecraft flying
    backgroundY = backgroundY + 2;
    velocity = velocity + acceleration;
  }
}
