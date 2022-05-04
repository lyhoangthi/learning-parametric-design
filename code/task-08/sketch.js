function preload() {
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const angleDistance = 5;
const maxAngle = 360;
const points = [];
let slider;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  slider1 = createSlider(0,10,2,0.25);
  slider1.position(0,400);
  slider1.size(100);

  slider2 = createSlider(0,10,4,0.25);
  slider2.position(100,400);
  slider2.size(100);

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
        x + sketchWidth / slider1.value(),
        y + sketchHeight / slider1.value(),
        angle / slider2.value());

        points[p].angle += 3;
        if (points[p].angle > maxAngle) {
          points[p].angle = 1;
        }
  }
}