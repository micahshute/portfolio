class ProjectsPage extends Picture{

    constructor(canvas, location={x: 0, y: 0}){
        super(canvas, location)
        this.addDoors()
    }


    addDoors(){

        const doorHeight = "20%"
        const doorWidth = 0.15 * this.canvas.height
        const doors = [
            new Collidable(new Door(
                this.canvas,
                {x: 10, y: 10},
                doorWidth,
                doorHeight,
                {label: "Back"}
            ),  
            () => {
                const canvasApp = this.parent
                canvasApp.remove(this)
                canvasApp.sprite.location = {
                    x: this.canvas.width * (0.8) - canvasApp.sprite.size.x - 5,
                    y: this.canvas.height * 0.4 + (0.2 * this.canvas.height - canvasApp.sprite.size.y)
                }
                canvasApp.setEnvironment(false)
            }),

            new Collidable(new Door(
                this.canvas, 
                {x: "80%", y: "10%"},
                doorWidth, 
                doorHeight,
                {
                    label: "Rbimg"
                }
            ), () => {

            }),

            new Collidable(new Door(
                this.canvas,
                {x: "80%", y: "40%"},
                doorWidth,
                doorHeight,
                {
                    label: "Gravity"
                }
            ), () => {

            }),

            new Collidable(new Door(
                this.canvas,
                {x: "80%", y: "70%"},
                doorWidth,
                doorHeight,
                {
                    label: "OdinsEye"
                }
            ), () => {

            }),

            new Collidable(new Door(
                this.canvas,
                {x: "40%", y: "40%"},
                doorWidth,
                doorHeight,
                {
                    label: "digiproc"
                }
            ))

        
        ]

        for(let door of doors){
            this.add(door)
        }
    }
}