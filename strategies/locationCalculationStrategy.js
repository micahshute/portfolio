class LocationCalculationStrategy{

    constructor(location, canvas){
        this.canvas = canvas
        this.inputLocation = location
        this.location = {}
        this.xCoordinateDynamic = false
        this.yCoordinateDynamic = false
        if(typeof inputLocation.x === 'string' && inputLocation.x[inputLocation.x.length - 1] === "%"){
            this.xCoordinateDynamic = true
            this.location.x = parseInt(inputLocation.x.substring(0, inputLocation.x.length - 1)) / 100
        }else{
            this.location.x = inputLocation.x
        }
        if(typeof inputLocation.y === 'string' && inputLocation.y[inputLocation.y.length - 1] === "%"){
            this.yCoordinateDynamic = true
            this.location.y = parseInt(inputLocation.y.substring(0, inputLocation.y.length - 1)) / 100
        }else{
            this.location.y = inputLocation.y
        }
    }

    get dynamicX(){
        return this.canvas.width * this.location.x
    }

    get dynamicY(){
        return this.canvas.height * this.location.y
    }

    get x(){
        return this.xCoordinateDynamic ? this.dynamicX : this.location.x
    }

    get y(){
        return this.yCoordinateDynamic ? this.dynamicY : this.location.y 
    }
}