class TallGrassWithBackground extends Picture{
    constructor(location, height, width){
        const canvas = document.querySelector('canvas')
        const priority = -1
        super(canvas, location, priority)
        this.add(new Grass(location, height, width))
        this.add(new TallGrass(location, height, width))
    }

    get xMin(){
        return this.children[0].xMin
    }

    get xMax(){
        return this.children[0].xMax
    }

    get yMin(){
        return this.children[0].yMin
    }

    get yMax(){
        return this.children[0].yMax
    }

    get location(){
        super.location
    }


    set location(location){
        super.location = location
        for(let child of this.children){
            child.location = location
        }
    }

    set height(newHeight){
        for(let child of this.children){
            child.height = newHeight
        }
    }

    set width(newWidth){
        for(let child of this.children){
            child.width = newWidth
        }
    }
}