class Door extends Picture{

    static doorHeight(){ return "20%"}
    static doorHeightPx(){
        const canvas = document.querySelector('canvas')
        return canvas.height * 0.2
    }

    static doorWidth(){ return 0.15 * document.querySelector('canvas').height }


    constructor(canvas, location, width, height, {label= "", doorColor="#6e2c00", knobColor="gold", labelColor="black", labelSize=null, font="Cinzel"}){
        super(canvas, location)
        this.width = width
        this.height = height

        if(typeof width == "string"){
            width = Number.parseInt(width.substring(0, width.length - 1)) * this.canvas.width / 100
        }
        if(typeof height == "string"){
            height = Number.parseInt(height.substring(0, height.length - 1)) * this.canvas.height / 100
        }
        const rectHeight = height
        const rectUpperLeft = {
            x: this.location.x,
            y: this.location.y 
        }
        const doorknobLocation = {
            x: this.location.x  + (0.8 * width),
            y: rectUpperLeft.y + 0.5 * height
        }

        this.xMin = rectUpperLeft.x
        this.xMax = rectUpperLeft.x + width
        this.yMin = rectUpperLeft.y
        this.yMax = rectUpperLeft.y + rectHeight
        
        const doorknobSize = width * (1/15)
        const rect = new Rectangle(canvas, rectUpperLeft, rectHeight, width, doorColor)
        const shadow = new Rectangle(this.canvas, {x: rectUpperLeft.x + 0.05 * width, y: rectUpperLeft.y + 0.05 * width}, rectHeight - 0.06 * width, 0.9 * width, "black", false)
        const doorknob = new Circle(canvas, doorknobLocation, doorknobSize, knobColor)
        const doorknobShadow = new Circle(canvas, {x: doorknobLocation.x - 2, y: doorknobLocation.y + 3}, doorknobSize, 'rgba(50,50,50,0.5)')
        this.add(rect)
        this.add(doorknobShadow)
        this.add(doorknob)
        if(label.length > 0){
            const alottedWidth = 0.65 * width
            const {size, txtWidth, txtHeight} = labelSize ? this.getSize(label, labelSize, font) : this.determineLabelSize(label, alottedWidth, font)
            console.log(size)
            console.log(this.canvas.width)
            console.log(label)
            console.log(font)
            console.log(width)
            console.log('----')
            const labelStart = {
                x: rectUpperLeft.x + 0.5 * width,
                y: rectUpperLeft.y + 0.15 * height + txtHeight / 2
            }
            const doorLabel = new CanvasText(label, labelStart, this.canvas, {font: font, fontSize: `${size}px`, fontColor: labelColor, textAlign: "center", fontWeight: 900})
            this.add(doorLabel)
        }
        this.add(shadow)
    }

    getSize(label, labelSize, font){
        const ctx = this.canvas.getContext('2d')
        ctx.font = `${labelSize}px ${font}`
        return {
            size: labelSize,
            txtWidth: this.canvas.getContext('2d').measureText(label).width,
            txtHeight: labelSize
        }
    }

    determineLabelSize(label, alottedWidth, font){
        let fontSize = 31
        let textLength = Infinity
        let width = 0
        while(textLength > alottedWidth && fontSize > 5){
            fontSize--
            const ctx = this.canvas.getContext('2d')
            ctx.font = `${fontSize}px ${font}`
            textLength = ctx.measureText(label).width 
            width = textLength
            console.log("****")
            console.log(label)
            console.log(textLength)
            console.log(alottedWidth)
            console.log(fontSize)
            console.log(ctx.font)
            console.log(ctx.measureText(label).width )
            console.log(this.canvas.width)
            console.log("****")
        }
        if(fontSize > 25){
            fontSize -= 2
        }
        return {size: fontSize, txtWidth: width, txtHeight: fontSize}
    }
}