class TopHeader extends HTMLManager{

    constructor(quotes){
        super({})
        this.quotes = quotes
        const quote = this.randomQuote
        const quoteObj = new Quote(quote.quote, quote.author, {quote: {className: "floating"}, author: {className: "floating"}})
        this.currentQuote = quoteObj
        this.add(quoteObj)
    }



    get randomQuote(){
        const randVal = Math.floor(Math.random() * this.quotes.length)
        return this.quotes[randVal]
    }

    async changeQuote(){
        const newQuote = this.randomQuote
        await this.removeQuote()
        this.addQuote(newQuote)
    }

    addQuote(newQuote){
        const quote = new Quote(newQuote.quote, newQuote.author, {quote: {className: "floating"}, author: {className: "floating"}})
        this.currentQuote = quote
        this.add_and_render(quote)
    }

    async removeQuote(){
        const quote = this.currentQuote
        this.remove(quote)
        await quote.derender()
    }

    createView(){
        const header = document.createElement('div')
        header.className = 'top-header'
        return header
    }

    declareBindingsAndEventListeners(){
        const interval = window.setInterval(() => {
            this.changeQuote()
        }, 100000)
        this.intervals.push(interval)
    }


}