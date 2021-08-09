class Particle
{
    constructor(x,y,r)
    {
        
        var options=
        {
            
        'density':1.0,
        //'friction':1.0,
        restitution:0.4,
       // AirFriction:1.0
        }
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color("White");
        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
