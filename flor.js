class floor{
    constructor(x,y){
    var flor={isStatic:true}
    this.lol=Bodies.rectangle(x,y,1200,20,flor)
    World.add(world,this.lol)
    }
    
    display(){
    var pos=this.lol.position
    rectMode(CENTER)
    rect(pos.x,pos.y,1200,20)
    fill("aqua")
    }
    }