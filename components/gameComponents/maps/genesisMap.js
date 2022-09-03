class GenesisMap extends GameMap{

    constructor(){
        const mapSize = {x: 40, y: 40}
        const initialSpriteLocation = { x: 20, y: 10 }
        super({mapSize, initialSpriteLocation})
        this.components = Array.from(Array(40), () => Array.from(Array(40), () => ActiveTallGrass({location:{x: 0, y: 0}, height: 25, width: 25})))
        this.loadMap()
    }
}