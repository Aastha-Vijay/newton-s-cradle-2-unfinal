class Bob{
    constructor(x,y,color){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.color = color;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("white");
        fill(this.color);
        ellipse(0,0,100,100);

        pop();
    }

    
}