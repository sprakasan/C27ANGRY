class slingshot {
constructor (bodyX,bodyY){
    var options={
        bodyA:bodyX,
        bodyB:bodyY,
        stiffness: 0.04, 
        length: 100
    } 
    this.ss= Constraint.create(options)
    World.add(world,this.ss)
} 
display(){
var pointA = this.ss.bodyA.position
var pointB= this.ss.bodyB.position
line (pointA.x,pointA.y, pointB.x,pointB.y)
} 
}