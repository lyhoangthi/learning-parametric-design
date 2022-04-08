function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245,227,29);

  fill(9,0,250);
  arc(200,200,
    600,600,
    Math.PI/180*-90,
    Math.PI/180*0);

  fill(76,26,250);
  arc(200,200,
    700,700,
    Math.PI/180*-60,
    Math.PI/180*0);

  strokeWeight(0);
  fill(129,21,250);
  arc(200,200,
    600,600,
    Math.PI/180*-30,
    Math.PI/180*0);

  
  strokeWeight(0);
  fill(245,212,35);
  arc(200,200,
    600,600,
    Math.PI/180*90,
    Math.PI/180*-210);

  strokeWeight(0);
  fill(245,199,36);
  arc(200,200,
    600,600,
    Math.PI/180*90,
    Math.PI/180*-240);


  strokeWeight(0);
  fill(56, 126, 255);
  circle (200,200,285);
  
  strokeWeight(0);
  fill(174, 222, 91);
  circle (200,200,200);
  
  strokeWeight(0);
  fill(250, 123, 54);
  rect (200, 200, 300, 100);
  rect (200, 200, 100, 300);
  rect (100, 0, 100, 200);
  rect (0, 100, 200, 100);

  fill(219,46,11);
  circle(350,350,100);

  fill(255,255,255);
  circle(50,50,100);

  strokeWeight (50);
  stroke(219,46,11);
  point(50,50);

  strokeWeight (7);
  stroke(250,255,250);
  point(350,350);
  
  fill('rgba(0,0,0,0)');
  strokeWeight (50);
  stroke(219,46,11);
  arc(0,400,
    700,650,
    Math.PI/180*270,
    Math.PI/180*200);



}