class ProjectDescriptionModal extends Modal{

    constructor(title, description){
        const card = Card.getView({title})
        const p = document.createElement('p')
        p.textContent = description
        card.appendChild(p)
        card.style.position = "fixed"
        card.style.top = "15%"
        card.style.left = "20%"
        card.style.width = "70%"
        card.style.maxHeight = "60%"
        card.style.shadow = "none"
        card.style.justifyContent = "space-between"
        card.style.overflowY = "scroll"
        super(card)
    }


}