class Link extends HTMLComponent{

    createView(){
        return `
            <a class='link' id='{{id}}'>{{text}}</a>
        `
    }
}