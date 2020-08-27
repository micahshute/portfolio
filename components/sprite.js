class Sprite extends Graphic{

    static get Image(){

        return class{

            static get Width(){
                return 32
            }

            static get Height(){
                return 32
            }

            static get WalkDown1(){
                return {
                    x: 0,
                    y: 0
                }
            }

            static get StandDown(){
                return {
                    x: 32,
                    y: 0
                }
            }

            static get WalkDown2(){
                return {
                    x: 64,
                    y: 0
                }
            }

            static get WalkLeft1(){
                return {
                    x: 0, 
                    y: 32
                }
            }


            static get StandLeft(){
                return{
                    x: 32, 
                    y: 32
                }
            }

            static get WalkLeft2(){
                return{
                    x: 64,
                    y: 32
                }
            }

            static get WalkRight1(){
                return {
                    x: 0,
                    y: 64
                }
            }

            static get StandRight(){
                return {
                    x: 32, 
                    y: 64
                }
            }

            static get WalkRight2(){
                return {
                    x: 64, 
                    y: 64
                }
            }

            static get WalkUp1(){
                return {
                    x: 0,
                    y: 96
                }
            }

            static get StandUp(){
                return {
                    x: 32, 
                    y: 96
                }
            }

            static get WalkUp2(){
                return {
                    x: 64,
                    y: 96
                }
            }

            static get states(){
                return {
                    STANDING_DOWN: 0,
                    STANDING_RIGHT: 1,
                    STANDING_LEFT: 2,
                    STANDING_UP: 3,
                    WALKING_DOWN: 4,
                    WALKING_RIGHT: 5,
                    WALKING_LEFT: 6,
                    WALKING_UP: 7,
                    TWISTING: 8,
                    BEAM_UP: 9
                }
            }
        }

    }

    constructor(sprite, user= null, location= {x: 100, y: 100 }, canvas ,size= {x: 64, y: 64}){
        super(canvas, location, MovingLocationCalculationStrategy)
        this.img = document.createElement('img')
        this.img.src = sprite
        this.user = user
        this.size = size
        this.animationStrategy = AnimationStrategy
        this._activeState = Sprite.Image.states.STANDING_DOWN
        this.constructAnimators()
        this.imgPos = this.activeAnimator.frame(0)
        this.activeAnimator.start()
    }

    get locationBoundaries(){
        return {
            top: 0,
            bottom: this.canvas.height,
            left: 0,
            right: this.canvas.width
        }
    }

    constructAnimators(){
        const speed = 200
        this.animators = [
            new this.animationStrategy([
                Sprite.Image.StandDown
            ], 1, {x: 0, y: 0} ),
            new this.animationStrategy([
                Sprite.Image.StandRight
            ], 1, { x: 0, y: 0}),
            new this.animationStrategy([
                Sprite.Image.StandLeft
            ], 1, { x: 0, y: 0}),
            new this.animationStrategy([
                Sprite.Image.StandUp
            ], 1, { x: 0, y: 0}),
            new this.animationStrategy([
                Sprite.Image.WalkDown1,
                Sprite.Image.StandDown,
                Sprite.Image.WalkDown2,
                Sprite.Image.StandDown
            ], 4, {x: 0, y: speed}),
            new this.animationStrategy([
                Sprite.Image.WalkRight1,
                Sprite.Image.StandRight,
                Sprite.Image.WalkRight2,
                Sprite.Image.StandRight
            ], 4, {x: speed, y: 0}),
            new this.animationStrategy([
                Sprite.Image.WalkLeft1,
                Sprite.Image.StandLeft,
                Sprite.Image.WalkLeft2,
                Sprite.Image.StandLeft
            ], 4, {x: -1 * speed, y: 0}),
            new this.animationStrategy([
                Sprite.Image.WalkUp1,
                Sprite.Image.StandUp,
                Sprite.Image.WalkUp2,
                Sprite.Image.StandUp
            ], 4, {x: 0, y: -1 * speed}),
            new this.animationStrategy([
                Sprite.Image.StandDown,
                Sprite.Image.StandLeft,
                Sprite.Image.StandUp,
                Sprite.Image.StandRight
            ], 10, {x: 0, y: 0}),
            new this.animationStrategy([
                Sprite.Image.StandDown
            ], 4, {x: 0, y: -7 * speed})
        ]
    }

    get activeAnimator(){
        return this.animators[this.activeState]
    }

    get activeState(){
        return this._activeState
    }

    set activeState(state){
        if(state !== this._activeState){
            this.activeAnimator.stop()
            this._activeState = state
            this.activeAnimator.start()
        }
    }

    update(dt){
        const { frame, locationChange } = this.activeAnimator.getNewFrameAndLocationChange(dt)
        this.imgPos = frame
        this.location = {
            x: this.location.x + locationChange.x,
            y: this.location.y + locationChange.y
        } 
        if(!this.wraith){
            this.constrainLocation()
        }
    }

    constrainLocation(){
        if(this.x > this.locationBoundaries.right - this.size.x){ this.x = this.locationBoundaries.right - this.size.x }
        if(this.x < 0){ this.x = 0}
        if(this.y > this.locationBoundaries.bottom - this.size.y){ this.y = this.locationBoundaries.bottom - this.size.y }
        if(this.y < 0){ this.y = 0}
    }

    render(dt){
        this.update(dt)
        this.draw(this.canvas.getContext('2d'))
    }

    draw(ctx){
        ctx.drawImage(this.img, this.imgPos.x, this.imgPos.y, Sprite.Image.Width, Sprite.Image.Height, this.location.x, this.location.y, this.size.x, this.size.y)
    }
}