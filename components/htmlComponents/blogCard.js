class BlogCard extends Card{

    constructor(parent, title, description, link){
        super(parent, {title, className: "small-card"})
        const cardDescription = document.createElement('p')
        cardDescription.textContent = description
        this.add(cardDescription)
        const clickableContainerDiv = document.createElement('div')
        clickableContainerDiv.className = 'project-clickable-container'
        const clickableContainer = new ElementWrapper(this.view, clickableContainerDiv)

        const icon = new IconWithBg(clickableContainer.view, 'newspaper', {iconClassName: 'clickable-icon-color'})
        icon.view.classList.add('clickable-icon')

        icon.view.onclick = () => {
            window.open(link, "_blank")
        }

        clickableContainer.add(icon)
        this.add(clickableContainer)
    }
}