class HTMLComponent extends Component{


    static getView(args){
        const el = this.createInside(document.createElement('div'), args)
        el.render()
        return el.view
    }

    static createInside(parent, args={}){
        return this.newWithParent(parent, args)
    }

    static newWithParent(parent, args={}){
        const el = new this(args)
        if(parent instanceof Element){
            const p = new ElementWrapper(parent)
            p.add(el)
            return el
        }else{
            parent.add(el)
            return el;
        }
    }

    constructor(viewArgs=null){
        super()
        this.view = this.createView()
        
        if(viewArgs && Object.keys(viewArgs).length > 0 && this.view){
            DisplayManager.processElement(this.view, viewArgs)
        }

        this.activeEventListeners = {}
        this.eventListeners = {}
    }

    createView(){
        const p = document.createElement('p')
        p.textContent = "Hello World, I am {{firstName}} {{lastName}}"
        return p
    }

    async derender(){
        await this.beforeDerender()
        for(let element in this.activeEventListeners){
            element.removeEventListener(this.activeEventListeners[element].type, this.activeEventListeners[element].boundFunction)
        }
        this.view.remove()
    }

    async beforeDerender(){

    }

    set onclick(fn){
        this.view.onclick = fn
    }

    declareBindingsAndEventListeners(){

    }

    establishEventListeners(){
        for(let element in this.eventListeners){
            const boundFunction = this.eventListeners[element].function.bind(this)
            element.addEventListener(this.eventListeners[element].type, this.eventListeners[element].function)
            this.activeEventListeners[element] = {type: this.eventListeners[element].type, boundFunction}
        }
        this.eventListeners = {}
    }

    async fetchAndRenderData(){

    }

    finalBindingsAndEventListeners(){

    }

    async render(){
        if(this.view){
            try{
                this.parent.view.appendChild(this.view)
            }catch(e){
                try{
                    this.parent.appendChild(this.view)
                }catch(e2){
                    console.log(`You tried to render ${this} without a valid parent: ${this.parent}`)
                }
            }
        }
        this.declareBindingsAndEventListeners()
        this.establishEventListeners()
        await this.fetchAndRenderData()
        this.finalBindingsAndEventListeners()
        this.establishEventListeners()
    }
}