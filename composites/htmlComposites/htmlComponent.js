class HTMLComponent extends Component{


    static getView(args){
        const el = new this(document.createElement('div'), args)
        el.render()
        return el.view
    }

    constructor(ctx, viewArgs=null){
        super()
        this.view = this.createView()
        
        if(viewArgs && Object.keys(viewArgs).length > 0 && this.view){
            DisplayManager.processElement(this.view, viewArgs)
            // if(this.view.href){
            //     this.view.href = DisplayManager.parse(unescape(this.view.href), viewArgs)
            // }
        }
        this.context = ctx
        this.activeEventListeners = {}
        this.eventListeners = {}
    }

    createView(){
        // return "<p>Hello World, I am {{firstName}} {{lastName}}</>"
        const p = document.createElement('p')
        p.textContent = "Hello World, I am {{firstName}} {{lastName}}"
        return p
    }

    async derender(){
        await this.beforeDerender()
        for(let element in this.activeEventListeners){
            element.removeEventListener(this.activeEventListeners[element].type, this.activeEventListeners[element].boundFunction)
        }
        this.context.innerHTML = ''
    }

    async beforeDerender(){

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

    removeFromDom(){
        this.view.remove()
    }

    async render(){
        if(this.view){
            // try{
            this.context.appendChild(this.view)
            // }catch(e){debugger}
        }
        this.declareBindingsAndEventListeners()
        this.establishEventListeners()
        await this.fetchAndRenderData()
        this.finalBindingsAndEventListeners()
        this.establishEventListeners()
    }
}