class BlogProject extends ProjectPage{

    constructor(){
        super("Medium CS/Mathematics Blog", {
            githubLink: projects.blogs.sourceCode,
            linkText: "",
            projectDescription: projects.blogs.description,
            returnSprite: Transporter.getTransportCallback("40%", "70%", "left", "center") 
        }) 
    }
}