class CanvasApp extends Picture{


    constructor(container){
        const canvas = document.createElement('canvas')
        container.appendChild(canvas)
        super(canvas, {x: 0, y: 0})
        this.container = container
        this.canvasSetup()
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

        const initSequence = this.getInitSequence()
        this.add(new WithDelay(initSequence,1))
        this.sprite = new MoveableSprite('public/assets/sprites/Male/Male\ 01-2.png', null, {x: "15%", y: 100}, this.canvas)
        this.add(this.sprite)
        this.addDoors()
        window.onresize = this.canvasSetup.bind(this)
        this.defineBindingsAndEventListeners()
        this.gameLoop()
    }

    defineBindingsAndEventListeners(){
        
    }

    addDoors(){
        const doorHeight = 0.1 * this.canvas.height
        const doorWidth = "15%"
        this.add(new WithDelay(new Collidable(new Door(this.canvas, {x: "80%", y: "20%"}, doorHeight, doorWidth, {label: "Bio"}),
        () => {
            this.children = []
            this.add(new BioPage(this.canvas))
            this.add(this.sprite)
        }
        ), 3))
        this.add(new WithDelay(new Collidable(new Door(this.canvas, {x: "80%", y: "50%"}, doorHeight, doorWidth, {label: "Projects"}),
        () => {
            this.children = []
        }
        ), 3))
        this.add(new WithDelay(new Collidable(new Door(this.canvas, {x: "80%", y: "85%"}, doorHeight, doorWidth, {label: "Contact Me"}),
        () => {
            this.children = []
        }
        ), 3))
        this.add(new WithDelay(new Collidable(new Door(this.canvas, {x: "9%", y: "90%"}, doorHeight, doorWidth, {label: "Standard Site"}),
        () => {
            this.children = []
        }
        ), 3))
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
                    fontColor: "#999999",
                    endingX: "30%",
                    textAlign: "start"
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
        for(let child of this.children){
            if(child.constructor.name !== "Collidable"){
                continue
            } 
            const childXMin = child.xMin
            const childXMax = child.xMax
            const childYMin = child.yMin 
            const childYMax = child.yMax
            if(doesOverlap(spriteXMin, spriteXMax, spriteYMin, spriteYMax, childXMin, childXMax, childYMin, childYMax)){
                return child
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