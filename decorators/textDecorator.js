class TextDecorator{

    constructor(textComponent){
        this.textComponent = textComponent
        this.canvas = this.textComponent.canvas
        this.fontSize = this.textComponent.fontSize
    }

    set parent(parent){
        this.textComponent.parent = parent
    }

    get parent(){
        return this.textComponent.parent
    }

    get txt(){
        return this.textComponent.txt
    }

    get x(){
        return this.textComponent.x
    }

    get y(){
        return this.textComponent.y
    }

    setupCanvas(){
        this.textComponent.setupCanvas()
    }

    get collidables(){
        return this.textComponent.collidables
    }

    render(dt){
        this.update(dt)
        this.textComponent.render(dt)
    }

}