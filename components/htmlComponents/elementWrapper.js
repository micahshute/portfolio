class ElementWrapper extends HTMLManager{

    constructor(parent,element){
        super(parent, {})
        this.view = element

    }

    createView(){
        return document.createElement('div')
    }
}