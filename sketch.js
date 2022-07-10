    var PLAY = 1;
    var END = 0;
    var gameState = PLAY;

    var rocket,rocketflying,rocketleft,rocketright
    var star,star2;
    var score;

    function preload(){
    rocketflying = loadImage("rocket4.0.png")
    rocketright = loadImage("rocket3.0.png")
    rocketleft = loadImage("rocket2.0.png")
    star2 = loadImage("star.png")
  }

  function setup() {
    createCanvas(1000, 500);
  rocket = createSprite(500,250,20,20);
  star = createSprite(300,300,10,10);
  rocket.addImage(rocketflying)
  rocket.addImage(rocketright)
  rocket.addImage(rocketleft)
  rocket.scale=0.2
  star.addImage(star2)
  star.scale=0.1
  }

  function draw() {
    background("purple") 
  
    if(keyDown("LEFT_ARROW")){
        rocket.x = rocket.x - 3;
    rocket.changeAnimation(rocketleft)    
    }
    if(keyDown("RIGHT_ARROW")){
    rocket.x = rocket.x + 3;
    rocket.changeAnimation(rocketright)
      
    }
    if(keyDown("space")){

        rocket.y = rocket.y -3
    }
    if(keyDown("DOWN_ARROW")){

        rocket.y = rocket.y +3;
    }
  drawSprites();
    }
