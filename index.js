
 
 document.addEventListener("DOMContentLoaded", () => {

    

     const root = document.querySelector('#root')
     const app = new App(root)
     const canvasApp = new CanvasApp(root)
 })

//TODO: Add to Door class as default class vars
const doorHeight = () => "20%"
const doorWidth = () => 0.15 * document.querySelector('canvas').height