class App extends HTMLManager{

    constructor(ctx, viewArgs){
        super(ctx, viewArgs)
        const navbarGrid = new GridContainer(this.view, "sidenav")
        const leftHeaderGrid = new GridContainer(this.view, 'header-left')
        const footerGrid = new GridContainer(this.view, 'footer')
        const mainGrid = new GridContainer(this.view, 'main')

        navbarGrid.add(new Navbar(navbarGrid.view))
        leftHeaderGrid.add(new LeftHeader(leftHeaderGrid.view))
        footerGrid.add(new Footer(footerGrid.view))
        mainGrid.add(new Main(mainGrid.view))

        this.add(navbarGrid)
        this.add(leftHeaderGrid)
        this.add(footerGrid)
        this.add(mainGrid)
    }

    createView(){
        const gridContainer = document.createElement('div')
        gridContainer.className = "portfolio-page"
        return gridContainer
    }



    
}