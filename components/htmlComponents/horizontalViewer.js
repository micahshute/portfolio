class HorizontalViewer extends HTMLManager{

    constructor(parent, args = {}){
        super(parent, args)
        const rbutton = document.createElement('button')
        const lbutton = document.createElement('button')
        const ri = document.createElement('i')
        const li = document.createElement('i')
        this._currentPosition = 0
        ri.className = 'fas fa-angle-right viewerIcon'
        li.className = 'fas fa-angle-left viewerIcon'
        rbutton.appendChild(ri)
        lbutton.appendChild(li)

        this.scrollRightButton = new ElementWrapper(this.view, rbutton)
        this.scrollLeftButton = new ElementWrapper(this.view, lbutton)

        this.scrollLeftButton.view.className = 'horizontal-view-scroller'
        this.scrollRightButton.view.className = 'horizontal-view-scroller'

        this.scrollRightButton.view.onclick = this.translateRight.bind(this)

        this.scrollLeftButton.view.onclick = this.translateLeft.bind(this)

        super.add(this.scrollLeftButton)
        super.add(this.scrollRightButton)

        this.hideLeftButton()

        window.onresize = () => {
            // debugger
            if(this.shouldShowRightButton){
                this.showRightButton
            }
        }

    }

    finalBindingsAndEventListeners(){
        if(!this.shouldShowRightButton()){
            this.hideRightButton()
        }
        this.setRightButtonTranslation()
    }

    setRightButtonTranslation(){
        return null
        // this.scrollRightButton.view.style.transform= `translateX(${this.viewSize() - 50}px)`
    }


    translateRight(){
        this.currentPosition -= this.scrollDistance()
        this.translateTo(this.currentPosition)
        this.showLeftButton()
        window.setTimeout( () => {
            if(this.lastElementXLocation < 0){
                this.translateLeft()
                this.hideRightButton()
            }
        }, 1000)
        
    }

    translateTo(location){
        for(let i = 2; i < this.children.length ; i++){
            this.children[i].view.style.transform= `translateX(${location}px)`
        }
    }

    translateLeft(){
        this.currentPosition += this.scrollDistance()
        this.translateTo(this.currentPosition)
        this.showRightButton()
    }

    get currentPosition(){
        return this._currentPosition
    }

    set currentPosition(np){
        this._currentPosition = np
        if(np >= 0){
            this.hideLeftButton()
            this._current_position = 0
            this.translateTo(0)
        }else{
            this.showLeftButton()
        }
        console.log(np)
    }

    get firstElementXLocation(){
        return this.children[1].view.getBoundingClientRect().x
    }

    get lastElementXLocation(){
        return this.children[this.children.length - 1].view.getBoundingClientRect().x
    }

    add(el){
        super.add(el)
        const spaceDiv = document.createElement('div')
        spaceDiv.className = 'flex-space-md'
        const space = new ElementWrapper(this.view, spaceDiv)
        space.parent = this
        this.children.push(space)
    }

    createView(){
        const container = document.createElement('div')
        container.className = 'horizontal-viewer'
        container.style.maxWidth = window.innerWidth + "px"
        return container
    }

    viewSize(){
        return this.view.offsetWidth;
    }

    scrollDistance(size=240){
        return this.cardsShown() * size
    }

    cardsShown(size=240){
        return Math.floor((this.viewSize() - 55) / size)
    }

    shouldShowLeftButton(){
        return this.currentPosition < 0;
    }

    shouldShowRightButton(){
        console.log(this.cardsShown())
        if(this.cardsShown() >= this.children.length / 2 - 1){
            return false
        }
        return this.lastElementXLocation >= this.viewSize()
    }

    hideLeftButton(){
        this.scrollLeftButton.view.style.display = "none"
    }

    hideRightButton(){
        if(!this.shouldShowLeftButton()){
            this.view.style.marginLeft = "40px"
        }
        this.scrollRightButton.view.style.display = "none"
    }

    showLeftButton(){
        this.view.style.marginLeft = "0px"
        this.scrollLeftButton.view.style.display = "inline-block"
    }

    showRightButton(){
        this.view.style.marginLeft = "0px"
        this.setRightButtonTranslation()
        this.scrollRightButton.view.style.display = "inline-block"
    }


    
}