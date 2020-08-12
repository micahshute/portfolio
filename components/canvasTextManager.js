class CanvasTextManager extends Picture{

    constructor(txt, canvas, location, {
        endingX = "5%", 
        shouldScroll = false, 
        shouldDisappearSecondsAfterScroll = false, 
        scrollCompleteHook = () => null, 
        disappearedCompleteHook = () => null,
        scrollRate = 10,
        shouldDisappear = false,
        secondsToDisappear = 5,
        font = "UnicaOne",
        fontSize = "30px",
        fontColor = "white",
        fontWeight = "900",
        textAlign = "center",
        calculateImmediately = false
        }){
        super(canvas, location)
        this.canvas = canvas
        this.txt = txt 
        this.endingX = endingX 
        this.shouldScroll = shouldScroll 
        this.shouldDisappearSecondsAfterScroll = shouldDisappearSecondsAfterScroll
        this.shouldDisappear = shouldDisappear
        this.scrollCompleteHook = scrollCompleteHook 
        this.disappearedCompleteHook = disappearedCompleteHook 
        this.scrollRate = scrollRate 
        this.secondsToDisappear = secondsToDisappear 
        this.font = font
        this.fontSize = fontSize 
        this.fontColor = fontColor 
        this.fontWeight = fontWeight
        this.chrSize = Number.parseInt(this.fontSize.substring(0, this.fontSize.length - 2))
        this.textAlign = textAlign
        
        this.elapsedTime = 0
        this.childrenQueue = []
        this.rowsCalculated = false
        if(calculateImmediately){
            this.calculateRowsAndAddChildren()
        }
        
    }
 

    get totalWidth(){
        return this.canvas.clientWidth
    }

    get totalHeight(){
        return this.canvas.clientHeight
    }

    get pixelsFromEndX(){
        const percentFromRight = Number.parseInt(this.endingX.substring(0, this.endingX.length - 1)) 
        return percentFromRight * this.totalWidth / 100
    }


    get txtRows(){
        const words = this.txt.split(' ')
        const alottedTxtWidth = this.totalWidth - this.pixelsFromEndX - this.x
        // console.log('----')
        // console.log(`Total Width: ${this.totalWidth}`)
        // console.log(`alottedTxtWidth: ${alottedTxtWidth}`)
        // console.log(`pixelsFromEndX: ${this.pixelsFromEndX}`)
        // console.log(`X: ${this.x}`)
        const rows = []
        let rowPixelCount = 0
        let rowWordStart = 0
        let rowWordEnd = -1
        let currentRow = []
        const ctx = this.canvas.getContext('2d')
        ctx.font = `${this.fontSize} ${this.font}`
        for(let i = 0; i < words.length; i++){
            const wordLen = ctx.measureText(words[i] + " ").width
            if((wordLen + rowPixelCount) < alottedTxtWidth || rowWordEnd < 0){
                rowPixelCount += wordLen
                currentRow.push(words[i])
                rowWordEnd += 1
            }else{
                rows.push(currentRow.join(' '))
                // console.log(rows[rows.length - 1])
                // console.log(`Calc row length: ${rowPixelCount}`)
                // console.log(`Row Len: ${ctx.measureText(rows[rows.length - 1]).width}`)
                currentRow = []
                currentRow.push(words[i])
                rowWordEnd += 1
                rowWordStart = rowWordEnd
                rowPixelCount = wordLen
            }
        }
        rows.push(currentRow.join(' '))
        return rows
    }


    calculateRowsAndAddChildren(){
        const rows = this.txtRows
        let txtComponents = rows.map((r, i) => new CanvasText(
            r, 
            {
                x: this.locationStrategy.inputLocation.x,
                y: this.y + this.chrSize * i
            }, 
            this.canvas,
            {
                font: this.font, 
                fontSize: this.fontSize, 
                fontColor: this.fontColor, 
                fontWeight: this.fontWeight,
                textAlign: this.textAlign
            })
        )

        if(this.shouldDisappear){
            txtComponents = txtComponents.map((tc, i) => new DisappearingTextDecorator(tc, this.secondsToDisappear, i == tc.length - 1 ? this.disappearedCompleteHook : () => null))
        } 

        if(this.shouldScroll){
            txtComponents = txtComponents.map((tc, i) => new ScrollingTextDecorator(
                tc, 
                this.scrollRate,
                () => {
                    if(this.childrenQueue.length > 0){
                        this.children.push(this.childrenQueue.shift())
                    }else{
                        if(this.shouldDisappearSecondsAfterScroll){
                            window.setTimeout(() => this.parent.remove(this), this.shouldDisappearSecondsAfterScroll * 1000)
                        }
                    }
                    if(i == txtComponents.length - 1){
                        this.scrollCompleteHook()
                    }
                    
                })
            )
            this.children.push(txtComponents[0])
            this.childrenQueue = this.childrenQueue.concat(txtComponents.slice(1, txtComponents.length))
        }else{
            this.children = txtComponents
        }
        this.rowsCalculated = true
    }

    render(dt){
        if(!this.rowsCalculated){
            this.calculateRowsAndAddChildren()
        }
        this.elapsedTime += dt
        if(this.shouldDisappear && this.elapsedTime > this.secondsToDisappear){
            this.parent.remove(this)
        }else{
            super.render(dt)
        }
    }

}