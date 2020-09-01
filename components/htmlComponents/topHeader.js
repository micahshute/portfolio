class TopHeader extends HTMLComponent{

    constructor(quote){
        super({})
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