class MainLandscape extends Picture{
    
    constructor(spriteSize=null){
        super(document.querySelector('canvas'), {x: 0, y: 0})
        spriteSize = spriteSize || Math.min(this.canvas.width * 0.07, 50)

        this.lastSpriteLocation = {x: 0, y: 0}
        this.probGen = ProbabilityGenerator.binaryChoice(0.1)
        this.probGenMessage = ProbabilityGenerator.binaryChoice(0.1)
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
                if(encounter && !this.warned){
                    sendWarning = true
                }
                if(sendWarning && !this.warned){
                    const message = new WithLifetime(new InformationBanner(
                        "You should be careful walking on the grass...",
                        {x: "30%", y: Transporter.sprite.location.y - Transporter.sprite.size.y},
                    ), 5, true)
                    message.priority = 99
                    this.add(message)
                    this.warned = true
                }else if(encounter && this.warned){
                    const distractingText = this.parent.children.find(c => c.constructor.name === "CanvasTextSequence")
                    if(distractingText){
                        this.parent.remove(distractingText)
                    }
                    this.add(new WithLifetime(
                        new ShockedIcon(Transporter.sprite),
                        2, 
                        true,
                        () => {
                            Transporter.sprite.makeUncontrollable()
                            Transporter.sprite.activeState = Sprite.Image.states.STANDING_DOWN
                            this.add(new Image(
                                "../../public/assets/graphics/abra.png",
                                this.canvas,
                                { x: Transporter.sprite.location.x - Transporter.sprite.size.x / 2 , y: Transporter.sprite.location.y + 30 },
                                { x: 100, y: 100 } 
                            ))
                            window.setTimeout(() => {
                                this.add(
                                    new WithLifetime(
                                        new InformationBanner(
                                            "A strange creature hops out of the tall grass!! It looks at you inquisitively....",
                                            {x: "25%" ,y: "5%"}
                                        ),
                                        5,
                                        true,
                                        () => {
                                            this.add(new ReactableBanner({
                                                message: "What do you want to do? ...",
                                                options: [
                                                    "Kick it",
                                                    "Curl up in a ball",
                                                    "Keep your distance and watch what it does",
                                                    "Approach it slowly but with authority"
                                                ],
                                                onSelect: (selection) => addAfterInitialDecisionEvent(selection)
                                            }))
                                        }
                                    )
                                )
                            }, 1000)
                        })
                    )
                }
                this.lastSpriteLocation = {...Transporter.sprite.location}
            }
        })

        const addAfterInitialDecisionEvent = (selection) => {
            this.add(new WithLifetime(
                new InformationBanner(
                    "Before you can do anything, you hear a deafening roar, and you see a shadow spread across the ground around you. The creature you encountered looks in the sky above you, terrified...",
                    { x: "25%", y: "5%" }
                ),
                15,
                true, 
                () => {
                    this.add(new WithLifetime(
                        new InformationBanner(
                            "In the split second you are frozen in surprise, the terrestrial fauna looks at you with what seems like a sense of urgency and charity. It quickly grabs your wrist... you instantly feel like you've been shot out of a cannon as the world spins around you and you begin to black out...",
                            { x: "25%", y: "5%" }
                        ),
                        15,
                        true,
                        () => {
                            Transporter.sprite.transportWithAnimation(
                                {x: -50, y: -50},
                                2500,
                                () => {
                                    window.setTimeout(() => {
                                        Game.start(this.parent); alert(`GAME START WITH DECISION ${selection}`)
                                    }, 150)
                                }
                            )
                        }
                    ))
                })   
            )
        }

        const getAttackEvent = () => {
            
        }

        this.add(westRoad)
        this.add(northRoad)
        this.add(southRoad)
        this.add(eastRoad)
        this.add(projX)
        this.add(prtX)
        this.add(activeGrass)
        

    }


}