class Navbar extends HTMLManager{

    constructor(ctx, viewArgs){
        super(ctx, viewArgs)
    }



    createView(){
        return `
            <div class="flex-column full navbar" id="links-container">
                <div id="home-link-div"></div>
                <div id="projects-link-div"></div>
                <div id="bio-link-div"></div>
            <div>
        `
    }

    declareBindingsAndEventListeners(){
        this.homeLinkDiv = document.querySelector('#home-link-div')
        this.projectsLinkDiv = document.querySelector('#projects-link-div')
        this.bioLinkDiv = document.querySelector('#bio-link-div')
        this.add_and_render(new Link(this.homeLinkDiv, {text: "Home", id: 'home-link'}))
        this.add_and_render(new Link(this.projectsLinkDiv, {text: "Projects"}))
        this.add_and_render(new Link(this.bioLinkDiv, {text: "Bio"}))
    }

    finalBindingsAndEventListeners(){
        this.homeLink = document.querySelector('#home-link')
        this.homeLink.addEventListener('click', e => {
            e.preventDefault()
            alert('Parent says home link clicked')
        })
    }
}