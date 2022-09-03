class InformationBanner extends CanvasTextManager{

    constructor(message, location={x: "30%", y: "30%"}){
        super(
            message,
            document.querySelector('canvas'),
            location,
            {
                shouldScroll: true,
                scrollRate: 30,
                font: 'Raj',
                fontSize: "20px",
                fontColor: "black",
                endingX: "30%",
                textAlign: "start",
                fontWeight: 300,
                withBackground: true,
                backgroundColor: 'white',
            }
        )
    }
}