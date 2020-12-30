class String{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness = 0.04
        }
        this.string = Constraint.create(options);
        World.add(world,this.string);
    }
    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight("3");
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }

}