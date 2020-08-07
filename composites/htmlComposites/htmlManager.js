class HTMLManager extends HTMLComponent{

    constructor(ctx, viewPath, viewArgs){
        super(ctx, viewPath, viewArgs)
    }


    render(){ 
        super.render()
        for(let child of this.children){
            child.render()
        }
    }
     
    add_and_render(component){
        this.add(component)
        component.render()
    }


    add(component){
        this.children.push(component)
        component.parent = this
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