class Hero {
  constructor(x,y,r)
	{
		var options = { 
			density: 1, 
			frictionAir: 1
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("s4.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 6,-20,this.r-18, this.r)
			pop()
			
	}
}
