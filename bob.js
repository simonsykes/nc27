class Bob{
    constructor(x,y,r){
        var optitons={
            isStatic: false,
            restitution:1,
            friction:0,
            density:0.8,
        }
        this.r=r;

        this.body=Bodies.circle(x,y,r/2,optitons);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill("red");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}