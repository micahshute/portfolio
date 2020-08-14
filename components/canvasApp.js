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
        this.setEnvironment(true, true)
        window.onresize = this.canvasSetup.bind(this)
        this.defineBindingsAndEventListeners()
        this.gameLoop()
    }

    defineBindingsAndEventListeners(){
        
    }

    setEnvironment(initial = true, sprite= false){
        if(sprite){ this.addSprite() }
        this.displayTitle()
        this.addDoors(initial)
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
        const doorHeight = "20%"
        const doorWidth = 0.15 * this.canvas.height
        const doors = [
            new Collidable(new Door(this.canvas, {x: "80%", y: "10%"}, doorWidth, doorHeight, {label: "Biography"}),
                () => {
                    this.children = []
                    const bioPage = new BioPage(this.canvas)
                    this.add(bioPage)
                    this.sprite.location = {
                        x: 10 + doorWidth + 5,
                        y: 10 + (0.2 * this.canvas.height - this.sprite.size.y )
                    }
                    this.add(this.sprite)
                }),

            new Collidable(new Door(this.canvas, {x: "80%", y: "40%"}, doorWidth, doorHeight, {label: "Projects"}),
                () => {
                    this.children = []
                    const projectsPage = new ProjectsPage(this.canvas)
                    this.add(projectsPage)
                    this.sprite.location = {
                        x: 10 + doorWidth + 5,
                        y: 10 + (0.2 * this.canvas.height - this.sprite.size.y )
                    }
                    this.add(this.sprite)
                }),
            new Collidable(new Door(this.canvas, {x: "80%", y: "70%"}, doorWidth, doorHeight, {label: "Contact"}),
                () => {
                    this.children = []
                }),
            new Collidable(new Door(this.canvas, {x: "9%", y: "70%"}, doorWidth, doorHeight, {label: "Site Portal"}),
                () => {
                    this.children = []
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
                    font: 'Iceland',
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