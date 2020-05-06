const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,50,50);
    box2 = new Box(900,350,50,50);
    box3 = new Box(700,200,50,50);
    box4= new Box(900,200,50,50);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(800,350,50,50);
    log1 = new Log(700,300,100,20,PI/7);
    log2 = new Log(700,300,100,20,PI/7);
}

function draw(){
    background(0);
    text("x"+mouseX+"y"+mouseY,1100,20);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
}