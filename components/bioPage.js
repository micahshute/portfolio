class BioPage extends Picture{

    constructor(canvas, location={x: 0, y: 0}){
        super(canvas, location)
        this.add(new Image(
            "public/assets/images/profile.png",
            canvas,
            {x: 10, y: 150},
            {x: 220, y: 350}
        ))
        this.add(new CanvasTextManager(
            bio, 
            canvas, 
            { x: 250, y: 150},
            {
                textAlign: 'start',
                font: 'Iceland',
                fontSize: "20px", 
                fontWeight: 300
            }
        ))
        this.addDoor()
    }

    addDoor(){
        const doorHeight = 0.1 * this.canvas.height
        const doorWidth = "15%"
        this.add(new Collidable(new Door(this.canvas, {x: "9%", y: 75}, doorHeight, doorWidth, {label: "Back"}),
        () => {
            const canvasApp = this.parent
            this.parent.remove(this)
            canvasApp.sprite.location = {
                x: this.canvas.width * (0.8 - 0.075) - canvasApp.sprite.size.x,
                y: this.canvas.height * 0.2
            }
            canvasApp.setEnvironment(false)
        }
        ))
    }
}