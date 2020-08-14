class Rectangle extends Graphic{

    constructor(canvas, location, height, width, color, fill=true){
        super(canvas, location)
        this.height = height
        this.width = width
        this.color = color
        this.fill = fill
    }

    render(dt){
        const ctx = this.canvas.getContext('2d')
        if(this.fill){
            ctx.fillStyle = this.color        
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }else{
            ctx.strokeStyle = this.color
            ctx.strokeRect(this.x, this.y, this.width, this.height)
        }
        
    }
}