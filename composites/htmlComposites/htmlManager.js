class HTMLManager extends HTMLComponent{

    constructor(viewArgs){
        super(viewArgs)
    }


    render(){ 
        super.render()
        for(let child of this.children){
            // try{
            child.render()
            // }catch(e){
            //     debugger
            // }
        }
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