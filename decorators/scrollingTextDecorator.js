class ScrollingTextDecorator extends TextDecorator{

    // speed in letters/sec
    // holdTime is seconds after line is printed, how long to start the next line
    constructor(textComponent, speed, completeHook=null){
        super(textComponent)
        this.textComponent = textComponent
        this.speed = speed
        this.chrCount = 0
        this.timeSinceLastLetterRendered = 0
        this.secondsPerLetter = 1 / this.speed
        this.hookCalled = false
        this.completeHook = completeHook
    }

    get scrollingComplete(){
        return this.chrCount >= this.textComponent.txt.length
    }

    get shouldAddLetter(){
        return this.timeSinceLastLetterRendered >= this.secondsPerLetter
    }

    updateTimeSinceLastLetterRendered(dt){
        this.timeSinceLastLetterRendered += dt
    }

    addLeterAndResetTime(){
        this.chrCount += 1
        this.timeSinceLastLetterRendered = 0
    }

    get txt(){
        return this.scrollingComplete ? this.textComponent.txt : this.textComponent.txt.slice(0, this.chrCount)
    }

    update(dt){
        if(this.scrollingComplete){ 
            if(!this.hookCalled && this.completeHook){ 
                this.completeHook()
                this.hookCalled = true
            }
            return 
        }
        this.updateTimeSinceLastLetterRendered(dt)
        if(this.shouldAddLetter){
            this.addLeterAndResetTime()
        }
    }

    render(dt){
        this.update(dt)
        this.setupCanvas()
        const ctx = this.canvas.getContext('2d')
        ctx.fillText(this.txt, this.x, this.y)
    }

}