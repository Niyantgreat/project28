
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


//const Constraint=Matter.Constraint
var  paper1,ground1;	
var world,boxPosition,launcher1;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground1 = Bodies.rectangle(width/2, height-10, width, 10 , {isStatic:true} );
 	World.add(world, ground1);

 	boxPosition=width/2-100
 	boxY=height-50;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxleftSprite.x, boxleftSprite.y, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxBase.x, boxBase.y, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxrightSprite.x , boxrightSprite.y, 20,100 , {isStatic:true} );
	 World.add(world, boxRightBody);
	 	
	paper1=new Paper(130,200,20);
	//paper1.body=Bodies.circle(height/6, 200, 20, option1)
	//paper1=new Paper(height/6,200,20,option1);
	//World.add(world, paper1);
	
	
	launcher1 =new Launcher (paper1.body,{x:130,y:200})
	// Online Code
	//dustbinObj=new dustbin(1200,650);
	//paperObject=new paper(200,450,40);
	//groundObject=new ground(width/2,670,width,20);
	//Create a Ground

Engine.run(engine);
	
  
}


function draw() {
	background("grey");
Engine.update(engine);
  //rectMode(CENTER);
  


 
 // ellipse(paper1.position.x,paper1.position.y, 20,20);
 //launcher1.display();

  //dustbinObj.display();
  //paperObject.display();
  //groundObject.display();
  paper1.display();
  launcher1.display();
  drawSprites();

 
}

function keyPressed() {


  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1,paper1.position,{x:55,y:-75});
    
  	}


	
	else if (keyCode === LEFT_ARROW) {
  
		boxleftSprite.x=boxleftSprite.x-20;  
		boxrightSprite.x=boxrightSprite.x-20;
		boxBase.x=boxBase.x-20;
	  translation={x:-20,y:0}
	  Matter.Body.translate(boxRightBody, translation)
	  Matter.Body.translate(boxLeftBody, translation)
	  Matter.Body.translate(boxBase, translation)
	  
  
	} else if (keyCode === RIGHT_ARROW) {
		boxleftSprite.x=boxleftSprite.x+20;  
		boxrightSprite.x=boxrightSprite.x+20;
		boxBase.x=boxBase.x+20;
		translation={x:20,y:0}
	  Matter.Body.translate(boxRightBody, translation)
	  Matter.Body.translate(boxLeftBody, translation)
	  Matter.Body.translate(boxBase, translation)
	}
  }
	
   
  function mouseDragged(){
	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
	
	
	}
 	function mouseReleased (){
	launcher1.fly();
	
	}
