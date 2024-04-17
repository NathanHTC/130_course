/* exported setup, draw */

let seed = 239;

const starColor = "#FFF";
const spaceColor = "#000";
const planetColor = "#FF6347"; // A reddish color reminiscent of Mars
const nebulaColor = "#483D8B"; // Dark slate blue for the nebula

function setup() {
  createCanvas(800, 400);
  createButton("reimagine").mousePressed(() => seed++);
}

function draw() {
  randomSeed(seed);

  background(spaceColor);

  noStroke();

  // Draw nebula backdrops
  fill(nebulaColor);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 100);
    ellipse(x, y, size, size);
  }

  // Draw stars
  fill(starColor);
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 3);
    ellipse(x, y, size, size);
  }

  // Draw a planet
  fill(planetColor);
  ellipse(width / 4, height / 2, 100, 100);

  // Add rings to the planet
  stroke(planetColor);
  noFill();
  strokeWeight(2);
  ellipse(width / 4, height / 2, 140, 50);

  noStroke();
  fill(nebulaColor);
  // Dynamic nebula elements
  let scrub = mouseX / width;
  for (let i = 0; i < 5; i++) {
    let x = width * (random() + scrub) % width;
    let y = random(height);
    let size = random(50, 150);
    ellipse(x, y, size, size * 0.5);
  }
}
