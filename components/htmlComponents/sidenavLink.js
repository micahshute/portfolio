class SidenavLink extends HTMLManager{


    constructor(icon, label, {
        url = "#", 
        callback= () => {
            window.location.hash = url
            history.pushState({}, '', '/')
        }, 
        color= "white"
    }){
        super({})
        const iconGrid = new GridContainer("icon")
        const labelGrid = new GridContainer("label")
        const i = new Icon(icon)
        i.view.classList.add("sidenav-icon")

        const link = new Link({
            text: label, 
            id: `${label.toLowerCase()}-link`,
            url: "#", 
            onClick: (e) => { e.preventDefault() }
        })//, labelGrid.view)

        labelGrid.add(link)
        iconGrid.add(i)
        this.view.onclick = callback
        this.add(iconGrid)
        this.add(labelGrid)
    }

    createView(){
        const sidenavLink = document.createElement('div')
        sidenavLink.className = 'sidenav-link-div'
        return sidenavLink
    }


}