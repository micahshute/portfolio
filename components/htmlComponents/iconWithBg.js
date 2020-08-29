class IconWithBg extends HTMLManager{
    constructor(parent, icon, opts={}){
        super(parent, {})
        this.add(new Icon(this.view, 'circle', {className: `fa-stack-2x ${opts.circleClassName}`}))
        this.add(new Icon(this.view, icon, {className: `fa-stack-1x fa-inverse ${opts.iconClassName}`}))

    }

    createView(){
        const span = document.createElement('span')
        span.className = 'fa-stack'
        span.style.verticalAlign = 'top'
        return span
    }
}