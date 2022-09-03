class Game{

    static canvasApp

    static start(canvasApp){
        this.canvasApp = canvasApp
        this.clearChildren()
        // Transporter.sprite.location = {x: 0, y: 0}
        this.canvasApp.add(Transporter.sprite)
        this.currentMap = new GenesisMap()
        this.canvasApp.add(this.currentMap)
    }

    static clearChildren(){
        if(this.canvasApp){
            const children = this.canvasApp.children
            for(let child of children){
                this.canvasApp.remove(child)
            }
        }
    }

    static setMap(map){
        this.canvasApp.remove(this.currentMap)
        this.canvasApp.add(map)
        this.currentMap = map
    }


}