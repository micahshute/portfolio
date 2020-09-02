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


    declareBindingsAndEventListeners(){
        const anchors = document.querySelectorAll('a.anchor')
        const navButtons = document.querySelectorAll('.sidenav-link-div')
        const main = document.querySelector('.main-component')
        this.lastSet = null
        const onScroll = () => {
            main.scrollLeft = 0
            if(window.innerWidth <= 990){
                return
            }
            const scrollHeight = main.scrollTop
            let insertionIndex
            if(scrollHeight === 0){
                insertionIndex = -2
            }else if(scrollHeight === (main.scrollHeight - main.offsetHeight)){
                insertionIndex = -1 * (1 + anchors.length)
            }else{
                insertionIndex = binarySearch(anchors, testA => {
                    //TODO: Replace 200 with height of screen / 2
                    return testA.offsetTop - scrollHeight - window.innerHeight * 0.3
                })
            }

            if(this.lastSet || this.lastSet === 0){
                navButtons[this.lastSet].classList.remove('scroll-location')
                this.lastSet = null
            }
            if(insertionIndex >= 0){
                this.lastSet = insertionIndex
                navButtons[this.lastSet].classList.add('scroll-location')

            }else{
                if(insertionIndex >= -1){
                    return
                }
                this.lastSet = insertionIndex * -1 - 2
                navButtons[this.lastSet].classList.add('scroll-location')
            }

            
        }
        this.eventListeners['mainScroll'] = {
            target: main,
            function: onScroll,
            type: 'scroll'
        }
    }
    
    

    
}