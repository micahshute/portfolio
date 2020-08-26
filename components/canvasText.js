class CanvasText extends Graphic{


    constructor(txt, location, canvas, {font= 'UnicaOne', fontSize='30px', fontColor='black', fontWeight=900, textAlign="start"}){
        super(canvas, location)
        this.txt = txt
        this.font = font
        this.fontSize = fontSize
        this.fontWeight = fontWeight
        this.fontColor = fontColor
        this.textAlign = textAlign
    }


    setupCanvas(){
        const ctx = this.canvas.getContext('2d')
        ctx.font =  `${this.fontWeight} ${this.fontSize} ${this.font}`
        ctx.fillStyle = this.fontColor
        ctx.textAlign = this.textAlign
    }

    get maxMins(){
        const ctx = this.canvas.getContext('2d')
        this.setupCanvas()
        const width = ctx.measureText(this.txt).width
        switch(this.textAlign){
            case "center":
                return {xMax: this.x + width / 2, xMin: this.x - width / 2, yMax: this.y + Number.parseInt(this.fontSize) / 2, yMin: this.y - Number.parseInt(this.fontSize) / 2}
            case "start":
                return {xMax: this.x + width, xMin: this.x, yMax: this.y + Number.parseInt(this.fontSize) / 2, yMin: this.y - Number.parseInt(this.fontSize) / 2}
            default:
                alert(`Implement ${this.textAlign} in dimensions for collidable`)
        }
    }

    get xMax(){
        return this.maxMins.xMax
    }

    get xMin(){
        return this.maxMins.xMin
    }

    get yMax(){
        return this.maxMins.yMax
    }

    get yMin(){
        return this.maxMins.yMin
    }


    render(dt){
        const ctx = this.canvas.getContext('2d')
        this.setupCanvas()
        ctx.fillText(this.txt, this.x, this.y)
    }
}