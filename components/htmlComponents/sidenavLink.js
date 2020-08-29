class SidenavLink extends HTMLManager{


    constructor(parent, icon, label, {url = "#", callback= () => null, color= "white"}){
        super(parent, {})
        const iconGrid = new GridContainer(this.view, "icon")
        const labelGrid = new GridContainer(this.view, "label")
        const i = new Icon(iconGrid.view, icon)
        i.view.classList.add("sidenav-icon")
        const link = new Link(labelGrid.view, {text: label, id: `${label.toLowerCase()}-link`,url: "#", onClick: (e) => { e.preventDefault() }})
        labelGrid.add(link)
        iconGrid.add(i)
        this.view.onclick = () => {
            window.location.hash = url
            history.pushState({}, '', '/')
        }
        this.add(iconGrid)
        this.add(labelGrid)
    }

    createView(){
        const sidenavLink = document.createElement('div')
        sidenavLink.className = 'sidenav-link-div'
        return sidenavLink
    }


}