class Collidable{

    constructor(component, collideHook){
        this.component = component
        this.collideHook = collideHook
    }

    get canvas(){
        return this.component.canvas
    }

    get x(){
        return this.component.x
    }

    get y(){
        return this.component.y
    }

    get location(){
        return {x: this.x, y: this.y}
    }

    get xMin(){
        return this.component.xMin
    }

    get xMax(){
        return this.component.xMax
    }

    get yMin(){
        return this.component.yMin
    }
    
    get yMax(){
        return this.component.yMax
    }

    get collidables(){
        return [this]
    }

    update(dt){
        return this.component.update(dt)
    }

    render(dt){
        return this.component.render(dt)
    }
}