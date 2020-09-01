class ElementWrapper extends HTMLManager{

    constructor(element){
        super({})
        this.view = element

    }

    createView(){
        return document.createElement('div')
    }
}