class Modal extends HTMLManager{

    constructor(modalComponent, args = {}){
        super(document.body, args)//document.querySelector('.portfolio-page'), args)
        if(modalComponent instanceof Element){
            modalComponent.style.zIndex = 100
        }else{
            modalComponent.view.style.zIndex = 100
        }
        this.add(modalComponent)
    }

    createView(){
        const overlay = document.createElement('div')
        overlay.id = "overlay"
        const overflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        overlay.style.position = "fixed"
        overlay.style.top = 0
        overlay.style.left = 0
        overlay.style.minWidth = "100%"
        overlay.style.height = "100%"
        overlay.style.width = "100%"
        overlay.style.overflow = "auto"
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
        overlay.style.zIndex = 50
        overlay.onclick = () => {
            document.body.style.overflow = overflow
            overlay.remove()
        }
        return overlay
    }

}