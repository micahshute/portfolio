class Graphic extends Component{

    constructor(canvas, location, locationStrategy = LocationCalculationStrategy){
        super()
        this.canvas = canvas
        this.locationStrategy = new locationStrategy(location, canvas)
    }

    set x(nx){
        this.locationStrategy.x = nx
    }

    set y(ny){
        this.locationStrategy.y = ny
    }

    get x(){
        return this.locationStrategy.x
    }

    get y(){
        return this.locationStrategy.y
    }

    set location(nl){
        this.locationStrategy.x = nl.x
        this.locationStrategy.y = nl.y
    }

    get location(){
        return {x: this.x, y: this.y}
    }

    get inputLocation(){
        return this.locationStrategy.inputLocation
    }

    get collidables(){
        return []
    }

    update(dt){

    }

    render(dt){
        this.update(dt)
    }

}
