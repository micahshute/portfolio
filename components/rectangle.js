class Rectangle extends Graphic{

    constructor(canvas, location, height, width, color){
        super(canvas, location)
        this.height = height
        this.width = width
        this.color = color
    }

    render(dt){
        const ctx = this.canvas.getContext('2d')
        ctx.fillStyle = this.color        
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}