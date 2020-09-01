class HTMLManager extends HTMLComponent{

    constructor(ctx,viewArgs){
        super(ctx, viewArgs)
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
            // const parent = this
            // const componentWrapper = {
            //     parent,
            //     render: () => {
            //         parent.view.appendChild(component)
            //     }
            // }
            const componentWrapper = new ElementWrapper(this.view, component)
            this.children.push(componentWrapper)
            // componentWrapper.parent = this
        }else{
            this.children.push(component)
            // component.parent = this
        }
    }

    removeFromDom(){
        for(let child of this.children){
            child.removeFromDom()
        }
        this.children = []
    }

    remove(component){
        this.children = this.children.filter(c => c !== component)
        component.parent = null
    }


    reload(){
        this.context.innerHTML = ''
        render()
    }

}