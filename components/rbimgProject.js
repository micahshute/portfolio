class RbimgProject extends ProjectPage{

    constructor(){
        super("Rbimg", {
            githubLink: projects.rbimg.sourceCode,
            projectDescription: projects.rbimg.description,
            returnSprite: Transporter.getTransportCallback("80%", "10%", "left", "center")
        })
    }


}