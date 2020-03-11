const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var cannon, ball;
var backgroundImg,platform;
var target1, target2, target3;
var border;
var bs1, bs2, bs3;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    target1 = Bodies.circle(900,200-15,10);
    World.add(world,target1);
    target2 = Bodies.circle(1100,70-15,10);
    World.add(world,target2);
    target3 = Bodies.circle(1000,330-15,10);
    World.add(world,target3);
    var cannon_options = {
        isStatic: true
    }
    cannon = Bodies.circle(220,200,20, cannon_options);
    World.add(world,cannon);
    border = Bodies.rectangle(1180,200,20,400);
    bs1 = Bodies.rectangle(900,200,50,10);
    bs2 = Bodies.rectangle(1100,70,50,10);
    bs3 = Bodies.rectangle(1000,330,50,10);

    var ball_options = {
        restitution : 1.0,
        density : 1.0
    }
    ball = Bodies.circle(290,210,10, ball_options);
    World.add(world,ball);

    var options = {
        bodyA : ball,
        bodyB : cannon,
        stiffness: 0.004,
        length : 100
      }
      var string = Constraint.create(options);
      World.add(world,string);
      
      fill("White");
      

}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);

    
    fill ("brown");
   // rectMode(CENTER);
    rect(border.position.x,border.position.y,20,400);

    fill ("brown");
     rectMode(CENTER);
     rect(bs1.position.x,bs1.position.y,50,10);

     fill ("brown");
     rectMode(CENTER);
     rect(bs2.position.x,bs2.position.y,50,10);
 
     fill ("brown");
     rectMode(CENTER);
     rect(bs3.position.x,bs3.position.y,50,10);

    fill("blue");
    ellipseMode(RADIUS);
    ellipse(cannon.position.x,cannon.position.y,20);   

    
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(target1.position.x,target1.position.y,10);
    
    
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(target2.position.x,target2.position.y,10);   

      
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(target3.position.x,target3.position.y,10);   

    fill("blue");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,10);   

    strokeWeight(1);
    stroke("white");
    line(ball.position.x,ball.position.y,cannon.position.x,cannon.position.y)


   // target1.display();
    //target2.display();
    ground.display();
    
    platform.display();
    //log6.display();
    //cannon.display();    
}

function mouseDragged(){
   Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
   // ball.position.y = mouseY;
   // ball.position.x = mouseX;
}


