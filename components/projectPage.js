class ProjectPage extends Picture{

    constructor(projectName, {githubLink, projectDescription, returnSprite, linkText="Source Code", linkLocation={x: "50%", y: "10%"}}){
        super(document.querySelector('canvas'), {x: -1, y: -1})

        this.add(new CanvasLink(
            linkLocation, 
             `${projectName} ${linkText}`, 
            githubLink, 
            () => this.parent.sprite, 
            {}
            )
        )

        this.add(new Collidable(new Door(
            this.canvas,
            {x: "1%", y: "1%"},
            doorWidth(), 
            doorHeight(),
            {
                label: "Back"
            }
        ), () => {
            this.parent.add(new ProjectsPage(this.canvas))
            returnSprite()
            this.parent.remove(this)
        }))


        this.add(
            new CanvasTextManager(
                projectDescription, 
                this.canvas, 
                { x: "10%", y: "25%"},
                {
                    textAlign: 'start',
                    font: 'Raj',
                    fontSize: "25px", 
                    fontWeight: 300,
                    fontColor: "#CCCCCC"
                }
            )
        )
    }
}