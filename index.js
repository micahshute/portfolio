const INTERVALS = []
const TIMEOUTS = []
 
 document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('#root')
    // const canvasApp = new CanvasApp(root)
    renderHTMLSite()
 })


 function renderHTMLSite(){
    const root = document.querySelector("#root")
    root.innerHTML = ''
    const app = new App(root)
    app.render()
 }

 function renderCanvasSite(){
    for(let i of INTERVALS){
       window.clearInterval(i)
    }
    for(let t of TIMEOUTS){
       window.clearTimeout(t)
    }
    const root = document.querySelector("#root")
    root.innerHTML = ''
    new CanvasApp(root)
 }

//TODO: Add to Door class as default class vars
const doorHeight = () => "20%"
const doorWidth = () => 0.15 * document.querySelector('canvas').height