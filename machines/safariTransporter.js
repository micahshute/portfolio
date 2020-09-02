const SafariTransporter = function (){

    let sprite = null

    return class{


        static getTransportCallback(x,y, doorSideX = "none", doorSideY = "none"){
            return () => this.transportSprite(x,y, doorSideX, doorSideY)
        }

        static set sprite(s){
            sprite = s
        }

        static get sprite(){
            return sprite
        }
    
        static transportSprite(x,y, doorSideX = "none", doorSideY = "none"){
            let xSpriteCorrection
            let ySpriteCorrection
            switch(doorSideX.toLowerCase()){
                case "l":
                case "left":
                    xSpriteCorrection = -1 * sprite.size.x - 5
                    break
                case "right":
                case "r":
                    xSpriteCorrection = Door.doorWidth() + 5
                    break
                case "c":
                case "center":
                    xSpriteCorrection = Door.doorWidth() / 2 - sprite.size.x / 2
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
                    ySpriteCorrection = -1 * sprite.size.y - 5
                    break
                case "d":
                case "b":
                case "down":
                case "below":
                    ySpriteCorrection = Door.doorHeightPx() + 5
                    break
                case "c":
                case "center":
                    ySpriteCorrection = Door.doorHeightPx() - sprite.size.y
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
            sprite.location = {x: newX, y: newY}
            const parent = sprite.parent
            if(parent){
                parent.remove(sprite)
                parent.add(sprite)
            }
            
        }
    }

}()