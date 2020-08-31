class SkillCard extends Card{

    constructor(parent, title, skills, opts={}){
        let sizeClass = ""
        if(opts.className){
            if(opts.className.includes("small-font")){
                sizeClass = "large-font"
            }else if(opts.className.includes("smaller-font")){
                sizeClass = "larger-font"
            }
        }
        
        super(parent, {title, className: 'bold', ...opts, titleOpts: {className: `bold margin-bottom-md ${sizeClass}`}})

        const skillRow = document.createElement('div')
        skillRow.style.display = "flex"
        skillRow.style.justifyContent = "space-around"
        skillRow.style.width = "100%"
        skillRow.style.height = "100%"
        for(let skill in skills){
            const imgLabelContainer = document.createElement('div')
            imgLabelContainer.style.display = 'flex'
            imgLabelContainer.style.flexDirection = 'column'
            imgLabelContainer.style.alignItems = 'center'
            
            const img = document.createElement('img')
            img.src = skills[skill].img
            switch(skills[skill].label){
                case "Sinatra":
                    img.width = 50
                    img.height = 40
                    img.style.marginTop = "10px"
                    break
                default:
                    img.width = 50
                    img.height = 50
            }
            

            const label = document.createElement('p')
            label.textContent = skills[skill].label

            imgLabelContainer.appendChild(img)
            imgLabelContainer.appendChild(label)
            skillRow.appendChild(imgLabelContainer)
        }

        this.add(skillRow)
    }


}