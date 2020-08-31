class LeftHeader extends HTMLManager{

    constructor(parent){
        super(parent, {})
        const hamburger = new Icon(this.view, 'bars', {className: 'hamburger'})
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
        alert("display modal")
    }



    createView(){
        const div = document.createElement('div')
        div.className = "ul-header full shadow"
        return div
    }


}