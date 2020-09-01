class GridContainer extends HTMLManager{

    constructor(gridArea){
        //TODO: WTF IS BELOW 
        super({ gridArea, style: {gridArea}})
    }

    createView(){
        const div = document.createElement('div')
        div.className = "{{gridArea}}"
        return div
    }


}