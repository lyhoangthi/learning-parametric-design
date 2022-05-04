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
  slider = createSlider(0,10,1,0.25);
  slider.position(0,400);
  slider.size(100);

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
        x + sketchWidth / slider.value(),
        y + sketchHeight / slider.value(),
        angle / 4);

        points[p].angle += 3;
        if (points[p].angle > maxAngle) {
          points[p].angle = 1;
        }
  }
}