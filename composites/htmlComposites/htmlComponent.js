class HTMLComponent extends Component{

    constructor(ctx, viewArgs=null){
        super()
        this.view = DisplayManager.parse(this.createView(), viewArgs)
        this.context = ctx
        this.activeEventListeners = {}
        this.eventListeners = {}
    }

    createView(){
        return "<p>Hello World, I am {{firstName}} {{lastName}}</>"
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
        this.context.innerHTML = this.view
        this.declareBindingsAndEventListeners()
        this.establishEventListeners()
        await this.fetchAndRenderData()
        this.finalBindingsAndEventListeners()
        this.establishEventListeners()
    }
}