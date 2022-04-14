function preload(){
  // preload assets
}

const sketchWidth = 600;
const sketchHeight = 600;
const size = 10;

function setup() {
  createCanvas(sketchWidth,sketchHeight);
}

function draw() {
  background(245,227,29);
  noStroke()
  
  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  for (let x = 0; x < columns; x += random(0,10)) {
    for (let y = 0; y < rows; y += random(0,20)) {
      fill(random(0,255), random(0,255), random(0,255));
      circle(x * size, y * size, random(size));
      rect(x * size, y * size, random(size), random(size));
      triangle(random(20,500),random(0,200),random(100,500),random(0,600),random(0,600),random(1,300));
    }
  }

}