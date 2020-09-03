class Picture extends ComplexComponent{

    constructor(canvas, location, priority = 1,locationStrategy = LocationCalculationStrategy){
        super()
        this.priority = priority
        this.canvas = canvas
        this.locationStrategy = new locationStrategy(location, canvas)
    }

    render(dt){ 
        for(let child of this.children){
            child.render(dt)
        }
    }

    removeAllChildren(){
        for(let child of this.children){
            child.parent = null;
        }
        this.children = []
    }

    set x(nx){z
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
        return this.children.map(c => c.collidables).flat(Number.POSITIVE_INFINITY)
    }
    add(component){
        super.add(component)
        this.children = this.children.sort((a,b) => a.priority - b.priority)
    }

}