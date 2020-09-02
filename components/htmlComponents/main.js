class Main extends HTMLManager{

    constructor(){
        super({})
        // this.view.onscroll = () => this.view.scrollLeft = 0


        // MARK: QUOTES
        const topHeader = new TopHeader(QUOTES)
        

        //MARK: ABOUT

        const aboutSection = new MainSection("About")
        const aboutText = document.createElement('p')
        aboutText.innerHTML = about
        aboutText.className = 'about-me'
        aboutText.style.lineHeight = 2
        aboutSection.sectionContent.add(aboutText)




        //MARK: EDUCATION

        const educationSection = new MainSection("Education")
        const udCard = new Card({
            title: "M.S. Computer and Electrical Engineering",
            subtitle: "University of Delaware",
            subtitleOpts: {
                style: {
                    display: 'inline-block'
                },
                withImage: {
                    url: '../../public/assets/images/ud_logo.png',
                    width: 53,
                    height: 25
                }
            }
        })

        const udGPASummary = document.createElement('h5')
        udGPASummary.className = 'course-card-header'
        udGPASummary.textContent = "4.0 GPA"
        udGPASummary.style.margin = 0

        const udpkp = document.createElement('h5')
        udpkp.className = 'course-card-header'
        udpkp.textContent = "Phi Kappa Phi"
        udpkp.style.margin = 0

        const udCourseListHeader = document.createElement('h5')
        udCourseListHeader.className = 'course-card-header'
        udCourseListHeader.textContent = 'Studied Topics'
        udCourseListHeader.style.margin = 0
        const udCourseList = document.createElement('ul')
        udCourseList.style.margin = 0
        udCourseList.className = "course-list"
        const courses = [
            this.createLI('Modern Machine Learning'),
            this.createLI('Search and Data Mining'),
            this.createLI('Cryptography'),
            this.createLI('Computer Networks'),
            this.createLI('Cybersecurity'),
            this.createLI('Digital Signal Processing'),
            this.createLI('Signals and Systems'),
            this.createLI('Digital Communications'),
            this.createLI('The Smart Grid')
        ]
        
        for(let course of courses){
            udCourseList.appendChild(course)
        }

        udCard.add(udGPASummary)
        udCard.add(udpkp)
        udCard.add(udCourseListHeader)
        udCard.add(udCourseList)

        const flatironCard = new Card({
            title: "Full Stack Web Development",
            subtitle: "Flatiron School",
            subtitleOpts: {
                style: {
                    display: 'inline-block'
                },
                withImage: {
                    url: '../../public/assets/images/flatiron.jpeg',
                    width: 22,
                    height: 22,
                    style: {
                        marginLeft: '10px'
                    }
                }
            }
        })

        const fiCourseListHeader = document.createElement('h5')
        fiCourseListHeader.className = 'course-card-header'
        fiCourseListHeader.textContent = 'Studied Tools'
        fiCourseListHeader.style.margin = 0

        const fiCourseList = document.createElement('ul')
        fiCourseList.style.margin = 0
        fiCourseList.className = "course-list"
        const fiCourses = [
            this.createLI('Ruby'),
            this.createLI('Sinatra'),
            this.createLI('Ruby on Rails'),
            this.createLI('JavaScript'),
            this.createLI('React'),
            this.createLI('SQL'),
            this.createLI('HTML'),
            this.createLI('CSS'),
            
        ]
        
        for(let course of fiCourses){
            fiCourseList.appendChild(course)
        }

        flatironCard.add(fiCourseListHeader)
        flatironCard.add(fiCourseList)

        const npsCard = new Card({
            title: "Nuclear Engineering",
            subtitle: "Naval Nuclear Power School",
            subtitleOpts: {
                style: {
                    display: 'inline-block',
                },
                withImage: {
                    url: '../../public/assets/images/nps.png',
                    width: 25,
                    height: 25,
                    style: {
                        marginLeft: '10px'
                    }
                }
            }
        })

        const npsHdr = document.createElement('h5')
        npsHdr.className = 'course-card-header'
        npsHdr.textContent = "Studied to supervise a nuclear power plant"
        npsHdr.style.margin = 0

        const npsCourseList = document.createElement('ul')
        npsCourseList.style.margin = 0
        npsCourseList.className = "course-list"
        const npsCourses = [
            this.createLI('Nuclear Engineering'),
            this.createLI('Electrical Engineering'),
            this.createLI('Thermodynamics'),
            this.createLI('Chemistry'),
            this.createLI('Materials'),
            this.createLI('Nuclear Reactor Dynamics')  
        ]
        
        for(let course of npsCourses){
            npsCourseList.appendChild(course)
        }

        npsCard.add(npsHdr)
        npsCard.add(npsCourseList)




        const usnaCard = new Card({
            title: "B.S. Control Systems Engineering",
            subtitle: "United States Naval Academy",
            subtitleOpts: {
                style: {
                    display: 'inline-block',
                },
                withImage: {
                    url: '../../public/assets/images/usna.png',
                    width: 20,
                    height: 25,
                    style: {
                        marginLeft: '10px'
                    }
                }
            }
        })

        const usnaSS = document.createElement('h5')
        usnaSS.className = 'course-card-header'
        usnaSS.textContent = "Commissioned as a Nuclear Submarine Officer"
        usnaSS.style.margin = 0
        usnaCard.add(usnaSS)

        educationSection.sectionContent.add(udCard)
        educationSection.sectionContent.add(flatironCard)
        educationSection.sectionContent.add(npsCard)
        educationSection.sectionContent.add(usnaCard)




        //MARK: SKILLS 

        const skillsSection = new MainSection("Skillset")

        const languagesCard = new SkillCard(
            "Languages", 
            languages
        )
        const frameworksCard = new SkillCard(
            "Libraries / Frameworks", 
            frameworks,
            {
                className: "bold smaller-font"
            }
        )
        
        const otherTechnologiesCard = new SkillCard(
            "Other Technologies",
            technologies
        )

        const certificationsCard = new SkillCard(
            "Certifications and Honors",
            certifications,
            {
                className: "bold small-font"
            }
        )

        const otherSkillsCard = new SkillCard(
            "Other Skills",
            otherSkills,
            {
                className: "bold small-font"
            }
        )

        skillsSection.add(languagesCard)
        skillsSection.add(frameworksCard)
        skillsSection.add(otherTechnologiesCard)
        skillsSection.add(certificationsCard)
        skillsSection.add(otherSkillsCard)




        //MARK: PROJECTS

        const projectsSection = new MainSection("Projects")

        const cardHolder1 = new HorizontalViewer()

        const rbimgCard = new Card({
            title: "Rbimg",
            subtitle: "Ruby Gem",
            className: "small-card",
            subtitleOpts: {
                style: {
                    display: 'inline-block'
                },
                withImage: {
                    url: '../../public/assets/images/ruby.png',
                    width: 20,
                    height: 20,
                    style: {
                        marginLeft: '10px'
                    }
                }
            }
        })

        const rbimgShortDesc = document.createElement('p')
        rbimgShortDesc.textContent = "PNG file parsing, processing, and writing"

        const clickableContainer = document.createElement('div')
        clickableContainer.className = 'project-clickable-container'
        

        const sourceCodeIcon = new IconWithBg("code", {iconClassName: 'clickable-icon-color'})
        sourceCodeIcon.view.classList.add("clickable-icon")
        sourceCodeIcon.view.onclick = () => {
            window.open(projects.rbimg.sourceCode, "_blank")
        }

        const infoIcon = new IconWithBg('info', {iconClassName: 'clickable-icon-color'})
        infoIcon.view.classList.add('clickable-icon')
        infoIcon.view.onclick = () => {
            const modal = new ProjectDescriptionModal("Rbimg", projects.rbimg.description)
            modal.render()
        }

        const clickableContainerManager = new ElementWrapper(clickableContainer)
        clickableContainerManager.add(sourceCodeIcon)
        clickableContainerManager.add(infoIcon)

        rbimgCard.add(rbimgShortDesc)
        rbimgCard.add(clickableContainerManager)


        const odinsEyeCard = new Card({
            title: "Odins's Eye",
            subtitle: "Fullstack Web App",
            className: "small-card",
            subtitleOpts: {
                style: {
                    display: 'inline-block'
                }
            }
        })

        const imgContainer = new ElementWrapper(document.createElement('div'))
        const railsImg = document.createElement('img')
        railsImg.src = '../../public/assets/images/rails.png'
        railsImg.width = 20
        railsImg.height = 25
        railsImg.style.marginRight = '10px'
        const jsImg = document.createElement('img')
        jsImg.src = '../../public/assets/images/js.png'
        jsImg.width = 20
        jsImg.height = 20
        imgContainer.add(railsImg)
        imgContainer.add(jsImg)
        odinsEyeCard.add(imgContainer)

        const oeShortDesc = document.createElement('p')
        oeShortDesc.textContent = "Markdown blogging app with social media, messaging, and virtual classrooms"
        
        odinsEyeCard.add(oeShortDesc)

        const oeClickableContainerDiv = document.createElement('div')
        oeClickableContainerDiv.className = 'project-clickable-container'
        const oeClickableContainer = new ElementWrapper(oeClickableContainerDiv)

        const oeInfoIcon = new IconWithBg('info', {iconClassName: 'clickable-icon-color'})
        const oeSourceCodeIcon =  new IconWithBg('code', {iconClassName: 'clickable-icon-color'})
        const oeHostedSiteIcon = new IconWithBg('laptop', {iconClassName: 'clickable-icon-color' })
        
        oeInfoIcon.view.classList.add('clickable-icon')
        oeSourceCodeIcon.view.classList.add('clickable-icon')
        oeHostedSiteIcon.view.classList.add('clickable-icon')

        oeSourceCodeIcon.view.onclick = () => {
            window.open(projects.odinsEye.sourceCode, "_blank")
        }

        oeHostedSiteIcon.view.onclick = () => {
            window.open(projects.odinsEye.hostedSite, "_blank")
        }

        oeInfoIcon.view.onclick = () => {
            const modal = new ProjectDescriptionModal("Odin's Eye", projects.odinsEye.description)
            modal.render()
        }

        oeClickableContainer.add(oeSourceCodeIcon)
        oeClickableContainer.add(oeHostedSiteIcon)
        oeClickableContainer.add(oeInfoIcon)
        
        odinsEyeCard.add(oeClickableContainer)



        const digiprocCard = new Card({
            title: "Digiproc",
            subtitle: "Ruby Gem",
            className: "small-card",
            subtitleOpts: {
                style: {
                    display: 'inline-block',
                },
                withImage: {
                    url: '../../public/assets/images/ruby.png',
                    width: 20,
                    height: 20,
                    style: {
                        marginLeft: '10px'
                    }
                }
            }
        })

        const digiprocShortDesc = document.createElement('p')
        digiprocShortDesc.textContent = "Digital Signal Processing gem which allows FFT calculation, filtering, encoding, etc."

        digiprocCard.add(digiprocShortDesc)

        const dpClickableContainerDiv = document.createElement('div')
        dpClickableContainerDiv.className = 'project-clickable-container'
        const dpClickableContainer = new ElementWrapper(dpClickableContainerDiv)

        const dpInfoIcon = new IconWithBg('info', {iconClassName: 'clickable-icon-color'})
        const dpSourceCodeIcon =  new IconWithBg('code', {iconClassName: 'clickable-icon-color'})
        dpInfoIcon.view.classList.add('clickable-icon')
        dpSourceCodeIcon.view.classList.add('clickable-icon')

        dpSourceCodeIcon.view.onclick = () => {
            window.open(projects.digiproc.sourceCode, "_blank")
        }
        dpInfoIcon.view.onclick = () => {
            const modal = new ProjectDescriptionModal('Digiproc', projects.digiproc.description)
            modal.render()
        }

        dpClickableContainer.add(dpSourceCodeIcon)
        dpClickableContainer.add(dpInfoIcon)
        
        digiprocCard.add(dpClickableContainer)


        const spaceCard = new Card({
            title: "JS Gravity Sim",
            subtitle: "JS Frontend App",
            className: "small-card",
            subtitleOpts: {
                style: {
                    display: 'inline-block',
                },
                withImage: {
                    url: '../../public/assets/images/js.png',
                    width: 20,
                    height: 20,
                    style: {
                        marginLeft: '10px'
                    }
                }
            }
        })

        const spaceShortDesc = document.createElement('p')
        spaceShortDesc.textContent = "Simple frontend app which can simulate gravitational interactions between large masses (Newtonian Calculations)"

        spaceCard.add(spaceShortDesc)

        const spaceClickableContainerDiv = document.createElement('div')
        spaceClickableContainerDiv.className = 'project-clickable-container'
        const spaceClickableContainer = new ElementWrapper(spaceClickableContainerDiv)

        const spaceInfoIcon = new IconWithBg('info', {iconClassName: 'clickable-icon-color'})
        const spaceSourceCodeIcon =  new IconWithBg('code', {iconClassName: 'clickable-icon-color'})
        spaceInfoIcon.view.classList.add('clickable-icon')
        spaceSourceCodeIcon.view.classList.add('clickable-icon')

        spaceSourceCodeIcon.view.onclick = () => {
            window.open(projects.space.sourceCode, "_blank")
        }
        spaceInfoIcon.view.onclick = () => {
            const modal = new ProjectDescriptionModal('Gravity Sim', projects.space.description)
            modal.render()
        }

        spaceClickableContainer.add(spaceSourceCodeIcon)
        spaceClickableContainer.add(spaceInfoIcon)
        
        spaceCard.add(spaceClickableContainer)



        cardHolder1.add(rbimgCard)
        cardHolder1.add(odinsEyeCard)
        cardHolder1.add(digiprocCard)
        cardHolder1.add(spaceCard)
        projectsSection.add(cardHolder1)

        const blogSection = new MainSection("Blog")

        const smallCardHolder = new HorizontalViewer()

        const dijkstra = new BlogCard(blogs.dijkstra.title, blogs.dijkstra.description, blogs.dijkstra.link)
        const pca = new BlogCard(blogs.pca.title, blogs.pca.description, blogs.pca.link)
        const montyHall = new BlogCard(blogs.monty.title, blogs.monty.description, blogs.monty.link)
        const bigo = new BlogCard(blogs.bigo.title, blogs.bigo.description, blogs.bigo.link)
        const fft = new BlogCard(blogs.fft.title, blogs.fft.description, blogs.fft.link)



        smallCardHolder.add(dijkstra)
        smallCardHolder.add(pca)
        smallCardHolder.add(montyHall)
        smallCardHolder.add(fft)
        smallCardHolder.add(bigo)
        blogSection.add(smallCardHolder)

        

        //MARK: CONTACT

        const contactSection = new MainSection("Contact")

        const buttonLinkContainerDiv = document.createElement('div')
        buttonLinkContainerDiv.style.display = 'flex'
        buttonLinkContainerDiv.style.justifyContent = 'flex-start'
        buttonLinkContainerDiv.style.alignItems = 'center'
        buttonLinkContainerDiv.style.padding = '20px';
        const buttonLinkContainer = new ElementWrapper(buttonLinkContainerDiv)

        const emailIcon = new IconWithBg('envelope', {iconClassName: 'clickable-icon-color'})
        const emailLink = new Link({
            id: "mailto-link", 
            text: "micah.shute@gmail.com", 
            url: '#',
            className: 'dark-text bold-on-hover',
            onClick: (e) => {
                e.preventDefault()
                window.open('mailto:micah.shute@gmail.com', "_blank")
            }
        }
        )

        emailIcon.view.classList.add('clickable-icon')
        emailIcon.view.onclick = () => {
            window.open('mailto:micah.shute@gmail.com', "_blank")
        }

        buttonLinkContainer.add(emailIcon)
        buttonLinkContainer.add(emailLink)

        const linkedinContainerDiv = document.createElement('div')
        linkedinContainerDiv.style.display = 'flex'
        linkedinContainerDiv.style.justifyContent = 'flex-start'
        linkedinContainerDiv.style.alignItems = 'center'
        linkedinContainerDiv.style.padding = '20px';
        const linkedinContainer = new ElementWrapper(linkedinContainerDiv)

        const linkedinIcon = new IconWithBg('linkedin-in', {iconClassName: 'clickable-icon-color'}, "b")
        linkedinIcon.view.classList.add('clickable-icon')
        linkedinIcon.view.onclick = () => window.open('https://linkedin.com/in/micahshute')

        const linkedinLink = new Link({
            id: 'linkedin-link',
            text: 'linkedin.com/in/micahshute',
            url: 'https://linkedin.com/in/micahshute',
            className: 'dark-text bold-on-hover',
            target: "_blank"
        })

        linkedinContainer.add(linkedinIcon)
        linkedinContainer.add(linkedinLink)

        

        const githubContainerDiv = document.createElement('div')
        githubContainerDiv.style.display = "flex"
        githubContainerDiv.style.justifyContent = 'flex-start'
        githubContainerDiv.style.alignItems = 'center'
        githubContainerDiv.style.padding = '20px'

        const githubContainer = new ElementWrapper(githubContainerDiv)

        const githubIcon = new IconWithBg('github', {iconClassName: 'clickable-icon-color'}, 'b')
        githubIcon.view.classList.add('clickable-icon')
        githubIcon.view.onclick = () => window.open('https://github.com/micahshute')

        const githubLink = new Link({
            id: 'github-link',
            text: 'github.com/micahshute',
            url: 'https://github.com/micahshute',
            className: 'dark-text bold-on-hover',
            target: '_blank'
        })


        githubContainer.add(githubIcon)
        githubContainer.add(githubLink)


        contactSection.sectionContent.add(buttonLinkContainer)
        contactSection.sectionContent.add(linkedinContainer)
        contactSection.sectionContent.add(githubContainer)

        //MARK: BIO

        const bioSection = new MainSection("Bio")

        const bioDiv = document.createElement('div')
        bioDiv.style.display = 'flex'
        bioDiv.style.justifyContent = 'space-between'
        bioDiv.style.alignItems = 'center'

        const bioPic = document.createElement('img')
        bioPic.src = '../../public/assets/images/bw_profile.jpg'
        bioPic.height = 530
        bioPic.width = 258
        bioPic.style.margin = '10px'
        bioPic.style.borderRadius = '5px'
        bioPic.style.boxShadow = '1px 1px 3px 3px rgba(0,0,0,0.2)'


        const bioP = document.createElement('p')
        bioP.textContent = bio
        bioP.style.fontWeight = 600
        bioP.style.fontSize = '1.1em'
        

        bioDiv.appendChild(bioPic)
        bioDiv.appendChild(bioP)

        bioSection.sectionContent.add(bioDiv)
        // const resumeSection = new MainSection(this.view, "Resume")

        this.add(topHeader)
        this.add(aboutSection)
        this.add(educationSection)
        this.add(skillsSection)
        this.add(projectsSection)
        this.add(blogSection)
        this.add(contactSection)
        this.add(bioSection)
        // this.add(resumeSection)
    }

    createView(){
        const main = document.createElement('div')
        main.className = "main-component full"
        return main
    }

    createLI(txt){
        const li = document.createElement('li')
        li.textContent = txt
        return li
    }

    


}