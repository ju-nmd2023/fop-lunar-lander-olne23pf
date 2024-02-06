function setup() {
  createCanvas(600, 400);
  background(50, 50, 50);
}

//draw moon
function scenery() {
  fill(100, 100, 100);
  noStroke();
  beginShape();
  vertex(0, 350);
  bezierVertex(0, 350, 300, 280, 600, 350);
  rect(0, 350, 600, 50);
  endShape();
}

//draw spacecraft
function spacecraft(x, y) {
  push();
  scale(2);
  translate(x, y);
  //base
  fill(170, 170, 170);
  beginShape();
  vertex(280, 260);
  bezierVertex(280, 260, 250, 185, 300, 160);
  bezierVertex(300, 160, 350, 185, 320, 260);
  endShape();
  //dark metal bottom
  fill(100, 100, 100);
  rect(280, 260, 40, 10);
  //red
  fill(210, 50, 50);
  beginShape();
  vertex(278, 180);
  bezierVertex(280, 180, 285, 165, 300, 160);
  bezierVertex(300, 160, 315, 165, 320, 180);
  endShape();
  beginShape();
  vertex(315, 240);
  bezierVertex(315, 240, 317, 236, 322, 232, 330, 239);
  bezierVertex(330, 239, 335, 245, 338, 250, 337, 260);
  bezierVertex(337, 260, 325, 280, 330, 282, 327, 280);
  bezierVertex(327, 280, 325, 262, 324, 256, 320, 254);
  bezierVertex(320, 254, 318, 250, 316, 245, 315, 240);
  endShape();
  pop();
}

function draw() {
  scenery();
  spacecraft();
}
