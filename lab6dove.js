https://editor.p5js.org/cyprian.dove/sketches/xvAx8apdz
function setup() {
//PRESS ANY KEY TO START
  frameRate(60);
  // Set values here that don't change over the course of the game,
  // but are convenient to name as variables because they are used
  // throughout the code. Eg, "groundY" could be the height of the ground.
  groundY = 350;
  finchHeight = 50;
  finchWidth = 50;
  finchX = 50;
  finchY = 350;
  seedX = random(4000);
  seedY = -100;
  seedWidth=10
  seedFall = random(40,70);
  distanceForCollision = 50;
  seedIsFalling = false;
  seedCaught=false;
  // Set up the canvas.
  createCanvas(400, 400);
  angleMode(DEGREES); // Use this to create shapes with arcs and degrees.
}

function draw() {
  // BACKGROUND
  // Draw the background color and any other shapes that don't change.
  background("skyblue");
  noStroke();
  fill("lightgrey");
  rect(0, groundY, 400, 200);
  // ADD CATCHER
  // Add your catcher by calling its function with appropriate parameters.
  if (mouseIsPressed) {
    console.log("positive");
    addFinchIsPressed(mouseX, finchY);
  } else {
    console.log("negative");
    addFinch(mouseX, finchY);
  }
  // ADD SEED
  
for (let addSeed = 0; addSeed < 5; addSeed++) {
	 addSeed(seedX, seedY);
  if (keyIsPressed === true) {
    seedIsFalling = true;
  }
  if (seedIsFalling === true) {
    seedY = seedY + seedFall;
     }
 if (dist(finchX, finchY, seedX, seedY) < distanceForCollision) {
     console.log("positive");
    seedCaught = true; 
     greenFinch(mouseX,finchY);
  } else {
    console.log("negative");
    seedCaught=false;
  }
}
}
// CATCHER
// Add a function here to build your "catcher" from shapes.
// This function can include parameters that tell it where to sit
// as well as conditions that change its appearance.
function addFinch(x, y) {
  push();
  translate(x, y); // Move the bird to the position requested.
  // Draw the wings.
  noStroke();
  fill("steelblue");
  ellipse(45, -20, 25, 20); // Right eye
  ellipse(5, -20, 25, 20); // Right eye
  // Draw the egs.
  strokeWeight(3);
  stroke("gold");
  line(18, 0, 18, 8); // Left leg
  line(30, 0, 30, 8); // Right leg
  // Draw the feet.
  fill("gold");
  noStroke();
  triangle(12, 10, 18, 4, 24, 10);
  triangle(15, 8, 18, 14, 21, 8);
  triangle(24, 10, 30, 4, 36, 10);
  triangle(27, 8, 30, 14, 33, 8);
  // Draw the body.
  stroke("steelblue");
  strokeWeight(36);
  line(24, -15, 24, -30); // Body (made from a very thick line!)
  // Draw the face.
  noStroke();
  fill("white");
  ellipse(15, -31, 18, 18); // Left eye dome
  ellipse(33, -31, 18, 18); // Right eye dome
  ellipse(24, -11, 18, 18);
  arc(24, -31, 36, 36, 0, 180); // Chin
  // Draw the eyes.
  fill("black");
  ellipse(14, -31, 4, 7); // Left eye
  ellipse(34, -31, 4, 7); // Right eye
  fill("pink");
  ellipse(14, -25, 4, 4);
  ellipse(34, -25, 4, 4);
  // Draw the beak.
  fill("gold");
  triangle(24, -40, 27, -28, 21, -28);
  fill("orange");
  triangle(24, -18, 27, -28, 21, -28);
  pop();
}
function addFinchIsPressed(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill("steelblue");
  ellipse(45, -20, 25, 30);
  ellipse(5, -20, 25, 30);
  // Draw the egs.
  strokeWeight(3);
  stroke("gold");
  line(18, 0, 18, 8); // Left leg
  line(30, 0, 30, 8); // Right leg
  // Draw the feet.
  fill("gold");
  noStroke();
  triangle(12, 10, 18, 4, 24, 10);
  triangle(15, 8, 18, 14, 21, 8);
  triangle(24, 10, 30, 4, 36, 10);
  triangle(27, 8, 30, 14, 33, 8);
  // Draw the body.
  stroke("steelblue");
  strokeWeight(36);
  line(24, -15, 24, -30); // Body (made from a very thick line!)
  // Draw the face.
  noStroke();
  fill("white");
  ellipse(15, -31, 18, 18); // Left eye dome
  ellipse(33, -31, 18, 18); // Right eye dome
  ellipse(24, -14, 24, 24);
  ellipse(24, -31, 38, 38);
  arc(24, -31, 36, 36, 0, 180); // Chin
  // Draw the beak.
  fill("gold");
  triangle(24, -62, 27, -50, 21, -50);
  fill("orange");
  triangle(24, -38, 27, -50, 21, -50);
  pop();
}
function addSeed() {
  push();
  scale(0.1);
  translate(seedX, seedY);
  noStroke();
  fill("darkred");
  for (let petalsDrawn = 0; petalsDrawn < 20; petalsDrawn++) {
    rotate(30);
    ellipse(0, 0, 150, 200);
  }
  fill("red");
  for (let petalsDrawn = 0; petalsDrawn < 15; petalsDrawn++) {
    rotate(55);
    triangle(30, 85, 88, -20, 76, 60);
  }
  fill("salmon");
  for (let petalsDrawn = 0; petalsDrawn < 15; petalsDrawn++) {
    rotate(70);
    triangle(10, 65, 80, -20, 76, 60);
  }
  fill("darkred");
  for (let petalsDrawn = 0; petalsDrawn < 14; petalsDrawn++) {
    rotate(150);
    triangle(30, 75, 78, -20, 76, 60);
  }
  fill("red");
  for (let petalsDrawn = 0; petalsDrawn < 20; petalsDrawn++) {
    rotate(30);
    ellipse(0, 0, 120, 100);
  }
  pop();
}
function greenFinch(x,y){
  fill("green");
  push();
  translate(x, y); // Move the bird to the position requested.
  // Draw the wings.
  noStroke();
  fill("steelblue");
  ellipse(45, -20, 35, 30); // Right eye
  ellipse(5, -20, 35, 30); // Right eye
  // Draw the egs.
  strokeWeight(3);
  stroke("gold");
  line(18, 0, 18, 8); // Left leg
  line(30, 0, 30, 8); // Right leg
  // Draw the feet.
  fill("gold");
  noStroke();
  triangle(12, 10, 18, 4, 24, 10);
  triangle(15, 8, 18, 14, 21, 8);
  triangle(24, 10, 30, 4, 36, 10);
  triangle(27, 8, 30, 14, 33, 8);
  // Draw the body.
  stroke("steelblue");
  strokeWeight(46);
  line(24, -15, 24, -30); // Body (made from a very thick line!)
  // Draw the face.
  noStroke();
  fill("white");
  ellipse(15, -31, 18, 18); // Left eye dome
  ellipse(33, -31, 18, 18); // Right eye dome
  ellipse(24, -11, 18, 18);
  arc(24, -31, 36, 36, 0, 180); // Chin
  // Draw the eyes.
  fill("black");
  ellipse(14, -31, 7, 7); // Left eye
  ellipse(34, -31, 7, 7); // Right eye
  fill("pink");
  ellipse(14, -25, 4, 4);
  ellipse(34, -25, 4, 4);
  // Draw the beak.
  fill("gold");
  triangle(24, -40, 27, -28, 21, -28);
  fill("orange");
  triangle(24, -18, 27, -28, 21, -28);
  pop();
}
// function mousePressed()
//  push();
//  addSeed();
// prevent default
//  return false;
//   pop();
