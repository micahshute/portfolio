class Fade extends HTMLManager{

    constructor(child, beginningOpacity=1,fadeTime=3, args={}){
        super(args)
        this.view.style.opacity = beginningOpacity
        this.fadeTime = fadeTime
        this.add(child)
    }

    createView(){
        const container = document.createElement('div')
        container.className = 'fader {{className}}'
        container.style.width = "100%"
        container.style.height = "100%"
        return container
    }

    beginFadeout(callback = (el) => null){
        this.beginFade(-1, callback)
    }

    beginFadein(callback = el => null){
        this.beginFade(1, callback)
    }

    beginFade(direction, completeCallback){
        if(direction === 0){
            throw "Don't make an infinite interval!"
        }
        const fadeoutInterval = window.setInterval(() => {
            const viewOpacity = Number.parseFloat(this.view.style.opacity)
            const opacity = Number.isNaN(viewOpacity) ? 0 : viewOpacity
            if((direction < 0 && opacity <= 0) || (direction > 0 && opacity >= 1)){
                window.clearInterval(fadeoutInterval)
                this.intervals = this.intervals.filter(i => i !== fadeoutInterval)
                completeCallback(this)
                return
            }
            this.view.style.opacity = opacity + direction * 0.01

        }, this.fadeTime * 10) // fadeTime in seconds * 1000 / 100 (1 percent of opacity per interval)

        this.intervals.push(fadeoutInterval)
    }


}