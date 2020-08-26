class BioPage extends Picture{

    constructor(canvas, location={x: 0, y: 0}){
        super(canvas, location)
        this.add(new Image(
            "public/assets/images/profile.png",
            canvas,
            {x: 10, y: "25%"},
            {x: 220, y: 350}
        ))
        this.add(new CanvasTextManager(
            bio, 
            canvas, 
            { x: 250, y: "25%"},
            {
                textAlign: 'start',
                font: 'Raj',
                fontSize: "20px", 
                fontWeight: 300,
                fontColor: "#CCCCCC"
            }
        ))
        this.addDoor()
        this.add(new CanvasLink(
            {
                x: "50%",
                y: "10%"
            }, 
            "View my resume",
            "../public/assets/resume.pdf",
            () => this.parent.sprite,
            {}
        ))
    }


    addDoor(){
        const doorHeight = "20%"
        const doorWidth = 0.15 * this.canvas.height
        this.add(new Collidable(new Door(this.canvas, {x: 10, y: 10}, doorWidth, doorHeight, {label: "Back"}),
        () => {
            const canvasApp = this.parent
            this.parent.remove(this)
            canvasApp.sprite.location = {
                x: this.canvas.width * (0.8) - canvasApp.sprite.size.x - 5,
                y: this.canvas.height * 0.1 + (0.2 * this.canvas.height - canvasApp.sprite.size.y)
            }
            canvasApp.setEnvironment(false)
        }
        ))
    }
}