class Icon extends HTMLComponent{

    constructor(icon, opts={}, type="s"){
        super({icon, ...opts, type})
    }

    createView(){
        const i = document.createElement('i')
        i.className = `fa{{type}} fa-{{icon}} {{className}}`
        return i
    }
}