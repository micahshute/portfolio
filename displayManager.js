class DisplayManager{

    static parse(html, args){
        if(!html){
            return html
        }
        let parsed = html
        if(!args){
            const re = new RegExp(`{{\\s*.*\\s*}}`, 'g')
            parsed = parsed.replace(re, '')
            return parsed
        }
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
        if(domElement.tagName == "A"){
            domElement.href = DisplayManager.parse(unescape(domElement.getAttribute('href')), args)
            domElement.target = DisplayManager.parse(domElement.target, args)
        }
        domElement.innerHTML = DisplayManager.parse(domElement.innerHTML, args)
        this.parseStyle(domElement, args)
    }

    static parseStyle(domElement, args){
        if(!args || !args.style){
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