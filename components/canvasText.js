class CanvasText extends Graphic{


    constructor(txt, location, canvas, {font= 'UnicaOne', fontSize='30px', fontColor='black', fontWeight=900, textAlign="start"}){
        super(canvas)
        this.txt = txt
        this.font = font
        this.fontSize = fontSize
        this.location = {}
        this.fontWeight = fontWeight
        this.fontColor = fontColor
        this.textAlign = textAlign
        this.locationStrategy = new LocationCalculationStrategy(location, canvas)
    }


    get x(){
        return this.locationStrategy.x
    }

    get y(){
        return this.locationStrategy.y
    }

    setupCanvas(){
        const ctx = this.canvas.getContext('2d')
        ctx.font =  `${this.fontWeight} ${this.fontSize} ${this.font}`
        ctx.fillStyle = this.fontColor
        ctx.textAlign = this.textAlign
    }


    render(dt){
        const ctx = this.canvas.getContext('2d')
        this.setupCanvas()
        ctx.fillText(this.txt, this.x, this.y)
    }
}