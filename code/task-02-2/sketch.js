function preload(){
  // preload assets
}

const sketchWidth = 400;
const sketchHeight = 400;
const size = 10;

function setup() {
  createCanvas(sketchWidth,sketchHeight);
}

function draw() {
  background(245,227,29);
  noStroke()
  
  const columns = sketchWidth / size;
  const rows = sketchHeight / size;

  for (let x = 0.5; x < columns; x ++) {
    for (let y = 0.5; y < rows; y ++) {
      fill(random(0,255), random(0,255), random(0,255));
      circle(x * size, y * size, random(size));

    }
  }

  for (let x = 0; x < columns; x ++) {
    for (let y = 0; y < rows; y ++) {
      fill(random(0,255), random(0,255), random(0,255));
      rect(x * size, y * size, random(size), random(size));

       
    
    
    
    
  
}
  }
}