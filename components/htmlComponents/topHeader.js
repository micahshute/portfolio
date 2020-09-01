class TopHeader extends HTMLComponent{

    constructor(parent, quote){
        super(parent, {})
    }

    changeQuote(newQuote){
        
    }

    addQuote(){

    }

    removeQuote(){
        
    }

    createView(){
        const header = document.createElement('div')
        header.className = 'top-header'
        return header
    }


}