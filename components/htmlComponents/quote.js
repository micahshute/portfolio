class Quote extends HTMLManager{

    constructor(quote, author, args={}){
        super(args)
        this.quote = quote
        const quoteDiv = document.createElement('div')
        quoteDiv.className = "{{className}}"
        quoteDiv.style.gridArea = "quote"
        quoteDiv.style.display = "flex"
        quoteDiv.style.justifyContent = "center"
        quoteDiv.style.alignItems = "center"
        quoteDiv.style.fontSize = "1.6vmax"
        DisplayManager.processElement(quoteDiv, args.quoteContainer)
        const pquote = document.createElement('p')
        pquote.className = "{{className}}"
        DisplayManager.processElement(pquote, args.quote)
        pquote.style.margin = 0
        pquote.textContent = quote
        quoteDiv.appendChild(pquote)
        this.add(quoteDiv)

        const authorDiv = document.createElement('div')
        authorDiv.className = "{{className}}"
        authorDiv.style.gridArea = "author"
        DisplayManager.processElement(authorDiv, args.authorContainer)
        const pauthor = document.createElement('p')
        pauthor.className = "{{className}}"
        pauthor.style.margin = 0
        pauthor.style.fontSize = "1vmax"
        pauthor.textContent = `- ${author}`
        DisplayManager.processElement(pauthor, args.author)
        authorDiv.appendChild(pauthor)
        this.add(authorDiv)
    }

    createView(){
        const div = document.createElement('div')
        div.className = "quote-container {{className}}"
        div.style.display = "grid"
        div.style.gridTemplateRows = "10% 60% 20% 10%"
        div.style.gridTemplateColumns = "20% 40% 20% 20%"
        div.style.gridTemplateAreas = `"emptyTop emptyTop emptyTop emptyTop" 
                                       "emptyTopLeft quote quote emptyTopRight" 
                                       "emptyBottomLeft emptyNoAuthor author emptyBottomRight" 
                                       "emptyBottom emptyBottom emptyBottom emptyBottom"`
        div.style.width = "100%"
        div.style.height = "100%"
        div.style.fontFamily = 'Bad'
        div.style.color = "white"
        div.style.backgroundColor = "rgba(0,0,0,0.27)"
        return div
    }

    // declareBindingsAndEventListeners(){
    //     const interval = window.setInterval(() => console.log(this.quote), 1000)
    //     this.intervals.push(interval)
    // }
}