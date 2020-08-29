class MainSection extends HTMLManager{

    constructor(parent, title){
        super(parent, {})
        const hiddenAnchor = document.createElement('a')
        hiddenAnchor.id = title.toLowerCase()
        hiddenAnchor.style.display = "hidden"
        
        const sectionTitle = new SectionTitle(this.view, title)
        this.sectionContent = new MainSectionContent(this.view)

        this.add(hiddenAnchor)
        this.add(sectionTitle)
        this.add(this.sectionContent)
    }


    createView(){
        const mainSection = document.createElement('section')
        mainSection.className = 'main-section'
        return mainSection
    }



}