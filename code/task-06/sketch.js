function preload() {
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const angleDistance = 5;
const maxAngle = 360;
const points = [];

function setup() {
  createCanvas(sketchWidth, sketchHeight);
 
  for (let p = 0; p < 100; p += 1) {
    points.push({
      angle: random(0, maxAngle)
    });
  }
}

function draw() {
  background(255);
  noStroke();
  fill(100,200,150);


  for (let p = 0; p < points.length; p ++) {
      const angle = points[p].angle;
      const rad = (Math.PI / 270) * (angle * 8);
      const x = angle * cos(rad);
      const y = angle * sin(rad);

      circle(
        x + sketchWidth / 2,
        y + sketchHeight / 2,
        angle / 4);

        points[p].angle += 3;
        if (points[p].angle > maxAngle) {
          points[p].angle = 1;
        }
  }
}