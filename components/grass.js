class Grass extends Ground{

    constructor(location, height, width){
        const img = document.createElement('img')
        img.src = "../../public/assets/graphics/grass1small.png"
        super(location, height, width, img)
    }


}