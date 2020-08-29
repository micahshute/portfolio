class Main extends HTMLManager{

    constructor(parent){
        super(parent, {})

        const topHeader = new TopHeader(this.view)

        const aboutSection = new MainSection(this.view, "About")
        const aboutText = document.createElement('p')
        aboutText.textContent = "Hello world"
        aboutSection.sectionContent.add(aboutText)

        const educationSection = new MainSection(this.view, "Education")
        const udCard = new Card(educationSection.view, {
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
        udCourseListHeader.textContent = 'Studied Topics:'
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

        udCard.addContent(udGPASummary)
        udCard.addContent(udpkp)
        udCard.addContent(udCourseListHeader)
        udCard.addContent(udCourseList)

        const flatironCard = new Card(educationSection.view, {
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
        fiCourseListHeader.textContent = 'Studied Topics:'
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

        flatironCard.addContent(fiCourseListHeader)
        flatironCard.addContent(fiCourseList)


        const usnaCard = new Card(educationSection.view, {
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
        usnaCard.addContent(usnaSS)

        educationSection.sectionContent.add(udCard)
        educationSection.sectionContent.add(flatironCard)
        educationSection.sectionContent.add(usnaCard)


        const skillsSection = new MainSection(this.view, "Skillset")

        const projectsSection = new MainSection(this.view, "Projects")

        const cardHolderDiv = document.createElement('div')
        cardHolderDiv.className = 'card-row-2'
        const cardHolder = new ElementWrapper(projectsSection.view, cardHolderDiv)


        const rbimgCard = new Card(cardHolder.view, {
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

        // const rbimgDesc = document.createElement('p')
        // rbimgDesc.textContent = projects.rbimg.description
        

        const clickableContainer = document.createElement('div')
        clickableContainer.className = 'project-clickable-container'
        

        const sourceCodeIcon = new IconWithBg(clickableContainer, "code", {iconClassName: 'clickable-icon-color'})
        sourceCodeIcon.view.classList.add("clickable-icon")
        sourceCodeIcon.view.onclick = () => {
            window.open(projects.rbimg.sourceCode, "_blank")
        }

        const infoIcon = new IconWithBg(clickableContainer, 'info', {iconClassName: 'clickable-icon-color'})
        infoIcon.view.classList.add('clickable-icon')
        infoIcon.view.onclick = () => {
            alert("rbimg stuff")
        }

        const clickableContainerManager = new ElementWrapper(rbimgCard.view, clickableContainer)
        clickableContainerManager.add(sourceCodeIcon)
        clickableContainerManager.add(infoIcon)

        rbimgCard.addContent(rbimgShortDesc)
        rbimgCard.addContent(clickableContainerManager)


        cardHolder.add(rbimgCard)
        projectsSection.sectionContent.add(cardHolder)

        const blogSection = new MainSection(this.view, "Blog")

        const contactSection = new MainSection(this.view, "Contact")

        const bioSection = new MainSection(this.view, "Bio")

        const resumeSection = new MainSection(this.view, "Resume")

        this.add(topHeader)
        this.add(aboutSection)
        this.add(educationSection)
        this.add(skillsSection)
        this.add(projectsSection)
        this.add(blogSection)
        this.add(contactSection)
        this.add(bioSection)
        this.add(resumeSection)
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