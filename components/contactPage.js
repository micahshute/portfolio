class ContactPage extends Picture{


    constructor(){
        super(document.querySelector('canvas'), {x: -1, y: -1})

        this.displayPortals()
        this.displayTitle()
        this.displayBackDoor()
    }

    displayTitle(){
        this.add(new CanvasText(
            "Contact Me",
            {x: "50%", y: 50},
            this.canvas,
            {
                font: 'UnicaOne',
                fontSize: '30px',
                fontColor: '#999999',
                textAlign: 'center'
            }
        ))
    }

    displayBackDoor(){
        this.add(new Collidable(new Door(
            this.canvas,
            {x: 10, y: 10},
            Door.doorWidth(),
            Door.doorHeight(),
            {label: "Back"}
        ),  
        () => {
            this.parent.setEnvironment(false)
            this.parent.remove(this)
            Transporter.transportSprite("80%", "70%", "left", "center");
        }))

    }

    displayPortals(){
        this.add(new CanvasLink(
            {x: "30%", y: "50%"},
            "See my LinkedIn profile",
            "https://www.linkedin.com/in/micahshute",
            () => this.parent.sprite,
            {}
        ))

        this.add(new CanvasLink(
            {x: "70%", y: "50%"},
            "Email me",
            "mailto:micah.shute@gmail.com",
            () => this.parent.sprite,
            {}
        ))
    }

}