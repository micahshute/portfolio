class Ground extends Graphic{

    static newFromLimits(xmin, xmax, ymin, ymax){
        const location = {x: xmin, y: ymin}
        const height = ymax - ymin
        const width = xmax - xmin
        return new this(location, height, width)
    }


    constructor(location, height, width, img){
        super(document.querySelector('canvas'), location, -1)
        this.height = height
        this.width = width
        this.img = img
        this.xMin = this.location.x
        this.yMin = this.location.y
        this.xMax = this.xMin + width
        this.yMax = this.yMin + height
    }

    render(dt){
        const ctx = this.canvas.getContext('2d')
        const pattern = ctx.createPattern(this.img, 'repeat')
        ctx.fillStyle = pattern       
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}