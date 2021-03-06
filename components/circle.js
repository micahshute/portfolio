class Circle extends Graphic{

    constructor(canvas, location, radius, color = "white"){
        super(canvas, location)
        this.radius = radius
        this.color = color
    }

    render(dt){
        const ctx = this.canvas.getContext('2d')
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
    } 
}