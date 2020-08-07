class WithDelay extends Graphic{ 

    constructor(component, delayTime){
        super()
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