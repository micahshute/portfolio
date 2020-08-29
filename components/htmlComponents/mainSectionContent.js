class MainSectionContent extends HTMLManager{

    constructor(parent){
        super(parent, {})
    }

    createView(){
        const div = document.createElement('div')
        div.className = 'main-section-content'
        return div
    }
}