class Link extends HTMLComponent{

    constructor(parent, viewArgs){
        super(parent, viewArgs)
        this.context.onclick = viewArgs.onClick
    }

    createView(){
        const a = document.createElement('a')
        a.className = 'link'
        a.id = "{{id}}"
        a.textContent = "{{text}}" 
        a.href = "{{url}}"
        return a
    }
}