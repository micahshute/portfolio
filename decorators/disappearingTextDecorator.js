class DisappearingTextDecorator extends TextDecorator{


    constructor(textComponent, displayTime, completeHook=null){
        super(textComponent)
        this.displayTime = displayTime
        this.completeHook = completeHook
        this.totalTimeDisplayed = 0
    }

    updateTotalTimeDisplayed(dt){
        this.totalTimeDisplayed += dt
    }

    get shouldDerender(){
        return this.totalTimeDisplayed >= this.displayTime
    }

    update(dt){
        this.updateTotalTimeDisplayed(dt)
        if(this.shouldDerender){
            this.textComponent.parent.remove(this)
            if(this.completeHook){ this.completeHook() }
        }
    }




}