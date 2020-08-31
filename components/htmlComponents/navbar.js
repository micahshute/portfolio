class Navbar extends HTMLManager{

    constructor(ctx, viewArgs){
        super(ctx, viewArgs)
        this.add(new SidenavLink(this.view, 'user', 'About', {url: "#about"}))
        this.add(new SidenavLink(this.view, 'university', 'Education', {url: "#education"}))
        this.add(new SidenavLink(this.view, 'laptop-code', 'Skillset', {url: "#skillset"}))
        this.add(new SidenavLink(this.view, 'project-diagram', "Projects", {url: "#projects"}))
        this.add(new SidenavLink(this.view, 'pen-fancy', "Blog", {url: "#blog"}))
        this.add(new SidenavLink(this.view, 'envelope', "Contact", {url: "#contact"}))
        this.add(new SidenavLink(this.view, 'address-card', "Bio", {url: "bio"}))
        this.add(new SidenavLink(this.view, 'file-alt', "Resume", {url: "#resume"}))

    }



    createView(){
        const div = document.createElement('nav')
        div.className = "flex-col full navbar hide-on-small shadow {{className}}"
        div.id = "links-container"
        return div
    }

}