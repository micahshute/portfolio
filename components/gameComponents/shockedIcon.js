class ShockedIcon extends Image{

    constructor(sprite){
        const canvas = document.querySelector('canvas')
        const location = {x: sprite.x, y: sprite.y - sprite.size.y}
        const path = "../../public/assets/graphics/exclamation_point.png"
        const size = {x: 50, y: 50}
        super(path, canvas, location, size)
    }
}