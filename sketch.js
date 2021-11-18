let mic;
let rectX = 0;
let rectY = 0;
let fr = 30; //starting FPS
let clr;
let x = 0;
let y = 0;
let xLeft = 525;
let xRight = 375;
let y2 = 440;



function setup() {
  createCanvas(900, 900);
  // Attempt to refresh at starting FPS
  frameRate(fr);
  clr = color(136, 79, 176);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  //background with transparancy
  background(0, 0, 35, 25);
  noStroke();

  if (mouseIsPressed) {
    // Move Rectangle in relation to deltaTime
    rectX = rectX + random(width) * (deltaTime / 50);
    // Move Rectangle in relation to deltaTime
    rectY = rectY + random(height) * (deltaTime / 50);
    if (rectX >= width) {
      // If you go off screen.
      if (fr === 20) {
        clr = color(136, 79, 176);
        fr = 30;
        frameRate(fr); // make frameRate 15 FPS
      } else {
        clr = color(255);
        fr = 20;
        frameRate(fr); // make frameRate 20 FPS
      }
      rectX = 0;
    }
    if (rectY >= height) {
      // If you go off screen.
      if (fr === 20) {
        clr = color(136, 79, 176);
        fr = 30;
        frameRate(fr); // make frameRate 15 FPS
      } else {
        clr = color(255);
        fr = 20;
        frameRate(fr); // make frameRate 20 FPS
      }
      rectY = 0;
    }
    fill(clr);
    rect(rectX, rectY, random(0, 900), random(0, 900));
  } else {
    //blinking stars
    var galaxy = {
      locationX: random(width),
      locationY: random(height),
      size: random(10, 100)
    }

    fill(136, 79, 176);
    ellipse(galaxy.locationX, galaxy.locationY, galaxy.size, galaxy.size);
  }

  fill(227, 194, 184);

  //face
  face();

  function face() {
    fill(227, 194, 184);
    quad(250, 600, 650, 600, 600, 300, 300, 300);
  }

  //nose
  nose();

  function nose() {
    fill(254, 214, 208);
    triangle(440, 520, 460, 520, 450, 470);
    fill(212, 157, 152);
    triangle(440, 520, 460, 520, 450, 530);
  }

  //EARs
  noStroke()
  fill(227, 194, 184);

  //Moving Ears
  moveEARs();

  function moveEARs() {
    var deltay = (mouseY) / 350 * 8;
    ellipse(250, 500 + deltay, 100);
    ellipse(650, 500 + deltay, 100);
  }

  //Eye
  Eye();

  function Eye() {
    fill(0);
    ellipse(xLeft, y2, 25);
    ellipse(xRight, y2, 25);
    y2 = map(mouseY, 0, height, 430, 450, true);
    xLeft = map(mouseX, 0, width, 515, 535, true);
    xRight = map(mouseX, 0, width, 365, 385, true);
  }

  //Hair
  Hair();

  function Hair() {
    push();
    fill(0);
    square(250, 250, 150, 80, 0, 10, 10);
    square(500, 250, 150, 0, 80, 10, 10);
    square(440, 250, 100, 0, 80, 10, 10);
    square(400, 250, 100, 0, 80, 10, 10);
    fill(255, 255, 255)
    quad(270, 390, 280, 390, 280, 310, 270, 310);
    quad(290, 390, 300, 390, 300, 310, 290, 310);
    pop();
  }

  //mouth
  mouth();

  function mouth() {
    fill(209, 51, 26);
    let vol = mic.getLevel();
    ellipse(450, 570, 70, vol * 300);
  }

  //movingcircle
  movingcircle();

  function movingcircle() {
    x = lerp(x, mouseX, 0.5);
    y = lerp(y, mouseY, 0.5);

    fill(136, 79, 176);
    stroke(255);
    ellipse(x, y, 66, 66);
  }
}
