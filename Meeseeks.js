class Meeseeks {
    constructor(x, y, width, height) {
      var options = {
        //'density':1.0,
        'friction': 1.0,
        'restitution' : 0.0
        //collisionFilter: {
          //group: 1
      //}
        //'restitution': 0.5
      };
      this.body = Matter.Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };

    // this.intersect = function(other){

    // };
    // function intersect(other) {
    //   return true;
    // };

    display(){
      var pos = this.body.position;
      var move = 1;
      //pos.x = mouseX;
      //pos.y = mouseY;

      //A
      if (keyIsDown(65)){
          var working = willCOllide(pos);
          if(working == true){
            console.log("colliding");
          }else {
          pos.x = pos.x - move;
          }
       }
      //D
      if (keyIsDown(68)){
        var working = willCOllide(pos);
        if(working == true){
          console.log("colliding");
        }else {
          pos.x = pos.x + move;
        }
      }

      //W
      if (keyIsDown(87)){
        var working = willCOllide(pos);
        if(working == true){
          console.log("colliding");
        }else{
          pos.y = pos.y - move;
        }
      }

      //S
      if (keyIsDown(83)){
        var working = willCOllide(pos);
        if(working == true){
          console.log("colliding");
        }else{
          pos.y = pos.y + move;
        }
      }

      if (pos.y > 900){
        pos.y = 835;
        //this.options = 'default';
      }
      if (pos.y < 0){
        pos.y = 25;
        //this.options = 'default';
      }

      if (pos.x < 0){
        pos.x = 25;
        //this.options = 'default';
      } 
      if (pos.x > 1800){
        pos.x = 1775;
        //this.options = 'default';
      }
      

      //var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      //strokeWeight(3);
      stroke('white')
      fill('blue')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };

  function willCOllide(meeseksposition){
    var plats = [[500,100,70,100],[140,180,140,20],[300,150,40,300],[200,700,140,20],[450,715,60,300],[660,650,140,20],[880,690,60,350],[1230,650,600,20],[1380,750,700,20],[1750,600,20,320],[1150,450,140,20],[1450,300,140,20],[1720,180,150,20]];
    for ( var i = 0; i < plats.length; i++){
      if (meeseksposition.x - plats[i][0] < plats[i][2]/2 + 50/2
              && plats[i][0] - meeseksposition.x < plats[i][2]/2 + 50/2
              && meeseksposition.y - plats[i][1] < plats[i][3]/2 + 50/2
              && plats[i][1] - plats[i][1] < plats[i][3]/2 + 50/2) {
              
              return true;
            }
            // else {
            //   return false;
            // }
    }
  }



  // tostadora = new Plataforma(500,100,70,100);

  //   plat1 = new Plataforma(140,180,140,20) ;
  //   plat2 = new Plataforma(300,150,40,300);
  //   plat3 = new Plataforma(200,700,140,20);
  //   plat4 = new Plataforma(450,715,60,300);
  //   plat5 = new Plataforma(660,650,140,20);
  //   plat6 = new Plataforma(880,690,60,350);
  //   plat7 = new Plataforma(1230,650,600,20);
  //   plat8 = new Plataforma(1380,750,700,20);
  //   plat9 = new Plataforma(1750,600,20,320);
  //   plat10 = new Plataforma(1150,450,140,20);
  //   plat11 = new Plataforma(1450,300,140,20);

  //   platultima = new Plataforma(1720,180,150,20) ;
  