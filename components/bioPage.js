class BioPage extends Picture{

    constructor(canvas, location={x: 0, y: 0}){
        super(canvas, location)
        this.add(new CanvasTextManager(
            bio, 
            canvas, 
            { x: "5%", y: 150},
            {
                textAlign: 'start',
                font: 'Iceland'
            }
            ))
    }
}