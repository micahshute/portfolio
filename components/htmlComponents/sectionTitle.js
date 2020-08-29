class SectionTitle extends HTMLManager{

    constructor(parent, text){
        super(parent, {})
        const h1 = document.createElement('h1')
        h1.className = `main-header`
        h1.textContent = `${text}`
        
        this.add(h1)
    }

    createView(){
        const headerDiv = document.createElement('div')
        headerDiv.className = "main-header-container"
        return headerDiv
    }

}