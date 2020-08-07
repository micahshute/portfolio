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
        this.xCoordinateDynamic = false
        this.yCoordinateDynamic = false
        if(typeof location.x === 'string' && location.x[location.x.length - 1] === "%"){
            this.xCoordinateDynamic = true
            this.location.x = parseInt(location.x.substring(0, location.x.length - 1)) / 100
        }else{
            this.location.x = location.x
        }
        if(typeof location.y === 'string' && location.y[location.y.length - 1] === "%"){
            this.yCoordinateDynamic = true
            this.location.y = parseInt(location.y.substring(0, location.y.length - 1)) / 100
        }else{
            this.location.y = location.y
        }
    }

    get dynamicX(){
        return this.canvas.width * this.location.x
    }

    get dynamicY(){
        return this.canvas.height * this.location.y
    }

    get x(){
        return this.xCoordinateDynamic ? this.dynamicX : this.location.x
    }

    get y(){
        return this.yCoordinateDynamic ? this.dynamicY : this.location.y 
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