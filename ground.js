class Ground {
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }

    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        push();
        fill(255);
        stroke(255);
        rect(posX, posY, this.width, this.height);
        pop();
    }
    
}