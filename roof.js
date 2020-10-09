class Roof{
    constructor(x,y,w,h){
        var optitons={
            isStatic: true
        }
         this.w=w;
         this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,optitons);
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,this.w,this.h);
        pop();
    }
}