class DisplayManager{

    static parse(html, args){
        if(!args || !html){
            return html
        }
        let parsed = html
        for(let arg in args){
            const re = new RegExp(`{{\\s*${arg}\\s*}}`, 'g')
            parsed = parsed.replace(re, args[arg])
        }
        const re = new RegExp(`{{\\s*.*\\s*}}`, 'g')
        parsed = parsed.replace(re, '')
        return parsed
    }

    static processElement(domElement, args){
        domElement.textContent = DisplayManager.parse(domElement.textContent, args)
        domElement.className = DisplayManager.parse(domElement.className, args)
        domElement.id = DisplayManager.parse(domElement.id, args)
        domElement.innerHTML = DisplayManager.parse(domElement.innerHTML, args)
        this.parseStyle(domElement, args)
    }

    static parseStyle(domElement, args){
        if(!args.style){
            return domElement
        }else{
            for(let styleKey in args.style){
                domElement.style[styleKey] = args.style[styleKey]
            }
            return domElement
        }
    }

    static sanitize(txt){
        return txt.replace(/[\<\>\;'"(){\}\[\]\/\\]/g, '')
    }
}