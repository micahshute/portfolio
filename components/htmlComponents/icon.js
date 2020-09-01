class Icon extends HTMLComponent{

    constructor(icon, opts={}){
        super({icon, ...opts})
    }

    createView(){
        const i = document.createElement('i')
        i.className = `fas fa-{{icon}} {{className}}`
        return i
    }
}