class WithDelay extends Graphic{ 

    constructor(component, delayTime){
        super(component.canvas, {x: -10, y: -10}, -1)
        this.delayTime = delayTime
        this.displayTime = 0
        this.component = component
    }

    render(dt){
        this.displayTime += dt
        if(this.displayTime > this.delayTime){
            this.parent.add(this.component)
            this.parent.remove(this)
        }
    }
}