class LocationCalculationStrategy{

    constructor(location, canvas){
        this.canvas = canvas
        this.inputLocation = location
        this.location = {}
        this.xCoordinateDynamic = false
        this.yCoordinateDynamic = false
        this.isMoving = false
        if(typeof this.inputLocation.x === 'string' && this.inputLocation.x[this.inputLocation.x.length - 1] === "%"){
            this.xCoordinateDynamic = true
            this.location.x = parseInt(this.inputLocation.x.substring(0, this.inputLocation.x.length - 1)) / 100
        }else{
            this.location.x = this.inputLocation.x
        }
        if(typeof this.inputLocation.y === 'string' && this.inputLocation.y[this.inputLocation.y.length - 1] === "%"){
            this.yCoordinateDynamic = true
            this.location.y = parseInt(this.inputLocation.y.substring(0, this.inputLocation.y.length - 1)) / 100
        }else{
            this.location.y = this.inputLocation.y
        }
    }

    get dynamicX(){
        return this.canvas.width * this.location.x
    }

    get dynamicY(){
        return this.canvas.height * this.location.y
    }

    set x(newX){
        if(typeof newX === 'string' && newX[newX.length - 1] === "%"){
            this.xCoordinateDynamic = true
            this.location.x = parseInt(newX.substing(0, newX.length - 1)) / 100
        }else{
            this.xCoordinateDynamic = false
            this.location.x = newX
        }
    }

    set y(newY){
        if(typeof newY === 'string' && newY[newY.length - 1] === "%"){
            this.yCoordinateDynamic = true
            this.location.y = parseInt(newY.substring(0, newY.length - 1)) / 100
        }else{
            this.yCoordinateDynamic = false
            this.location.y = newY
        }
    }


    get x(){
        return this.xCoordinateDynamic ? this.dynamicX : this.location.x
    }

    get y(){
        return this.yCoordinateDynamic ? this.dynamicY : this.location.y 
    }
}