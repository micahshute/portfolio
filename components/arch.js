class Arch extends Graphic{

    constructor(canvas, location, radius, color){
        super(canvas, location)
        this.radius = radius
        this.color = color
    }

    render(dt){
        const ctx = this.canvas.getContext('2d')
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, Math.PI, 0)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}