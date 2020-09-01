class App extends HTMLManager{

    constructor(viewArgs){
        super(viewArgs)
        const navbarGrid = new GridContainer("sidenav")
        const leftHeaderGrid = new GridContainer('header-left')
        const footerGrid = new GridContainer('footer')
        const mainGrid = new GridContainer('main')

        navbarGrid.add(new Navbar())
        leftHeaderGrid.add(new LeftHeader())
        footerGrid.add(new Footer())
        mainGrid.add(new Main())

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