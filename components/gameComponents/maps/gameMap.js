class GameMap extends Picture{

    constructor({
        mapSize, // in "units"
        initialSpriteLocation, // "unit" location for sprite
        unitSize={x: 25, y: 25}, // in px
    }){
        const canvas = document.querySelector('canvas')
        super(canvas, {x: 0, y: 0})
        this.resizeSubscription = this.handleCanvasResize.bind(this)
        PubSub.subscribeToTopic("canvasResize", this.resizeSubscription)
        this.mapSize = mapSize
        this.unitSize = unitSize
        this.initialSpriteLocation = initialSpriteLocation // in "units"
        this.pushLocattion = "15%"
        this.components = Array.from(Array(mapSize.x, () => Array.from(Array.mapSize.y, () => null)))
        const initialUnits = this.initialUnitsToShow
        this.leftX = initialUnits.leftX
        this.rightX = initialUnits.rightX
        this.topY = initialUnits.topY
        this.bottomY = initialUnits.bottomY
        // const spriteX = this.initialSpriteLocation.x * this.unitSize.x
        // const spriteY = this.initialSpriteLocation.y * this.unitSize.y
        // Transporter.sprite.location = {x: spriteX, y: spriteY}
    }

    addComponent(component, location){
        this.components[location.x][location.y] = component
    }

    handleCanvasResize(newDimensions){
       this.initialSpriteLoation = this.unitSpriteIsOn
       const units = this.initialUnitsToShow
       this.leftX = units.leftX
       this.rightX = units.rightX
       this.topY = units.topY
       this.bottomY = units.bottomY 
       this.calculateLocationsForRenderedComponents()
    }

    calculateLocationsForRenderedComponents(){
        const children = []
        for(let col=this.leftX; col <= this.rightX; col++){
            for(let row=this.topY; row <= this.bottomY; row++){
                const y = this.unitSize.y * row
                const x = this.unitSize.x * col
                if(this.components[col] && this.components[col][row]){
                    this.components[row][col].location = { x, y }
                    children.push(this.components[row][col])
                    // debugger
                }
            }
        }
        this.children = children
    }

    get unitSpriteIsOn(){
        const rawUnitsFromTop = Transporter.sprite.location.x / this.unitSize.x
        const rawUnitsFromLeft = Transporter.sprite.location.y / this.unitSize.y
        const weightedUnitsFromTop = Math.floor(rawUnitsFromTop + this.topY.location.y)
        const weightedUnitsFromLeft = Math.floor(rawUnitsFromLeft + this.leftX.location.x)
        return {
            x: weightedUnitsFromLeft,
            y: weightedUnitsFromTop
        }
    }

    get xDirectionUnits(){
        return Math.floor(this.canvas.width / this.unitSize.x) + 1
    }

    get yDirectionUnits(){
        return Math.floor(this.canvas.height / this.unitSize.y) + 1
    }

    get initialUnitsToShow(){
        const numCols = this.xDirectionUnits
        const numRows = this.yDirectionUnits
        const colsLeftOfSprite = Math.min(0, Math.abs(this.initialSpriteLocation.x - Math.floor(numCols / 2)))
        const colsRightOfSprite = Math.min(this.initialSpriteLocation.x + numCols - colsLeftOfSprite, this.mapSize.x)
        const rowsAboveSprite = Math.min(0, Math.abs(this.initialSpriteLocation.y - Math.floor(numRows / 2)))
        const rowsBelowSprite = Math.min(this.initialSpriteLocation.y + numRows - rowsAboveSprite, this.mapSize.y) 
        return {
            leftX: colsLeftOfSprite, 
            rightX: colsRightOfSprite,
            topY: rowsAboveSprite,
            bottomY: rowsBelowSprite
        }
    }

    get displayedChildren(){
        const rows = this.components.slice(this.topY, this.bottomY + 1)
        return rows.flatMap(r => r.slice(this.leftX, this.rightX + 1))
    }

    loadMap(){
        this.calculateLocationsForRenderedComponents()
        const x = (this.initialSpriteLocation.x - this.leftX) * this.unitSize.x
        const y = (this.initialSpriteLocation.y - this.topY) * this.unitSize.y
        Transporter.sprite.location = { x, y }
    }    
}