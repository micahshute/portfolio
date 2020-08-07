class Picture extends ComplexComponent{

    constructor(canvas){
        super()
        this.canvas = canvas
    }

    render(dt){ 
        for(let child of this.children){
            child.render(dt)
        }
    }


}