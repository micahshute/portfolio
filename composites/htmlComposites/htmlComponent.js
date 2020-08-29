class HTMLComponent extends Component{

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

    async render(){
        if(this.view){
            this.context.appendChild(this.view)
        }
        this.declareBindingsAndEventListeners()
        this.establishEventListeners()
        await this.fetchAndRenderData()
        this.finalBindingsAndEventListeners()
        this.establishEventListeners()
    }
}