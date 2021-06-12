class computerArcher {

        constructor(x,y){
            var options={
            isStatic:true
            };
           
           this.x = x;
           this.y = y;
           this.body = Bodies.rectangle(x,y,options);
           this.image = loadImage("./assets/playerArcher.png");
           World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
            if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
              this.angle += 0.02;
            }
        
            if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
              this.angle -= 0.02;
            }

            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,this.x,this.y);
            pop();
    
            
    
        
        
        
    }
}


    
