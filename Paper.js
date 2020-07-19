class Paper{
    constructor(x,y){
        var options ={
            isStatic: false,
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,23,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(0,150,255);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,70);
    }
}