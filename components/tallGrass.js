class TallGrass extends Ground{
    constructor(location, height, width){
        const img = document.createElement('img')
        img.src = "../../public/assets/graphics/XY_Grass.png"
        super(location, height, width, img)
    }
}