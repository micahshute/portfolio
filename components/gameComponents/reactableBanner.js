class ReactableBanner extends CanvasTextManager{

    constructor({message, options, onSelect, location={x: '25%', y: '5%'}}){
        Transporter.sprite.makeUncontrollable()
        const text = message +  `\n ${options.map(option => `\u{203A} ${option}`).join('\n ')}`
        super(
            text, 
            document.querySelector('canvas'),
            location,
            {
                shouldScroll: true,
                scrollRate: 30,
                font: 'Raj',
                fontSize: '15px',
                fontColor: 'black',
                endingX: '25%',
                textAlign: 'start',
                fontWeight: 300,
                withBackground: true,
                backgroundColor: 'white',
                scrollCompleteHook: () => {
                    this.selectedOption = 0
                    this.listener = this.keyListener.bind(this)
                    document.addEventListener("keydown", this.listener)
                }

            }
        )
        this.options = options
        this.onSelect = onSelect
    }

    set selectedOption(newOption){
        this._selectedOption = newOption
        // Remove any borders
        const childrenToRemove = []
        for(let i = 0; i < this.children.length; i++){
            if(i > 0 && this.children[i].constructor.name === "Rectangle"){
                childrenToRemove.push(this.children[i])
            }
        }
        for(let child of childrenToRemove){ this.remove(child) }
        // Add border where it needs to be
        const [startIndex, endIndex] = this.getOptionChildIndexRange(newOption)
        const borderLocationStart = this.children[startIndex].textComponent.maxMins
        const borderLocationEnd = this.children[endIndex].textComponent.maxMins
        let rectX = Math.min(borderLocationStart.xMin, borderLocationEnd.xMin)
        let rectY = Math.min(borderLocationStart.yMin, borderLocationEnd.yMin)
        const rectWidth = (Math.max(borderLocationStart.xMax, borderLocationEnd.xMax) - Math.min(borderLocationStart.xMin, borderLocationEnd.xMin)) + 10
        const rectHeight = (Math.max(borderLocationStart.yMax, borderLocationEnd.yMax) - Math.min(borderLocationStart.yMin, borderLocationEnd.yMin)) + 10 
        rectY -= 10 
        rectX -= 5

        this.add(new Rectangle(
            document.querySelector('canvas'),
            { x: rectX, y: rectY},
            rectHeight,
            rectWidth,
            'red',
            false,
            100
        ))
        // debugger
    }

    get selectedOption(){
        return this._selectedOption
    }

    keyListener(e){
        e.preventDefault()
        switch(e.key){
            case "w":
            case "ArrowUp":
                this.selectedOption = (this.selectedOption - 1 + this.options.length) % this.options.length
                break
            case "s":
            case "ArrowDown":
                this.selectedOption = (this.selectedOption + 1 + this.options.length) % this.options.length
                break
            case "Enter":
                this.onSelect(this.selectedOption)
                document.removeEventListener("keydown", this.listener)
                Transporter.sprite.makeControllable()
                this.parent.remove(this)
                break
        }
    } 

    getOptionChildIndexRange(optionIndex){
        let cheveronsFound = 0
        let startIndex
        let endIndex
        let lastScrollingTextIndex = 0
        for(let i = 0; i < this.children.length; i++){
            if(this.children[i].constructor.name === "ScrollingTextDecorator"){
                const textComponent = this.children[i].textComponent
                if(textComponent.txt.includes("\u{203A}")){
                    cheveronsFound += 1
                }
                if(!startIndex && cheveronsFound === optionIndex + 1){
                    startIndex = i
                }else if(!endIndex && cheveronsFound > optionIndex + 1){
                    endIndex = i - 2
                    break
                }
                lastScrollingTextIndex = i
            }
        }
        if(!endIndex){
            endIndex = lastScrollingTextIndex
        }
        return [startIndex, endIndex]
    }
}