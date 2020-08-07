class CanvasTextSequence extends Picture{

    constructor(txtManagers, {timeBetween = 1, timeToDisplay = 5, timeAfterScroll = 2, completeHook = () => null}){
        super()
        this.txtManagers = txtManagers
        this.areScrolling = txtManagers[0].shouldScroll
        this.timeBetween = timeBetween
        this.timeToDisplay = timeToDisplay
        this.completeHook = completeHook
        if(this.areScrolling){
            
            for(let tm of this.txtManagers){
                const delayCalc = this.timeToDisplay - tm.txt.length / tm.scrollRate 
                const timeAfterScrollCalculation = delayCalc < 0 ? 0 : delayCalc
                const decidedTimeAfterScroll = timeAfterScroll || timeAfterScrollCalculation
                tm.shouldDisappearSecondsAfterScroll = decidedTimeAfterScroll
                tm.scrollCompleteHook = () => {
                    window.setTimeout(() => {
                        this.beginIntermediateSequence()
                    }, decidedTimeAfterScroll * 1000)
                }
            }
        }else{
            
            for(let tm in this.txtManagers){
                tm.shouldDisappear = true
                tm.secondsToDisappear = this.timeToDisplay
                tm.disappearedCompleteHook = () => {
                    this.beginIntermediateSequence()
                }
            }
        }
        this.add(this.txtManagers.shift())
    }

    beginIntermediateSequence(){
        if(this.txtManagers.length == 0){
            this.parent.remove(this)
            this.completeHook()
        }else{
            window.setTimeout(() => {
                this.add(this.txtManagers.shift())
            }, this.timeBetween * 1000)
        }

    }

}