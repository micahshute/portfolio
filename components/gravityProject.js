class GravityProject extends ProjectPage{

    constructor(){
        super("Space", {
            githubLink: projects.space.sourceCode,
            projectDescription: projects.space.description,
            returnSprite: Transporter.getTransportCallback("80%", "40%", "left", "center")
        })
    }
}