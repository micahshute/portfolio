class MovingLocationCalculationStrategy{

    constructor(location, canvas, initStrat = LocationCalculationStrategy){
        this.inputLocation = location
        const initLocaitonCalc = new initStrat(location, canvas)
        this.location = {x: initLocaitonCalc.x, y: initLocaitonCalc.y}
        this.canvas = canvas
    }

    set x(nx){
        this.location.x = nx
    }

    set y(ny){
        this.location.y = ny
    }

    get x(){
        return this.location.x
    }

    get y(){
        return this.location.y
    }
}