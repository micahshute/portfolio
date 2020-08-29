class Icon extends HTMLComponent{

    constructor(parent, icon, opts={}){
        super(parent, {icon, ...opts})
    }

    createView(){
        const i = document.createElement('i')
        i.className = `fas fa-{{icon}} {{className}}`
        return i
    }
}