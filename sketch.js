var h;
var mn;
var sc;
var scAngle;
var mnAngle;
var hrAngle;
function setup() {
  createCanvas(1800, 500);
  // createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

}

function draw() {
  background("Black");

  translate(200, 200);
  rotate(-90);
  h = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(h % 12, 0, 12, 0, 360);
  push();
  rotate(scAngle)
  stroke("Red")
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop();

  push();
  rotate(mnAngle)
  stroke("Green")
  strokeWeight(7)
  line(0, 0, 75, 0)
  pop();

  push();
  rotate(hrAngle);
  stroke("Blue")
  strokeWeight(7)
  line(0, 0, 50, 0)
  pop();

  noFill()
  stroke("Red")
  strokeWeight(7)
  arc(0, 0, 300, 300, 0, scAngle)

  noFill()
  stroke("Green")
  strokeWeight(7)
  arc(0, 0, 280, 280, 0, mnAngle)

  noFill()
  stroke("blue")
  strokeWeight(7)
  arc(0, 0, 260, 260, 0, hrAngle)


  drawSprites();

}