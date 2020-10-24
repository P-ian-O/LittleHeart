const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const BG_COLOR = [122, 240, 107];
let littleHeart;
let littleHeartAnim;

function preload(){
    const littleHeartSpritesheet = loadSpriteSheet("img/32littleHeart.png", 64,64,6);
    littleHeartAnim = loadAnimation(littleHeartSpritesheet);
    littleHeart = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 64, 64);
    littleHeart.movespeed = 1;
}

function setup(){
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    littleHeart.addAnimation("move", littleHeartAnim);
    littleHeart.addImage("still",loadImage("img/littleHeartSingle.png"));
    littleHeart.setDefaultCollider();
}

function update(object) {
    if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
      if (keyDown("up")) {
        object.addSpeed(2, 270);
      }
      if (keyDown("down")) {
        object.addSpeed(2, 90);
      }
      if (keyDown("left")) {
        object.addSpeed(2, 180);
        object.mirrorX(-1);
      }
      if (keyDown("right")) {
        object.addSpeed(2, 0);
        object.mirrorX(1);
      }
    } else {
      object.setSpeed(0);
    }
    drawObject(object);
  }

  function drawObject(object) {
      if (object.getSpeed()> 0.0001) {
          object.changeAnimation("move");
      } else {
          object.changeImage("still");
      }
      littleHeart.limitSpeed(littleHeart.moveSpeed);
      drawSprite(object);
  }

  function draw() {
    background(BG_COLOR);
    update(littleHeart);
  }
  
