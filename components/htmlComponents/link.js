class Link extends HTMLComponent{

    static newWithParent(parent, args){
        return new this(args, parent)
    }

    constructor(viewArgs, parent=null){
        super(viewArgs)
        if(parent){
            parent.add(this)
            this.parent.onclick = viewArgs.onClick    
        }else{
            this.view.onclick = viewArgs.onClick
        }
        
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