class MainSection extends HTMLManager{

    constructor(title){
        super({})
        const hiddenAnchor = document.createElement('a')
        hiddenAnchor.id = title.toLowerCase()
        hiddenAnchor.className = "anchor"
        hiddenAnchor.style.display = "hidden"
        
        const sectionTitle = new SectionTitle(title)
        this.sectionContent = new MainSectionContent()

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