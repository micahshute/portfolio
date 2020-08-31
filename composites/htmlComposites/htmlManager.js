class HTMLManager extends HTMLComponent{

    constructor(ctx,viewArgs){
        super(ctx, viewArgs)
    }


    render(){ 
        super.render()
        for(let child of this.children){
            try{
            child.render()
            }catch(e){
                debugger
            }
        }
    }
     
    add_and_render(component){
        this.add(component)
        component.render()
    }


    add(component){
        if(component instanceof Element){
            const parent = this
            const componentWrapper = {
                parent,
                render: () => {
                    parent.view.appendChild(component)
                }
            }
            this.children.push(componentWrapper)
        }else{
            this.children.push(component)
            component.parent = this
        }
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