class TopHeader extends HTMLComponent{

    constructor(parent){
        super(parent, {})
    }

    createView(){
        const header = document.createElement('div')
        header.className = 'top-header'
        return header
    }


}