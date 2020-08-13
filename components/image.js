class Image extends Graphic{

    constructor(path, canvas, location, size){
        super(canvas, location)
        this.size = size
        this.path = path
        this.img = document.createElement('img')
        this.img.src = this.path
    }


    render(){
        const ctx = this.canvas.getContext('2d')
        ctx.drawImage(this.img, this.location.x, this.location.y, this.size.x, this.size.y)
    }
}