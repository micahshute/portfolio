class CanvasApp extends Picture{


    constructor(container){
        const canvas = document.createElement('canvas')
        container.appendChild(canvas)
        super(canvas)
        this.container = container
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
        // this.add(new WithDelay(new CanvasTextManager(
        //     "TODO: CanvasTextManager is not appropriately calculating the window of text in which to write. Re-evaluate the generateRow or whatever its called method.",
        //     this.canvas,
        //     {x: "50%", y: 200},
        //     {
        //         shouldScroll: true,
        //         scrollRate: 1000,
        //         fontSize: "15px",
        //         fontColor: "#999999",
        //         shouldDisappearSecondsAfterScroll: 500,
                
        //     }
        // ), 2))
        const initSequence = this.getInitSequence()
        this.add(new WithDelay(initSequence,1))
        this.add(new MoveableSprite('public/assets/sprites/Male/Male\ 01-2.png', null, {x: 100, y: 100}, this.canvas))
        this.canvasSetup()
        window.onresize = this.canvasSetup.bind(this)
        this.defineBindingsAndEventListeners()
        this.gameLoop()
    }

    defineBindingsAndEventListeners(){
        
    }

    getInitSequence(){
        const txtSequence = introSequenceTxt.map(t => 

            new CanvasTextManager(
                t,
                this.canvas,
                {x: "15%", y: 250},
                {
                    shouldScroll: true,
                    scrollRate: 30,
                    fontSize: "15px",
                    fontColor: "#999999",
                    endingX: "15%"
                }
        ))
        
        return new CanvasTextSequence(txtSequence, {})
    }


    canvasSetup(){
        this.canvas.width = this.container.clientWidth
        this.canvas.height = this.container.clientHeight
        this.ctx = this.canvas.getContext('2d')
    }

    checkCollision(){

    }

   
    gameLoop(){
        const now = Date.now()
        const deltaTime = (now - (this.lastTime ? this.lastTime : now)) / 1000.0
        const dt = Number.isFinite(deltaTime) ? deltaTime : 0
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
        this.render(dt)
        this.lastTime = now
        requestAnimationFrame(this.gameLoop.bind(this))
    }


    


}