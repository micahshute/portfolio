class Card extends HTMLManager{


    constructor(parent, args){
        super(parent, args)
        if(args.title){
            this.addTitle(args.title, args.titleOpts || {})
        }
        if(args.subtitle){
            this.addSubtitle(args.subtitle, args.subtitleOpts || {})
        }

    }

    createView(){
        const cardContainer = document.createElement('div')
        cardContainer.className = "card {{className}}"
        return cardContainer;
    }

    addTitle(titleText, opts){
        const h1 = document.createElement('h1')
        h1.className = 'card-title {{className}}'
        h1.id = '{{id}}'
        h1.textContent = titleText
        DisplayManager.processElement(h1, opts)
        this.add(h1)
    }

    addSubtitle(titleText, opts){
        const h2 = document.createElement('h2')
        h2.className = 'card-subtitle {{className}}'
        h2.id = '{{id}}'
        h2.textContent = titleText
        DisplayManager.processElement(h2, opts)
        if(opts.withImage){
            const subtitleContainer = document.createElement('div')
            const img = document.createElement('img')
            img.src = opts.withImage.url
            if(opts.withImage.height){
                img.height = opts.withImage.height
            }
            if(opts.withImage.width){
                img.width = opts.withImage.width
            }
            if(opts.withImage.style){
                DisplayManager.parseStyle(img, opts.withImage)
            }
            img.style.verticalAlign = "text-bottom"
            subtitleContainer.appendChild(h2)
            subtitleContainer.appendChild(img)
            this.add(subtitleContainer)
        }else{
            this.add(h2)
        }
        
    }

    addContent(contentElement){
        this.add(contentElement)
    }

    


}