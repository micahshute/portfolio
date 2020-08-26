class CanvasLink extends Picture{

    constructor(location, linkText, linkURL, spriteRef, {font="Raj", fontSize='20px', fontColor="#CCCCCC", textAlign='center'}){
        super(document.querySelector('canvas'), location)
        this.linkText = linkText
        this.linkURL = linkURL
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
                    window.open(this.linkURL, "_blank")
                    spriteRef().location = {x: spriteRef().location.x, y: this.y + Number.parseInt(fontSize) * 2 + 5}
                }
        ))
    }
}