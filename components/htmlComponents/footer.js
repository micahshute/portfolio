class Footer extends HTMLManager{

    constructor(parent){
        super(parent, {})
    }

    createView(){
        const div = document.createElement('div')
        div.className = "footer full shadow gray"
        return div
    }


}