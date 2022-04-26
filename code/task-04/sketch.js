function preload(){
  // preload assets
}

const size = 80;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background(255);
  noStroke();


  // RASTER
    for(let x = 0; x < 6; x ++) {
      for(let y = 0; y < 6; y ++) {
        //fill (random(100),random(100),random(100));
        //rect(x * size, y * size, size, size, 5);


        // Block vertikal
        if (x === 1 && y === 0 ||
            x === 2 && y === 1 ||
            x === 3 && y === 3 ||
            x === 0 && y === 2){
        fill(random(200));
        rect(x * size, y * size, size, size * 2, 8);
      }

      // Blocks
        if (x === 0 && y === 0 ||
            x === 3 && y === 1 ||
            x === 1 && y === 3 ||
            x === 2 && y === 4 ||
            x === 3 && y === 0){
          fill(random(200));
          rect(x * size, y * size, size, size, 8);
        }


      // Block horizontal
      if (x === 3 && y === 1 ||
          x === 0 && y === 4){
        fill(random(200));
        rect(x * size, y * size, size * 2, size, 8);
      }

      // 3 Block vertikal
      if (x === 4 && y === 2){
        fill(random(255));
        rect(x * size, y * size, size, size * 3, 8);
      }

        if (x === 2 && y === 0 ||
            x === 4 && y === 0 || 
            x === 0 && y === 1 ||
            x === 1 && y === 2 ||
            x === 3 && y === 2 ||
            x === 2 && y === 3) {
          fill (random(100),random(100),random(100));
          circle(x * size + 40, y * size + 40, size);
          
         }
      }
    }





    }

