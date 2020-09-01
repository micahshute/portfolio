class LeftHeader extends HTMLManager{

    constructor(){
        super({})
        const hamburger = new Icon('bars', {className: 'hamburger'})
        hamburger.view.onclick = this.displaySidebarModal.bind(this)
        this.add(hamburger)
        const name = document.createElement('p')
        name.className = 'ul-name'
        name.textContent = "Micah Shute"
        this.add(name)

        const title = document.createElement('p')
        title.className = 'ul-title'
        title.textContent = "Software Engineer"
        this.add(title)

        const i = new Icon(this.view, 'code')
        i.view.classList.add('ul-symbol')
        this.add(i)
    }


    displaySidebarModal(){
        const navdiv = document.createElement('div')
        navdiv.className = "sidenav-modal"
        const navbar = Navbar.newWithParent(navdiv)
        navbar.view.classList.remove('hide-on-small')
        navbar.view.classList.remove('shadow')
        navbar.render()
        const modal = new Modal(navdiv, {
            style: {
                display: "grid",
                gridTemplateColumns: "150px 1fr",
                gridTemplateRows: "100px 1fr",
                gridTemplateAreas: '"nothimgA nothingB" "sidenav-modal nothingC"'
            }
        })//this.view, navdiv)
        modal.render()
    }



    createView(){
        const div = document.createElement('div')
        div.className = "ul-header full shadow"
        return div
    }


}