class HorizontalViewer extends HTMLManager{

    constructor(args = {}){
        super(args)

        this.elSize = args.elementSize || 240
        this.minGapSize = args.gapSize || 40
        this.elementSize = this.elSize + this.minGapSize /2
        const rbutton = document.createElement('button')
        const lbutton = document.createElement('button')
        const ri = document.createElement('i')
        const li = document.createElement('i')
        this._currentPosition = 0
        ri.className = 'fas fa-angle-right viewerIcon'
        li.className = 'fas fa-angle-left viewerIcon'
        rbutton.appendChild(ri)
        lbutton.appendChild(li)

        this.scrollRightButton = new ElementWrapper(rbutton)
        this.scrollLeftButton = new ElementWrapper(lbutton)

        this.scrollLeftButton.view.className = 'horizontal-view-scroller'
        this.scrollRightButton.view.className = 'horizontal-view-scroller'

        this.scrollRightButton.view.onclick = this.translateRight.bind(this)

        this.scrollLeftButton.view.onclick = this.translateLeft.bind(this)

        super.add(this.scrollLeftButton)
        super.add(this.scrollRightButton)

        this.hideLeftButton()

    }


    translateRight(){
        this.currentPosition -= this.scrollDistance()
        this.translateTo(this.currentPosition)
        this.showLeftButton()
        window.setTimeout( () => {
            if(this.lastElementXLocation < this.elementSize){
                this.translateLeft()
                this.hideRightButton()
            }
        }, 700)
        
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
        // console.log(np)
        this._currentPosition = np
        if(np >= -(this.elementSize) + 41){
            this.hideLeftButton()
            this._currentPosition = 0
            this.translateTo(0)
        }else{
            this.showLeftButton()
        }
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
        const space = new ElementWrapper(spaceDiv)
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
        let offset = 0
        if(this.currentPosition === 0){
            offset += 0
        }
        return Math.max(this.cardsShown() * size - offset, this.elementSize - offset)
    }

    cardsShown(size=null){
        const elSize = size || this.elementSize
        let offset = 0
        if(this.rightButtonRendered()){
            offset += 40
        }
        if(this.leftButtonRendered()){
            offset += 40
        }
        return Math.floor((this.viewSize() - offset) / this.elementSize)
    }

    rightButtonRendered(){
        return this.scrollRightButton.view.display !== "none"
    }

    leftButtonRendered(){
        return this.scrollLeftButton.view.display !== "none"
    }

    shouldShowLeftButton(){
        return this.currentPosition < 0;
    }

    shouldShowRightButton(){
        // console.log(this.cardsShown())
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
        this.scrollRightButton.view.style.display = "inline-block"
    }

    handleResize(){
        this.reload()
        this.timeSinceResize = 0
        this._shouldResize = false
    }

    declareBindingsAndEventListeners(){
        if(!this.shouldShowRightButton()){
            this.hideRightButton()
        }
        const onResize = () => {
            // this.resizing = true
            this.view.style.maxWidth = "100%"
            this.currentPosition = 1
            if(this.shouldShowRightButton()){
                this.showRightButton()
            }else{
                this.hideRightButton()
            }
            // console.log(this.viewSize())
            // this.reload()
        }

        // window.onresize = onResize
        this.eventListeners[window] = {type: 'resize', function: onResize, target: window}
    }


    
}