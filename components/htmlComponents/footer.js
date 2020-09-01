class Footer extends HTMLManager{

    constructor(){
        super({})
    }

    createView(){
        const div = document.createElement('div')
        div.className = "footer full shadow gray"
        return div
    }


}