class Component{

    constructor(){
        this.children = []
        this.parent = null
    }

    render(){
        return null
    }

    add(component){
        throw "A leaf cannot add a child"
    }

    remove(component){
        throw "A leaf cannot remove children"
    }

    getChild(i){
        const res = this.children[i]
        if(i === undefined){
            throw "this child does not exist"
        }
        return res
    }

}