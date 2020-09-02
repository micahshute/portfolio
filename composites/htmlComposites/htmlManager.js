class HTMLManager extends HTMLComponent{

    constructor(viewArgs){
        super(viewArgs)
    }


    // render(){ 
    //     super.render()
    //     for(let child of this.children){
    //         // try{
    //         child.render()
    //         // }catch(e){
    //         //     debugger
    //         // }
    //     }
    // }

    async render(){
        if(this.view){
            try{
                this.parent.view.appendChild(this.view)
            }catch(e){
                try{
                    this.parent.appendChild(this.view)
                }catch(e2){
                    console.log(this)
                    console.log(this.parent)
                    console.log(`You tried to render ${this} without a valid parent: ${this.parent}`)
                }
            }
        }
        Promise.all(this.children.map(c => c.render())).then(async () => {
            this.declareBindingsAndEventListeners()
            this.establishEventListeners()
            await this.fetchAndRenderData()
            this.finalBindingsAndEventListeners()
            this.establishEventListeners()
        })
        
    }
     
    add_and_render(component){
        this.add(component)
        component.render()
    }


    add(component){
        if(component instanceof Element){
            const componentWrapper = new ElementWrapper(component)
            this.children.push(componentWrapper)
            componentWrapper.parent = this
        }else{
            this.children.push(component)
            component.parent = this
        }
    }

    async derender(){
        await super.derender()
        for(let child of this.children){
            await child.derender()
        }
        this.children = []
    }

    remove(component){
        this.children = this.children.filter(c => c !== component)
        component.parent = null
    }


    reload(){
        this.view.remove()
        this.render()
    }

}