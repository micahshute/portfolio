class ProjectsPage extends Picture{

    constructor(canvas, location={x: 0, y: 0}){
        super(canvas, location)
        this.addDoors()
        this.displayTitle()
    }

    displayTitle(){
        this.add(new CanvasText(
            "Projects",
            {x: "50%", y: 50},
            this.canvas,
            {
                font: 'UnicaOne',
                fontSize: '30px',
                fontColor: '#999999',
                textAlign: "center"
            }
        ))

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
                this.parent.add(new RbimgProject())
                this.parent.remove(this)
                Transporter.transportSprite("1%", "1%", "center", "below")
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
                this.parent.add(new GravityProject())
                this.parent.remove(this)
                Transporter.transportSprite("1%", "1%", "center", "below")
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
                this.parent.add(new OdinsEyeProject())
                this.parent.remove(this)
                Transporter.transportSprite("1%", "1%", "center", "below")
            }),

            new Collidable(new Door(
                this.canvas,
                {x: "40%", y: "40%"},
                doorWidth,
                doorHeight,
                {
                    label: "digiproc"
                }
            ), () => {
                this.parent.add(new DigiprocProject())
                this.parent.remove(this)
                Transporter.transportSprite("1%", "1%", "center", "below")
            }),

            new Collidable(new Door(
                this.canvas,
                {x: "40%", y: "70%"},
                doorWidth,
                doorHeight,
                {
                    label: "Blogs"
                }
            ), () => {  
                this.parent.add(new BlogProject())
                this.parent.remove(this)
                Transporter.transportSprite("1%", "1%", "center", "below")
            })

        
        ]

        for(let door of doors){
            this.add(door)
        }
    }
}