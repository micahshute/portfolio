class DisplayManager{

    static parse(html, args){
        var parsed = html
        for(let arg in args){
            const re = new RegExp(`{{\\s*${arg}\\s*}}`, 'g')
            parsed = parsed.replace(re, args[arg])
        }
        return parsed
    }

    static sanitize(txt){
        return txt.replace(/[\<\>\;'"(){\}\[\]\/\\]/g, '')
    }
}