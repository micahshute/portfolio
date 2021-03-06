class CanvasLink extends Picture{

    constructor(location, linkText, linkURL, spriteRef, {
        font="Raj", 
        fontSize='20px', 
        fontColor="#CCCCCC", 
        textAlign='center',
        callback=null
    
        }){
        super(document.querySelector('canvas'), location)
        this.linkText = linkText
        this.linkURL = linkURL
        this.transportCallback = callback ? callback : () => window.open(this.linkURL, "_blank")
        this.add(
            new Circle(
                this.canvas,
                location,
                Number.parseInt(fontSize) * 2,
                "blue"
            )
        )
        this.add(
            new Circle(
                this.canvas,
                location,
                Number.parseInt(fontSize) * 1.6,
                "white"
            )
        )
        this.add(
            new Circle(
                this.canvas,
                location,
                Number.parseInt(fontSize) * 1.5,
                "black"
            )
        )
        this.add(
            new Collidable( new CanvasText(
                    linkText,
                    {x: location.x, y: location.y},
                    this.canvas,
                    {
                        font,
                        fontSize,
                        fontColor,
                        textAlign
                    }
                ), () => {
                    const newLocation = {x: Transporter.sprite.location.x, y: this.y + Number.parseInt(fontSize) * 2 + 5}
                    Transporter.transportSprite(newLocation.x, newLocation.y)
                    const timeInterval = 1500
                    spriteRef().transportWithAnimation(newLocation, timeInterval, this.transportCallback)
                }
        ))
    }
}