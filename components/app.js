class App extends HTMLManager{

    constructor(ctx, viewArgs){
        super(ctx, viewArgs)
    }

    createView(){
        return `
        <div class="header-lg" id='navbar'>
        
        </div>
        
        `
    }

    declareBindingsAndEventListeners(){
        this.helloView = document.querySelector('#navbar')
        this.add_and_render(new Navbar(this.helloView))
    }


    
}