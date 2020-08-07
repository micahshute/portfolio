class ComplexComponent extends Component{

    render(){ 
        for(let child of this.children){
            child.render()
        }
    }


    add(component){
        this.children.push(component)
        component.parent = this
    }

    remove(component){
        this.children = this.children.filter(c => c !== component)
        component.parent = null
    }
}