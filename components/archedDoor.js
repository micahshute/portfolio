class ArchedDoor extends Picture{
    constructor(canvas, location, width, height, {label= "", doorColor="#6e2c00", knobColor="gold", labelColor="black", labelSize=null, font="Iceland"}){
        super(canvas, location)
        this.width = width
        this.height = height
        if(typeof width == "string"){
            width = Number.parseInt(width.substring(0, width.length - 1)) * this.canvas.width / 100
        }
        if(typeof height == "string"){
            height = Number.parseInt(height.substring(0, height.length - 1)) * this.canvas.height / 100
        }
        const archRadius = width / 2
        const rectHeight = height - archRadius
        const rectUpperLeft = {
            x: this.location.x - width / 2,
            y: this.location.y - height / 2 + archRadius 
        }
        const archCenter = {
            x: this.location.x,
            y: rectUpperLeft.y + 1
        }

        const doorknobLocation = {
            x: this.location.x + archRadius - (0.2 * width),
            y: rectUpperLeft.y - archRadius + (0.6) * height
        }

        this.xMin = rectUpperLeft.x
        this.xMax = rectUpperLeft.x + width
        this.yMin = rectUpperLeft.y - archRadius
        this.yMax = rectUpperLeft.y + rectHeight
        
        const doorknobSize = width / 15
        const rect = new Rectangle(canvas, rectUpperLeft, rectHeight, width, doorColor)
        const shadow = new Rectangle(this.canvas, {x: rectUpperLeft.x + 5, y: rectUpperLeft.y + 1}, rectHeight - 2, width - 10, "black", false)
        const arch = new Arch(canvas, archCenter, archRadius, doorColor)
        const doorknob = new Circle(canvas, doorknobLocation, doorknobSize, knobColor)
        const doorknobShadow = new Circle(canvas, {x: doorknobLocation.x - 2, y: doorknobLocation.y + 3}, doorknobSize, 'rgba(50,50,50,0.5)')
        this.add(rect)
        this.add(arch)
        this.add(doorknobShadow)
        this.add(doorknob)
        if(label.length > 0){
            const labelStart = {
                x: rectUpperLeft.x + 0.5 * width,
                y: rectUpperLeft.y + 0.05 * height
            }
            const alottedWidth = 0.7 * width
            const size = labelSize ? labelSize : this.determineLabelSize(label, alottedWidth, font)
            const doorLabel = new CanvasText(label, labelStart, this.canvas, {font: this.font, fontSize: `${size}px`, fontColor: labelColor, textAlign: "center"})
            this.add(doorLabel)
        }
        // this.add(shadow)
    }

    determineLabelSize(label, alottedWidth, font){
        let fontSize = 31
        let textLength = Infinity
        while(textLength > alottedWidth && fontSize > 5){
            fontSize--
            const ctx = this.canvas.getContext('2d')
            ctx.font = `${fontSize}px ${font}`
            textLength = ctx.measureText(label).width 
        }
        return fontSize
    }
}