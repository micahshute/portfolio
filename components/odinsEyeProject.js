class OdinsEyeProject extends ProjectPage{

    constructor(){
        super("Odins Eye", {
            githubLink: projects.odinsEye.sourceCode,
            projectDescription: projects.odinsEye.description,
            linkLocation: {x: "30%", y: "10%"},
            returnSprite: Transporter.getTransportCallback("80%", "70%", "left", "center")
        })

        this.add(new CanvasLink(
            {x: "70%", y: "10%"}, 
             `Hosted Application`, 
            projects.odinsEye.hostedSite, 
            () => this.parent.sprite, 
            {}
            )
        )
    }
}