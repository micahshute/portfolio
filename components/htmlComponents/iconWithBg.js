class IconWithBg extends HTMLManager{
    constructor(icon, opts={}, type="s"){
        super({})
        this.add(new Icon('circle', {className: `fa-stack-2x ${opts.circleClassName}`}))
        this.add(new Icon(icon, {className: `fa-stack-1x fa-inverse ${opts.iconClassName}`}, type))

    }

    createView(){
        const span = document.createElement('span')
        span.className = 'fa-stack'
        span.style.verticalAlign = 'top'
        return span
    }
}