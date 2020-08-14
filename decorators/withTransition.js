class WithTransition extends Graphic{

    constructor(component, transitionSeconds = 2){
        super(component.canvas, component.location)
        this.component = component
        this.transitionSeconds = transitionSeconds
        this.displayTime = 0
    }

    get alpha(){
        return this.displayTime / this.transitionSeconds
    }


    render(dt){
        if(this.alpha >= 1){
            const p = this.parent
            p.remove(this)
            p.add(this.component)
        }
        const ctx = this.canvas.getContext('2d')
        ctx.globalAlpha = this.alpha
        this.component.render(dt)
        ctx.globalAlpha = 1
        this.displayTime += dt

    }

}