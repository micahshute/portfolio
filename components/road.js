class Road extends Ground{

    constructor(location, height, width){
        const img = document.createElement('img')
        img.src = "../../public/assets/graphics/path.png"
        super(location, height, width, img)
    }

}