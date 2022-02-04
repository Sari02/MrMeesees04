class Plataforma {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
      //'restitution':0.8,
        //'friction':1.0,
        //'density':0.04,
      //collisionFilter: {
        //group: 1
    //}
      
  }
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //push();
    //translate(pos.x, pos.y);
    rectMode(CENTER);
    //strokeWeight(4);
    //stroke("pink");
    fill("gray");
    rect(pos.x, pos.y, this.width, this.height);
    //pop();
  }
};
