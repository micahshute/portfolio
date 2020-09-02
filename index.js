let APP 

let Transporter = isSafari() ? SafariTransporter : SpriteTransporter
 
 document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('#root')
    // const canvasApp = new CanvasApp(root)
    renderHTMLSite()
 })


 function renderHTMLSite(){
    const root = document.querySelector("#root")
    root.innerHTML = ''
    APP = App.createInside(root)
    APP.render()
 }

 function renderCanvasSite(){
   //  for(let i of INTERVALS){
   //     window.clearInterval(i)
   //  }
   //  for(let t of TIMEOUTS){
   //     window.clearTimeout(t)
   //  }
   //  const root = document.querySelector("#root")
   //  root.innerHTML = ''
   APP.derender()
    new CanvasApp(root)
 }

//TODO: Add to Door class as default class vars
const doorHeight = () => "20%"
const doorWidth = () => 0.15 * document.querySelector('canvas').height


function binarySearch(arr, comparator){
   let max = arr.length - 1
   let min = 0
   let insertHigher
   let mid
   while(max >= min){
      mid = Math.floor((max + min) / 2)
      const comparison = comparator(arr[mid])
      if(comparison === 0){
         return mid
      }else if(comparison > 0){
         max = mid - 1
         insertHigher = false
      }else{
         min = mid + 1
         insertHigher = true
      }
   }
   mid++
   if(insertHigher){
      mid++
   }
   return -1 * mid
}


function isSafari(){
   let ua = navigator.userAgent.toLowerCase(); 
   if (ua.indexOf('safari') != -1) { 
      if (ua.indexOf('chrome') > -1) {
         return false
      } else {
         return true
      }
   }else{
      return false
   }
}