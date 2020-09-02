class Navbar extends HTMLManager{

    constructor(viewArgs){
        super(viewArgs)
        this.add(new SidenavLink('user', 'About', {url: "#about"}))
        this.add(new SidenavLink('university', 'Education', {url: "#education"}))
        this.add(new SidenavLink('laptop-code', 'Skillset', {url: "#skillset"}))
        this.add(new SidenavLink('project-diagram', "Projects", {url: "#projects"}))
        this.add(new SidenavLink('pen-fancy', "Blog", {url: "#blog"}))
        this.add(new SidenavLink('envelope', "Contact", {url: "#contact"}))
        this.add(new SidenavLink('address-card', "Bio", {url: "#bio"}))
        this.add(new SidenavLink('file-alt', "Resume", {callback: () => window.open(resumeLink, "_blank")}))
        this.add(new SidenavLink('dungeon', "Explore", {callback: () => renderCanvasSite()}))

    }



    createView(){
        const div = document.createElement('nav')
        div.className = "flex-col full navbar hide-on-small shadow {{className}}"
        div.id = "links-container"
        return div
    }

}