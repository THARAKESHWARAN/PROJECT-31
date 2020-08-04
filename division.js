class Division {

    constructor(x){
        var options = {
            isStatic: true
        }
        this.width = 10;
        this.height = 350;
        this.body = Bodies.rectangle(x, 620, this.width, 350, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        fill(255);
        stroke(255);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}