function preload(){
  // preload assets
}

const sketchWidth = 600;
const sketchHeight = 600;
const size = 5;

function setup() {
  createCanvas(sketchWidth,sketchHeight);
}

function draw() {
  background(245,227,29);
  noStroke()
  
  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  for (let x = 3; x < columns; x += 1) {
    for (let y = 3; y < rows; y += 1) {
      fill(random(20,200), 20, 100);
      rect(x * size, y * size, random(size), random(size));
    }
  }

}