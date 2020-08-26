class DigiprocProject extends ProjectPage{

    constructor(){
        super("Digiproc", {
            githubLink: projects.digiproc.sourceCode,
            projectDescription: projects.digiproc.description,
            returnSprite: Transporter.getTransportCallback("40%", "40%", "left", "center")
        })
    }
}