
function doesOverlap(x1min, x1max, y1min, y1max, x2min, x2max, y2min, y2max){
    return dimensionOverlap(x1min, x1max, x2min, x2max) && dimensionOverlap(y1min, y1max, y2min, y2max)
}
 
function dimensionOverlap(d1min, d1max, d2min, d2max){
    maxOfMin = d1min > d2min ? d1min : d2min
    minOfMax = d1max < d2max ? d1max : d2max
    return minOfMax - maxOfMin >= 0
}