class MainSectionContent extends HTMLManager{

    constructor(){
        super({})
    }

    createView(){
        const div = document.createElement('div')
        div.className = 'main-section-content'
        return div
    }
}