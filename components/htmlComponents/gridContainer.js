class GridContainer extends HTMLManager{

    constructor(gridContainer, gridArea){
        super(gridContainer, { gridArea, style: {gridArea}})
    }

    createView(){
        const div = document.createElement('div')
        div.className = "{{gridArea}}"
        return div
    }


}