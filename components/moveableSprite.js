class MoveableSprite extends Sprite{

    constructor(sprite, user, location, canvas, size){
        super(sprite, user, location, canvas, size)
        this.arrowsPressed = []

        window.addEventListener('blur', () => {
            this.arrowsPressed = []
            this._activeState = Sprite.Image.states.STANDING_DOWN
        })

        
        this.wraith = false
        this.sprite = this
        this.boundKeyUpEL = this.keyUpEL.bind(this)
        this.boundKeyDownEL = this.keyDownEL.bind(this)
        
        this.makeControllable()
    }

    makeUncollidable(){
        this.wraith = true
    }

    makeCollidable(){
        this.wraith = false
    }


    makeControllable(){
        document.addEventListener('keydown', this.boundKeyDownEL)
        document.addEventListener('keyup', this.boundKeyUpEL)
    }

    makeUncontrollable(){
        this.arrowsPressed = []
        document.removeEventListener('keydown', this.boundKeyDownEL)
        document.removeEventListener('keyup', this.boundKeyUpEL)
        this.activeState = Sprite.Image.states.STANDING_DOWN
    }

    transportWithAnimation(location, interval = 1000, callback= () => null){
        this.makeUncontrollable()
        this.activeState = Sprite.Image.states.TWISTING
        window.setTimeout(() => {
            window.setTimeout(() => {
                callback()
                window.setTimeout(() => {
                    this.makeCollidable()
                    this.makeControllable() 
                    this.activeState = Sprite.Image.states.STANDING_DOWN    
                    this.location = location 
                }, 100)
                
            }, 400)
            this.makeUncollidable()
            this.activeState = Sprite.Image.states.BEAM_UP
        }, interval - 400)
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
