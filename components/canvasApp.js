class CanvasApp extends Picture{


    constructor(container){
        const canvas = document.createElement('canvas')
        container.appendChild(canvas)
        super(canvas, {x: 0, y: 0})
        this.container = container
        this.canvasSetup()
        this.displayTitle()
        
        const initSequence = this.getInitSequence()
        this.add(new WithDelay(initSequence,1))
        this.sprite = new MoveableSprite('public/assets/sprites/Male/Male\ 01-2.png', null, {x: "15%", y: 100}, this.canvas)
        Transporter.sprite = this.sprite
        window.onresize = this.canvasSetup.bind(this)
        this.defineBindingsAndEventListeners()
        this.setEnvironment(true, true)
        this.gameLoop()
    }

    defineBindingsAndEventListeners(){
        
    }

    setEnvironment(initial = true, sprite= false){
        this.displayTitle()
        this.addDoors(initial)
        if(sprite){ this.addSprite() }
    }

    addSprite(){
        this.add(this.sprite)
    }

    displayTitle(){
        this.add(new CanvasText(
            "Micah Shute's Portfolio",
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

    addDoors(withDelay = true){
        const doorHeight = Door.doorHeight()
        const doorWidth = Door.doorWidth()
        const doors = [
            new Collidable(new Door(this.canvas, {x: "80%", y: "10%"}, doorWidth, doorHeight, {label: "Biography"}),
                () => {
                    this.removeAllChildren()
                    const bioPage = new BioPage(this.canvas)
                    this.add(bioPage)
                    Transporter.transportSprite(10, 10, "right", "center")
                    this.add(this.sprite)
                }),

            new Collidable(new Door(this.canvas, {x: "80%", y: "40%"}, doorWidth, doorHeight, {label: "Projects"}),
                () => {
                    this.removeAllChildren()
                    const projectsPage = new ProjectsPage(this.canvas)
                    this.add(projectsPage)
                    Transporter.transportSprite(10,10, "right", "center")
                    this.add(this.sprite)
                }),
            new Collidable(new Door(this.canvas, {x: "80%", y: "70%"}, doorWidth, doorHeight, {label: "Contact"}),
                () => {
                    this.removeAllChildren()
                    this.add(new ContactPage())
                    Transporter.transportSprite(10,10,"right", "center")
                    this.add(this.sprite)
                }),
            new Collidable(new Door(this.canvas, {x: "9%", y: "70%"}, doorWidth, doorHeight, {label: "Site Portal"}),
                () => {
                    renderHTMLSite()
                })
        ]

        if(withDelay){
            const delayedDoors = doors.map(d => new WithDelay(new WithTransition(d), 3))
            for(let dd of delayedDoors){
                this.add(dd)
            }
        }else{
            for(let d of doors){
                this.add(d)
            }
        }
    }

    getInitSequence(){
        const txtSequence = introSequenceTxt.map(t => 

            new CanvasTextManager(
                t,
                this.canvas,
                {x: "15%", y: 200},
                {
                    shouldScroll: true,
                    scrollRate: 30,
                    font: 'Raj',
                    fontSize: "20px",
                    fontColor: "#CCCCCC",
                    endingX: "30%",
                    textAlign: "start",
                    fontWeight: 300
                }
        ))
        
        return new CanvasTextSequence(txtSequence, {})
    }

    get ctx(){
        return this.canvas.getContext('2d')
    }


    canvasSetup(){
        this.canvas.width = this.container.clientWidth
        this.canvas.height = this.container.clientHeight
    }

    checkCollision(){
        if(this.sprite.wraith){
            return false
        }
        const spriteXMin = this.sprite.x
        const spriteXMax = this.sprite.x + this.sprite.size.x
        const spriteYMin = this.sprite.y
        const spriteYMax = this.sprite.y + this.sprite.size.y
        const collisionCandidates = [...this.children]
        while(collisionCandidates.length > 0){
            const child = collisionCandidates.pop()
            if(child.constructor.name === "Collidable"){
                const childXMin = child.xMin
                const childXMax = child.xMax
                const childYMin = child.yMin 
                const childYMax = child.yMax
                if(doesOverlap(spriteXMin, spriteXMax, spriteYMin, spriteYMax, childXMin, childXMax, childYMin, childYMax)){
                    return child
                }
            }else{
                const childrenCollidables = child.collidables
                for(let collidable of childrenCollidables){
                    collisionCandidates.push(collidable)
                }
            }
        }
        return false
    }

   
    gameLoop(){
        const now = Date.now()
        const deltaTime = (now - (this.lastTime ? this.lastTime : now)) / 1000.0
        const dt = Number.isFinite(deltaTime) ? deltaTime : 0
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
        this.render(dt)
        const collisionObj = this.checkCollision()
        if(collisionObj){
            collisionObj.collideHook()
        }
        this.lastTime = now
        requestAnimationFrame(this.gameLoop.bind(this))
    }


    


}