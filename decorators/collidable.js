class Collidable{

    constructor(component, collideHook){
        this.component = component
        this.collideHook = collideHook
    }

    get priority(){
        return this.component.priority
    }

    get height(){
        return this.component.height
    }

    set height(newHeight){
        this.component.height = height
    }

    get width(){
        return this.component.width
    }

    set width(newWidth){
        this.component.width = width
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

    set location(newLocation){
        this.component.location = newLocation
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