class Transporter{


    static sprite = null

    static getTransportCallback(x,y, doorSideX = "none", doorSideY = "none"){
        return () => this.transportSprite(x,y, doorSideX, doorSideY)
    }

    static transportSprite(x,y, doorSideX = "none", doorSideY = "none"){
        let xSpriteCorrection
        let ySpriteCorrection
        switch(doorSideX.toLowerCase()){
            case "l":
            case "left":
                xSpriteCorrection = -1 * this.sprite.size.x - 5
                break
            case "right":
            case "r":
                xSpriteCorrection = Door.doorWidth() + 5
                break
            case "c":
            case "center":
                xSpriteCorrection = Door.doorWidth() / 2 - this.sprite.size.x / 2
                break
            case "none":
                xSpriteCorrection = 0
                break
            default:
                throw "Invalid door x coordinate side passed into transportSprite"
        }
        switch(doorSideY.toLowerCase()){
            case "u":
            case "a":
            case "up":
            case "above":
                ySpriteCorrection = -1 * this.sprite.size.y - 5
                break
            case "d":
            case "b":
            case "down":
            case "below":
                ySpriteCorrection = Door.doorHeightPx() + 5
                break
            case "c":
            case "center":
                ySpriteCorrection = Door.doorHeightPx() - this.sprite.size.y
                break
            case "none":
                ySpriteCorrection = 0
                break
            default:
                throw "Invalid door y coordiante side passed into transportSprite"
        }
        const canvas = document.querySelector('canvas')
        const locCalc = new LocationCalculationStrategy({x,y}, canvas)
        const [newX,newY] = [locCalc.x + xSpriteCorrection, locCalc.y + ySpriteCorrection]
        this.sprite.location = {x: newX, y: newY}
        const parent = this.sprite.parent
        if(parent){
            parent.remove(this.sprite)
            parent.add(this.sprite)
        }
        
    }

}