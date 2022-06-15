function preload(){
  // preload assets
}

const size = 10;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  background(255);
  noStroke();


    for(let x = 1; x < 6; x++); {
      for(let y = 1; y < 6; y++); {
        fill (random(100),random(100),random(100));
        square(x * size, y * size, 80);
    
      }
    }




    }

