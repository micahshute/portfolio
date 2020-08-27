class GridContainer extends HTMLManager{

    constructor(ctx, viewArgs){

    }

    createView(){
        return `<div style="grid-area: {{gridArea}}></div>`
    }

}