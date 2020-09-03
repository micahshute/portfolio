class MainLandscape extends Picture{
    
    constructor(spriteSize=null){
        super(document.querySelector('canvas'), {x: 0, y: 0})
        spriteSize = spriteSize || Math.min(this.canvas.width * 0.07, 50)

        this.lastSpriteLocation = {x: 0, y: 0}
        this.probGen = ProbabilityGenerator.binaryChoice(0.001)
        this.probGenMessage = ProbabilityGenerator.binaryChoice(0.01)
        this.warned = false

        const roadWidth = spriteSize * 1.5


        const wrXmin = this.canvas.width * 0.15
        const wrXmax = wrXmin + roadWidth
        const wrYmin = 150
        const wrYmax = this.canvas.height * 0.7 + Door.doorHeightPx()

        const westRoad = Road.newFromLimits(wrXmin, wrXmax, wrYmin, wrYmax)

        const nrXmin = wrXmax
        const nrXmax = 0.8 * this.canvas.width
        const nrYmin = 0.1 * this.canvas.height  + Door.doorHeightPx() - roadWidth
        const nrYmax = nrYmin + roadWidth

        const northRoad = Road.newFromLimits(nrXmin, nrXmax, nrYmin, nrYmax)


        const srXmin = wrXmax
        const srXmax = nrXmax
        const srYmin = this.canvas.height * 0.7 + Door.doorHeightPx() - roadWidth
        const srYmax = srYmin + roadWidth
        
        const southRoad = Road.newFromLimits(srXmin, srXmax, srYmin, srYmax)

        const erXmin = this.canvas.width * 0.79 - roadWidth
        const erXmax = erXmin + roadWidth
        const erYmin = nrYmax 
        const erYmax = srYmin

        const eastRoad = Road.newFromLimits(erXmin, erXmax, erYmin, erYmax)

        const grassMinX = wrXmax
        const grassMaxX = erXmin
        const grassMinY = nrYmax
        const grassMaxY = srYmin

        const pxXmin = erXmax
        const pxXmax = pxXmin + 0.01 * this.canvas.width
        const pxYmax = 0.4 * this.canvas.height + Door.doorHeightPx()
        const pxYmin = pxYmax - roadWidth

        const projX = Road.newFromLimits(pxXmin, pxXmax, pxYmin, pxYmax)

        const prtXmax = wrXmin
        const prtXmin = prtXmax - 0.01 * this.canvas.width
        const prtYmax = this.canvas.height * 0.7 - roadWidth / 2
        const prtYmin = prtYmax + roadWidth

        const prtX = Road.newFromLimits(prtXmin, prtXmax, prtYmin, prtYmax)


        const centerGrass = Grass.newFromLimits(grassMinX, grassMaxX, grassMinY, grassMaxY)

        const activeGrass = new Collidable(centerGrass, () => {
            if(Transporter.sprite.location.x !== this.lastSpriteLocation.x || Transporter.sprite.location.y !== this.lastSpriteLocation.y){
                const encounter = this.probGen.next().value
                let sendWarning = this.probGen.next().value
                // console.log(encounter)
                // console.log(sendWarning)
                if(encounter && this.warned){
                    this.warned = false
                    sendWarning = true
                }else if(encounter && !this.warned){
                    sendWarning = true
                }
                if(sendWarning && !this.warned){
                    const message = new WithLifetime(new CanvasTextManager(
                        "You should be careful walking on the grass...",
                        this.canvas,
                        {x: "30%", y: Transporter.sprite.location.y - Transporter.sprite.size.y},
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
                        }), 5, true)
                    message.priority = 99
                    this.add(message)
                    this.warned = true
                }
                this.lastSpriteLocation = {...Transporter.sprite.location}
            }
        })


        this.add(westRoad)
        this.add(northRoad)
        this.add(southRoad)
        this.add(eastRoad)
        this.add(projX)
        this.add(prtX)
        this.add(activeGrass)
        

    }


}