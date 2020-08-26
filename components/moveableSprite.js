class MoveableSprite extends Sprite{

    constructor(sprite, user, location, canvas, size){
        super(sprite, user, location, canvas, size)
        this.arrowsPressed = []
        // this.sprite = new Sprite('public/assets/sprites/Male/Male\ 01-2.png', null, {x: 100, y: 100}, {
        //     top: 0, bottom: this.canvas.height, left: 0, right: this.canvas.width
        // }) 

        // var hidden, visibilityChange; 
        // if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
        //     hidden = "hidden";
        //     visibilityChange = "visibilitychange";
        // } else if (typeof document.msHidden !== "undefined") {
        //     hidden = "msHidden";
        //     visibilityChange = "msvisibilitychange";
        // } else if (typeof document.webkitHidden !== "undefined") {
        //     hidden = "webkitHidden";
        //     visibilityChange = "webkitvisibilitychange";
        // }

        // document.addEventListener(visibilityChange, () => {
        //     if(document[hidden]){
        //         this.arrowsPressed = []
        //         this._activeState = Sprite.Image.states.STANDING_DOWN
        //     }
        // }, false)

        window.addEventListener('blur', () => {
            this.arrowsPressed = []
            this._activeState = Sprite.Image.states.STANDING_DOWN
        })

        

        this.sprite = this
        this.boundKeyUpEL = this.keyUpEL.bind(this)
        this.boundKeyDownEL = this.keyDownEL.bind(this)
        
        this.makeControllble()
        // setInterval(this.makeUncontrollable.bind(this), 10000)
    }


    makeControllble(){
        document.addEventListener('keydown', this.boundKeyDownEL)
        document.addEventListener('keyup', this.boundKeyUpEL)
    }

    makeUncontrollable(){
        this.arrowsPressed = []
        document.removeEventListener('keydown', this.boundKeyDownEL)
        document.removeEventListener('keyup', this.boundKeyUpEL)
        this._activeState = Sprite.Image.states.STANDING_DOWN
    }

    keyDownEL(e){
        e.preventDefault()
        switch(e.key){
            case 'w':
            case 'ArrowUp':
                this.sprite.activeState = Sprite.Image.states.WALKING_UP
                if(!this.arrowsPressed.includes(Sprite.Image.states.WALKING_UP)){ this.arrowsPressed.push(Sprite.Image.states.WALKING_UP) }
                break
            case 'd':
            case 'ArrowRight':
                this.sprite.activeState = Sprite.Image.states.WALKING_RIGHT
                if(!this.arrowsPressed.includes(Sprite.Image.states.WALKING_RIGHT)){ this.arrowsPressed.push(Sprite.Image.states.WALKING_RIGHT) }
                break
            case 'a':
            case 'ArrowLeft':
                this.sprite.activeState = Sprite.Image.states.WALKING_LEFT
                if(!this.arrowsPressed.includes(Sprite.Image.states.WALKING_LEFT)){ this.arrowsPressed.push(Sprite.Image.states.WALKING_LEFT) }
                break
            case 's':
            case 'ArrowDown':
                this.sprite.activeState = Sprite.Image.states.WALKING_DOWN
                if(!this.arrowsPressed.includes(Sprite.Image.states.WALKING_DOWN)){ this.arrowsPressed.push(Sprite.Image.states.WALKING_DOWN) } 
                break
                
            default:
                break
        }
    }

    keyUpEL(e){
        e.preventDefault()
        switch(e.key){
            case 'w':
            case 'ArrowUp':
                this.arrowsPressed = this.arrowsPressed.filter(ap => ap !== Sprite.Image.states.WALKING_UP)
                if(this.arrowsPressed.length > 0){
                    this.sprite.activeState = this.arrowsPressed[this.arrowsPressed.length - 1]
                }else{
                    this.sprite.activeState = Sprite.Image.states.STANDING_UP
                }
                
                break
            case 'd':
            case 'ArrowRight':
                this.arrowsPressed = this.arrowsPressed.filter(ap => ap !== Sprite.Image.states.WALKING_RIGHT)
                if(this.arrowsPressed.length > 0){
                    this.sprite.activeState = this.arrowsPressed[this.arrowsPressed.length - 1]
                }else{
                    this.sprite.activeState = Sprite.Image.states.STANDING_RIGHT
                }
                
                break
            case 'a':
            case 'ArrowLeft':
                this.arrowsPressed = this.arrowsPressed.filter(ap => ap !== Sprite.Image.states.WALKING_LEFT)
                if(this.arrowsPressed.length > 0){
                    this.sprite.activeState = this.arrowsPressed[this.arrowsPressed.length - 1]
                }else{
                    this.sprite.activeState = Sprite.Image.states.STANDING_LEFT
                }
                break
            case 's':
            case 'ArrowDown':
                this.arrowsPressed = this.arrowsPressed.filter(ap => ap !== Sprite.Image.states.WALKING_DOWN)
                if(this.arrowsPressed.length > 0){
                    this.sprite.activeState = this.arrowsPressed[this.arrowsPressed.length - 1]
                }else{
                    this.sprite.activeState = Sprite.Image.states.STANDING_DOWN
                }
                break
            default:
                break
        }
    }





}
