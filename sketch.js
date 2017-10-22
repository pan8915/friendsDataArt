
var nums =[];
var playingOrder = [5,3,6,4,0,4,5,6,0,6,0,6,3,6,3,4,6,5,6,0,1,3,5,1,6,5,3,5,1,4,1,4,1,5,1,3,1,6,1,5,1,3,0,3,1,0,6,5,2,0,5,2,1,0,5,2,5,2,5,6,1,2,0,4,6,3,0,0,2,1,2,5,2,0,5,4,2,4,5,3,5,3,0,6,0,5,3,1,5,3,1,5,6,5,2,5,1,5,1,4,0,5,0,6,5,1,5,4,0,3,0,3,5,1,2,1,6,2,1,3,4,0,0,4,0,1,0,3,6,3,6,3,6,0,3,6,1,3,6,3,1,6,3,6,0,5,0,5,0,5,0,5,0,5,2,0,1,3,6,1,6,1,3,1,6,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,0,2,0,1,3,6,3,1,0,0,0,2,6,3,2,6,3,5,0,0,3,2,6,0,0,5,0,5,0,3,5,0,6,2,5,3,2,3,5,3,6,3,6,3,5,2,5,2,5,2,5,2,5,2,5,2,0,0,0,5,0,5,0,5,0,5,0,0,3,5,1,5,4,5,4,5,3,0,2,1,2,6,2,6,2,5,2,5,2,0,2,5,2,4,2,4,0,1,5,2,5,2,1,1,0,2,5,0,6,0,5,0,5,1,5,1,2,5,0,0,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,0,5,1,0,0,3,4,5,4,5,4,0,5,3,1,2,6,2,0,6,0,2,6,0,0,0,0,0,5,3,4,2,5,6,1,6,2,3,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,6,4,5,3,5,6,0,4,5,6,4,3,5,6,5,6,0,0,2,4,2,4,2,5,0,3,4,6,2,6,2,5,2,5,2,6,5,6,0,1,5,1,4,5,1,6,2,1,4,5,6,1,2,1,0,3,0,0,5,0,1,0,0,1,5,0,5,0,5,1,0,5,0,0,0,0,5,0,5,0,0,0,0,0,5,1,0,0,0,0,3,1,5,1,4,2,4,6,4,2,5,6,2,0,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,2,0,2,0,0,0,2,0,0,0,0,2,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,2,0,2,0,2,0,0,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,3,6,4,1,4,1,5,1,5,1,5,1,5,2,0,0,0,0,4,0,1,4,0,2,5,2,3,6,4,2,3,6,1,5,1,0,0,6,3,6,3,6,3,6,0,6,3,6,0,6,3,6,3,6,0,6,3,6,0,6,3,6,0,5,0,3,1,2,0,2,0,3,4,5,4,1,4,6,4,3,4,2,4,5,0,4,2,5,0,0,1,6,4,6,1,6,0,6,4,5,2,5,3,5,0,5,6,5,2,5,0,5,0,5,0,0,3,1,5,0,5,0,3,0,0,1,4,2,0,5,0,3,0,5,0,5,0,0,0,0,0,5,0,5,1,0,5,0,2,0,3,4,1,4,0,1,2,5,6,1,0,1,0,0,0,5,1,0,5,3,1,2,6,5,1,5,2,1,6,0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,0,0,4,0,0,4,0,1,0,0,4,6,4,0,0,0,2,6,5,6,0,3,2,3,0,1,3,0,1,2,4,2,0,0,5,0,5,0,5,0,5,0,5,0,3,1,6,2,6,2,1,2,0,0,6,1,5,6,2,5,1,6,1,4,1,4,0,4,3,5,3,2,3,5,0,5,4,5,4,5,0,1,5,2,3,4,5,3,5,1,5,6,2,5,0,5,1,5,0,0,5,0,5,0,0,0,2,1,5,0,1,5,4,5,1,6,0,6,4,6,0,0,0,0,0,5,4,1,6,2,0,5,3,5,3,1,3,0,0,5,1,5,4,1,5,4,1,4,5,4,0,3,6,3,6,3,1,3,1,6,1,5,1,3,6,1,3,6,1,6,3,1,6,0,2,4,5,4,2,6,3,1,5,1,0,0,0,0,2,5,2,0,0,2,0,2,0,0,4,0,6,3,6,1,0,3,1,6,1,3,1,6,1,3,0,2,0,0,2,0,2,0,2,0,2,0,0,5,2,5,2,5,4,5,2,5,2,5,2,5,2,0,1,6,1,3,0,5,2,4,2,4,5,4,2,4,2,4,2,5,4,2,5,4,2,0,1,6,1,6,0,0,6,0,0,0,6,0,6,0,1,0,3,0,1,0,2,5,0,2,5,4,5,4,0,2,0,5,0,5,0,5,4,0,5,0,5,2,4,5,4,2,5,2,4,5,4,5,4,0,6,0,5,2,5,2,0,2,5,4,5,0,1,6,3,1,6,1,6,1,3,1,3,6,3,0,5,4,5,4,5,4,2,4,5,2,5,2,5,2,4,5,4,2,5,0,0,3,6,3,6,0,1,0,6,1,3,1,0,6,1,0,1,0,0,1,1,0,0,1,5,0,6,1,0,6,2,6,2,1,2,6,2,0,0,0,0,0,5,1,2,6,3,4,0,1,0,0,6,3,6,1,6,5,6,3,4,6,4,1,5,4,2,1,4,2,1,2,6,5,2,4,0,0,3,0,5,4,3,0,3,0,3,0,1,2,1,2,1,2,1,2,0,0,3,0,3,0,3,0,3,0,3,0,3,5,3,5,3,5,3,5,3,0,1,6,1,6,1,6,1,6,1,6,1,6,0,5,3,5,3,5,3,5,0,0,5,0,6,4,6,4,0,6,4,6,0,6,0,0,6,0,6,0,6,0,6,0,6,0,0,6,4,6,4,0,0,2,0,2,0,2,0,0,1,2,1,2,1,2,1,0,1,0,1,2,1,0,2,1,0,1,2,1,2,1,2,1,0,5,0,0,5,3,5,3,0,0,3,0,3,0,3,0,3,0,5,0,5,0,5,0,0,4,0,6,0,0,2,1,2,1,2,1,2,1,2,1,2,0,0,5,0,5,3,5,3,5,3,5,3,5,3,5,3,5,3,5,3,0,5,0,3,0,6,0,6,0,0,6,4,6,4,6,4,0,6,4,0,6,4,6,4,0,1,2,0,2,0,0,2,0,2,0,0,2,0,2,1,2,0,1,2,1,0,0,2,1,2,1,4,0,5,4,3,5,1,5,2,4,0,6,4,0,0,0,0,2,6,4,0,1,0,3,0,0,0,0,0,0,2,5,6,1,6,1,6,1,6,5,6,2,6,1,6,4,5,6,0,6,1,6,0,6,0,6,0,0,0,3,0,0,3,0,6,2,3,4,0,6,0,4,6,5,6,0,0,6,6,0,6,0,3,6,0,0,6,0,6,0,6,0,6,0,0,6,0,6,5,6,5,6,4,1,5,3,5,3,1,0,1,5,0,1,0,0,2,6,2,1,2,0,5,0,5,2,5,4,6,5,4,5,1,5,1,5,1,5,2,5,6,5,1,0,4,0,3,0,5,3,4,3,1,3,2,3,5,3,6,3,1,0,0,5,0,3,5,3,5,3,0,6,5,6,5,0,2,6,5,6,2,6,5,0,0,0,3,0,3,0,3,0,0,0,3,0,3,0,3,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,0,6,0,0,1,0,0,5,3,1,6,1,3,0,3,2,3,6,3,5,1,3,4,3,0,5,0,2,5,2,5,1,0,0,5,0,0,0,0,2,0,4,0,6,0,0,0,2,5,2,5,4,0,4,0,6,0,6,0,6,0,6,0,0,3,1,3,4,0,2,0,6,0,6,0,6,0,6,0,5,6,5,6,5,6,5,6,3,6,3,6,0,2,5,0,1,3,5,1,4,2,1,0,1,4,2,5,0,2,1,3,0,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,0,3,1,3,1,3,1,3,1,3,1,3,1,2,1,2,1,2,0,0,6,0,6,0,4,1,3,1,3,1,3,1,3,0,3,5,3,5,3,5,3,5,3,5,3,5,3,4,5,4,5,4,3,4,5,4,0,2,1,2,1,2,1,2,1,0,0,0,0,5,0,3,4,1,2,1,0,6,0,4,2,0,4,0,4,0,2,0,4,0,0,2,0,0,2,0,1,2,5,2,5,2,5,0,2,0,2,1,2,1,2,1,0,4,2,4,2,0,4,0,6,0,6,6,0,0,0,0,6,0,0,0,1,0,1,2,1,2,5,0,4,2,4,2,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,6,0,0,0,0,0,4,1,4,1,3,0,1,0,1,3,0,0,0,6,0,0,6,0,0,0,0,0,6,0,6,0,6,0,6,0,0,0,6,2,6,2,6,5,4,3,1,6,1,0,6,4,6,0,6,5,0,6,0,5,2,1,2,5,0,1,0,5,0,5,0,5,0,0,5,1,5,0,0,5,1,0,0,0,0,1,5,1,5,1,0,5,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,6,2,4,0,2,1,3,4,3,1,4,1,5,4,2,4,2,3,4,0,1,0,0,0,1,0,1,0,0,5,0,5,0,5,0,5,0,5,0,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,5,1,4,2,4,2,5,2,1,3,6,0,0,5,0,0,3,6,3,6,3,6,0,2,1,4,1,0,1,0,4,1,4,1,4,0,0,6,0,6,0,4,1,5,1,4,1,6,1,0,1,2,1,2,1,0,0,3,0,3,0,0,2,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,0,0,0,2,1,2,1,6,1,5,2,5,1,3,1,0,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,6,0,0,0,0,2,0,2,0,2,0,0,2,0,2,0,5,1,5,1,5,1,5,1,0,3,6,4,6,3,6,4,3,5,4,6,3,6,3,0,1,5,1,5,3,5,6,5,4,5,4,5,2,6,2,1,4,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,4,6,0,5,2,5,2,5,2,5,0,2,5,3,5,2,5,2,6,1,6,2,6,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,0,3,2,4,0,3,6,0,0,5,1,5,1,0,2,6,2,3,6,0,4,6,0,3,5,3,5,1,0,5,1,0,4,5,4,5,4,5,2,0,6,3,6,2,6,4,5,2,0,0,0,1,0,1,0,1,0,2,4,5,2,5,2,5,2,6,5,2,3,5,3,5,3,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,3,5,3,5,6,2,5,2,4,0,5,2,5,2,5,2,5,2,5,6,0,5,0,1,5,2,3,5,3,0,5,6,0,4,2,4,0,3,5,4,0,6,2,6,1,5,3,4,5,4,3,6,0,1,2,6,0,0,0,0,0,0,0,0,0,1,0,0,5,1,5,2,1,4,6,5,1,5,1,0,0,4,6,0,0,5,3,1,3,5,3,2,6,2,4,6,0,6,0,2,4,2,4,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,4,6,0,4,0,0,0,0,0,4,3,0,1,2,1,4,5,4,2,4,6,4,6,5,1,6,5,6,0,3,0,6,3,6,0,5,1,5,1,6,1,6,0,0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,0,1,5,6,5,3,6,2,3,2,1,3,1,2,1,2,3,1,2,1,5,1,6,1,6,1,6,1,6,0,0,4,0,4,0,4,0,4,0,4,0,0,0,4,0,4,0,4,0,4,0,0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,4,0,0,0,6,5,0,5,0,3,0,0,1,5,1,5,1,5,1,0,5,2,4,2,0,0,3,0,0,3,1,0,6,0,6,0,5,0,0,3,0,0,0,0,6,0,6,0,0,6,0,4,0,0,0,4,0,0,4,0,4,0,4,0,4,0,4,0,0,3,6,3,6,2,0,2,0,6,3,4,5,0,6,4,2,5,3,1,6,3,0,0,1,2,0,0,0,0,4,5,4,5,4,5,0,0,0,0,4,5,4,5,4,5,4,5,0,4,0,0,5,4,5,4,5,4,5,4,5,4,0,6,5,4,3,2,0,0,6,2,3,6,2,6,1,6,1,0,0,2,1,5,1,4,0,0,4,6,0,6,0,0,6,0,0,0,6,0,0,0,6,0,5,0,4,5,4,5,0,0,6,0,6,1,0,6,0,5,4,0,1,0,2,1,0,1,0,2,0,6,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,3,0,0,1,3,0,1,3,1,3,1,3,0,6,1,3,1,3,6,1,3,1,3,1,3,1,0,2,1,2,1,3,1,2,0,2,0,0,1,0,3,1,3,1,5,3,5,0,5,4,5,4,5,4,5,4,0,6,1,6,1,6,1,6,3,6,3,1,6,1,6,1,6,1,3,6,3,1,6,3,1,3,0,5,2,5,2,5,4,2,4,5,4,5,4,5,4,2,3,1,3,2,4,0,0,0,0,0,2,0,6,1,6,3,1,6,1,6,0,1,6,1,6,1,0,4,0,5,4,0,5,0,5,4,5,4,0,4,5,4,5,4,0,5,4,0,4,5,0,5,0,4,5,4,0,0,6,0,6,0,6,0,6,0,1,3,1,3,1,3,1,3,1,3,1,3,0,0,6,0,6,0,1,0,0,0,6,1,6,1,6,1,6,1,0,0,2,5,3,2,1,2,0,0,0,0,0,6,0,0,5,0,3,1,4,6,4,5,0,3,1,3,0,2,0,0,0,5,2,4,5,2,0,6,1,0,2,0,1,0,3,6,0,3,6,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,0,0,4,0,0,4,0,4,0,4,0,4,0,2,5,1,5,3,1,5,3,0,0,1,2,4,5,4,0,2,3,6,5,4,1,4,0,3,6,0,0,5,4,0,0,1,5,0,0,4,5,4,0,0,2,4,5,1,0,1,0,6,1,6,3,4,1,0,3,6,3,6,3,6,3,6,3,6,0,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,0,0,6,1,6,0,5,3,5,0,0,4,2,4,2,4,0,2,0,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,0,0,4,5,1,3,1,6,1,3,6,0,0,0,1,5,4,0,0,4,5,0,1,4,1,5,1,0,1,2,1,2,1,2,1,2,1,2,1,0,5,2,4,2,4,1,2,1,2,1,2,1,2,1,0,1,0,6,3,0,1,3,6,0,1,0,0,0,5,0,5,3,6,5,6,3,0,0,0,0,2,6,2,6,2,6,2,6,2,0,0,0,4,0,4,0,4,0,4,2,4,5,4,2,6,2,6,0,6,1,6,2,4,2,6,2,6,0,6,0,6,0,6,0,0,3,0,5,0,4,0,0,0,0,3,0,0,0,0,3,0,0,3,0,3,0,3,0,3,0,3,0,0,3,2,6,2,1,6,2,6,0,5,4,0,5,6,3,1,6,1,0,1,0,1,0,5,0,1,5,4,1,5,1,0,2,0,4,0,4,5,0,0,5,0,3,0,6,3,0,3,0,6,0,0,0,6,0,0,0,3,0,0,0,0,0,6,0,0,0,3,0,0,3,0,3,0,3,0,3,0,6,3,0,3,0,3,0,3,0,6,3,6,3,6,3,6,3,6,3,6,3,6,0,0,5,0,5,0,5,0,2,0,2,0,2,0,2,0,0,2,0,3,2,6,2,6,0,0,4,5,4,0,4,5,1,6,2,0,1,4,0,2,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,0,4,0,4,0,4,0,4,0,4,0,4,0,0,5,3,2,6,1,3,2,6,4,0,5,4,0,4,0,2,4,0,0,4,3,5,3,0,5,0,0,0,0,0,0,3,1,6,1,3,1,0,1,6,3,1,3,6,1,6,0,3,6,0,0,5,2,5,2,4,5,2,3,6,3,6,3,1,6,0,3,6,0,6,0,6,0,0,6,0,6,3,6,3,6,0,2,5,2,5,2,5,4,5,4,2,4,5,4,2,4,5,2,0,0,3,0,6,0,0,3,6,3,0,3,6,3,6,3,0,3,6,0,6,0,6,0,6,0,6,0,6,0,6,0,0,0,0,0,6,0,0,5,0,5,0,6,5,0,2,6,5,0,2,3,6,0,0,5,0,0,1,0,0,1,0,1,0,1,0,1,0,4,5,4,2,5,4,2,4,5,2,5,0,2,5,0,0,6,3,6,0,0,6,0,0,3,0,1,0,0,0,1,0,1,0,1,0,0,0,5,0,0,2,0,0,0,6,0,6,0,6,0,6,0,6,0,6,0,0,6,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,2,0,2,4,5,2,0,0,0,0,0,0,0,0,2,3,2,1,2,5,2,5,2,0,0,0,0,6,0,6,0,4,0,6,0,4,1,0,6,0,6,0,6,5,6,4,6,0,2,6,2,3,6,4,5,4,6,4,5,4,5,4,6,4,0,6,2,4,6,2,6,2,6,1,0,5,4,2,5,6,5,2,4,2,5,4,1,3,1,6,4,2,1,2,1,6,3,1,3,0,1,0,1,0,5,3,5,3,5,3,0,2,6,4,6,2,5,6,5,6,0,5,4,5,2,3,5,2,5,2,6,0,0,1,0,1,0,1,0,1,0,1,0,0,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,0,1,0,1,3,1,0,6,1,3,6,3,6,3,6,0,6,4,6,4,6,4,6,4,6,0,6,0,6,0,5,2,5,2,5,2,5,2,5,2,0,2,5,0,5,0,4,0,5,0,0,2,4,2,4,2,0,2,5,0,5,0,5,0,2,0,0,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,0,0,3,2,1,5,1,4,0,3,1,3,1,3,1,3,1,4,2,3,0,6,0,0,4,0,4,0,4,0,4,0,4,0,0,0,0,6,0,3,0,6,0,0,6,0,3,0,6,0,0,0,0,1,2,1,2,0,6,3,6,3,0,6,3,6,0,0,3,4,3,4,3,4,5,6,4,6,4,6,4,3,4,2,4,1,6,2,1,2,1,5,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,6,0,6,0,0,6,0,6,0,6,0,6,0,0,0,6,1,0,5,1,0,5,1,2,1,6,0,5,2,0,6,3,6,3,6,3,4,3,4,3,4,3,0,1,4,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,6,0,6,0,6,0,6,0,0,6,0,0,6,0,6,0,0,2,4,2,4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,0,4,0,0,4,0,0,4,0,0,0,0,0,0,5,6,5,6,2,0,3,0,0,6,5,0,5,0,5,0,2,0,5,2,0,3,4,3,4,0,2,3,6,3,4,0,3,4,3,4,0,6,0,0,6,0,0,0,0,6,0,6,0,6,0,6,0,6,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,2,1,2,1,6,0,4,3,4,3,4,0,4,3,0,3,0,0,0,6,0,6,0,6,0,6,0,6,0,0,6,0,0,6,2,6,5,0,4,5,4,5,4,2,4,0,4,2,4,6,5,4,1,4,2,4,0,4,0,0,0,0,0,0,5,2,0,5,0,2,0,0,0,0,0,0,0,2,0,5,0,0,0,0,2,0,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,2,5,0,5,0,5,0,1,0,1,3,1,6,3,1,6,3,0,3,6,3,1,3,1,3,0,1,0,6,3,6,3,6,0,0,0,0,0,5,0,0,0,0,0,2,0,2,0,0,0,2,5,2,5,2,6,0,0,0,1,2,1,5,0,2,0,5,6,5,0,1,4,1,0,4,0,6,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,5,2,0,5,0,5,2,0,0,2,0,5,0,0,0,0,2,5,2,5,0,0,0,0,0,0,0,5,2,5,2,5,2,5,2,5,2,0,2,0,2,5,0,0,5,0,2,0,2,0,0,5,0,2,5,2,5,0,0,5,0,2,5,0,0,2,0,5,1,0,1,0,2,0,2,0,5,2,5,2,5,2,5,2,5,0,3,0,5,4,3,4,1,3,0,0,4,0,0,4,0,0,4,0,0,4,0,0,0,4,0,0,4,0,0,4,0,4,0,4,0,0,4,0,4,0,4,0,0,0,0,4,0,4,0,4,0,0,4,0,0,2,0,5,0,5,2,0,2,0,0,6,1,6,1,6,0,6,1,6,1,6,1,0,0,1,0,0,1,5,0,6,2,0,0,1,0,0,0,0,5,0,2,5,2,5,2,0,0,4,3,0,3,4,3,4,3,0,4,3,4,3,4,3,4,3,4,3,0,4,3,0,3,4,3,4,0,1,0,3,4,1,6,0,1,6,1,6,0,5,1,0,0,0,1,5,6,0,2,0,0,0,0,3,0,5,1,0,0,0,0,0,0,0,0,0,0,0,0,1,5,6,2,1,2,1,2,3,0,0,5,0,2,5,2,4,2,5,4,2,4,2,0,6,1,6,1,6,1,6,1,6,1,2,1,2,0,3,6,4,1,3,6,3,1,6,2,4,1,4,6,3,0,5,2,5,1,0,2,0,0,6,5,2,4,0,6,4,1,2,1,2,1,0,5,0,3,6,5,1,4,6,0,5,4,3,4,3,4,2,0,6,2,6,1,2,3,5,4,5,1,2,1,6,1,3,1,0,1,6,1,6,1,3,1,0,1,0,1,0,0,2,5,4,5,4,5,2,5,2,5,2,5,4,5,2,0,5,0,2,5,2,0,5,2,5,0,4,0,5,0,0,4,1,0,1,0,2,1,2,6,2,0,2,5,3,6,0,5,0,1,2,1,2,0,0,1,3,4,3,4,6,1,2,5,2,0,1,2,5,4,0,5,1,5,1,3,2,3,5,4,0,1,2,0,4,6,3,4,2,5,3,1,2,0,2,0,2,0,2,4,5,0,4,3,4,1,4,6,4,2,1,2,1,2,1,2,1,6,2,4,0,1,2,1,2,1,2,0,2,0,5,4,2,3,2,5,3,1,6,4,2,1,2,0,2,0,1,2,0,1,2,1,2,1,2,1,0,2,0,5,2,0,5,2,4,0,1,3,0,6,1,6,3,1,6,1,0,2,0,1,0,3,6,1,0,0,0,6,0,2,5,3,4,0,4,0,2,6,0,1,0,3,2,5,0,0,0,0,0,2,0,0,5,2,5,2,5,2,5,2,5,2,5,0,1,2,1,2,1,2,1,2,1,2,1,0,5,1,2,5,4,3,6,4,3,5,3,0,1,6,2,1,5,1,0,6,3,6,1,3,1,3,1,6,1,6,0,2,0,3,2,5,2,5,2,4,0,4,6,4,5,4,5,4,2,3,6,2,5,2,5,0,2,0,0,5,0,5,4,0,5,0,4,0,0,2,1,2,1,2,1,2,1,2,1,2,1,2,0,0,0,1,2,1,2,0,2,1,2,1,2,1,0,2,0,2,1,2,1,2,0,5,0,1,4,0,4,5,4,5,0,2,0,2,5,2,0,5,2,0,5,0,2,5,0,4,0,6,3,6,3,0,0,0,6,3,6,0,3,0,3,0,0,0,0,6,3,6,3,0,6,3,6,0,4,5,4,0,4,5,4,5,4,0,5,4,0,0,5,0,0,5,4,5,0,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,0,0,0,4,0,1,0,1,0,2,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,2,0,1,2,0,2,0,1,2,1,2,1,2,1,0,0,2,0,0,1,0,0,5,4,5,6,5,3,6,5,4,0,0,0,0,6,3,1,5,1,2,6,4,0,0,6,5,6,0,5,4,6,3,6,4,6,5,1,4,1,4,1,4,6,0,6,5,2,4,2,1,2,1,5,3,2,0,6,2,6,5,2,0,2,0,2,0,2,0,6,5,6,1,6,5,4,5,3,5,3,4,3,0,6,0,0,2,0,2,0,2,0,2,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,6,5,0,6,3,4,6,1,6,0,4,6,5,6,0,0,4,2,5,2,5,2,5,1,4,1,2,1,2,0,6,1,4,1,0,6,0,2,6,2,0,0,5,0,6,3,0,3,2,6,2,5,2,3,2,3,2,3,0,6,5,6,5,6,5,6,5,6,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,3,0,1,6,1,3,6,3,6,5,3,6,3,1,4,1,4,3,5,3,5,3,5,3,5,0,2,0,0,0,2,0,0,0,2,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,2,0,5,2,5,2,5,0,3,0,0,3,4,1,0,6,0,6,0,6,0,6,0,6,0,0,4,5,1,6,2,6,0,0,0,0,0,3,5,2,5,1,6,5,4,1,2,5,1,6,1,2,1,2,0,0,2,5,2,5,2,5,2,5,2,5,2,5,0,6,3,6,0,3,6,3,6,3,6,0,3,6,0,2,4,5,4,5,2,5,2,4,0,5,4,0,2,0,0,5,0,2,4,5,0,2,0,0,0,5,4,5,0,2,0,0,4,5,0,0,5,0,0,0,0,5,0,5,0,5,0,0,1,0,3,1,6,1,3,1,6,1,0,0,3,6,1,3,1,3,6,1,6,0,4,6,3,2,6,1,5,1,6,4,0,2,0,5,0,5,2,0,5,0,5,0,5,0,5,0,5,0,5,0,1,4,1,2,3,6,3,6,3,4,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,3,6,1,0,0,5,2,5,2,5,2,0,2,5,2,5,2,5,0,2,5,2,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,5,0,0,0,5,0,5,0,0,4,1,4,6,3,1,3,1,2,1,0,1,0,0,0,0,0,0,3,0,3,0,0,0,0,5,2,4,5,2,6,5,6,2,4,6,3,1,6,2,6,2,1,0,6,1,6,0,0,6,2,4,3,0,1,4,6,4,3,6,4,6,4,6,4,0,2,1,3,5,1,6,5,2,5,3,5,6,5,1,6,5,0,5,4,5,4,0,6,4,6,4,4,6,4,6,4,6,4,6,4,6,4,6,0,6,4,6,0,5,2,5,2,5,2,5,2,0,3,0,1,3,0,1,3,1,0,3,4,6,4,6,4,6,4,6,4,6,4,0,6,4,6,4,0,6,1,3,1,0,3,0,0,6,0,6,0,0,5,0,5,0,5,0,0,5,0,5,0,0,0,5,0,5,0,5,0,5,0,0,0,0,5,0,0,5,0,5,0,5,0,5,0,0,5,0,5,0,0,5,0,5,0,5,0,5,0,5,0,5,0,0,1,6,2,6,2,3,1,2,1,2,1,3,2,3,2,0,4,0,0,2,0,0,5,2,5,1,5,6,0,2,3,0,1,5,0,1,3,6,0,4,2,4,6,4,6,4,6,4,6,4,6,4,0,6,4,6,4,6,4,6,4,6,4,6,4,0,5,1,3,1,0,0,5,2,1,2,3,0,0,5,0,5,0,5,0,5,0,1,3,2,0,0,0,0,0,6,0,0,0,6,4,6,0,2,0,2,1,2,1,2,1,2,1,2,0,2,1,0,0,1,0,6,1,0,1,2,1,3,1,3,6,1,6,1,0,5,1,3,0,6,2,0,0,0,0,0,1,5,1,0,3,5,3,6,1,2,0,2,6,0,4,1,5,4,0,1,0,0,1,6,0,6,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,2,0,2,0,2,0,5,6,5,6,0,3,0,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,0,0,4,0,0,0,0,0,0,4,1,4,0,4,5,6,5,6,5,6,5,6,5,6,5,6,0,2,4,5,2,5,2,6,2,6,0,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,3,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,3,0,3,0,0,1,0,1,0,1,0,1,0,0,4,1,4,0,4,0,0,0,1,0,0,2,0,2,0,2,0,0,3,0,0,1,4,0,0,5,0,6,3,6,0,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,4,1,4,0,0,5,2,3,6,0,6,0,0,0,0,0,0,1,4,1,0,0,4,0,1,0,0,0,0,1,0,1,0,0,0,0,6,0,0,1,0,0,1,0,1,0,0,1,0,4,1,0,0,0,1,0,0,1,0,0,5,1,5,0,1,4,0,2,6,5,0,1,5,0,0,1,0,6,0,5,2,3,4,3,1,0,2,0,1,0,4,0,0,0,0,0,0,1,5,4,2,0,1,0,2,6,0,3,6,3,6,3,1,3,1,3,0,5,3,1,4,0,0,5,4,0,6,3,6,0,5,3,4,3,5,3,5,3,6,3,5,0,4,5,1,4,1,4,5,1,4,1,5,0,4,1,5,1,5,1,4,1,4,1,4,0,1,3,6,1,3,1,6,1,3,6,3,6,1,3,1,3,6,0,0,3,6,5,2,0,5,3,0,3,5,3,5,0,3,5,0,2,0,2,6,2,0,2,4,3,0,6,0,2,6,2,4,2,6,4,5,6,0,2,6,2,6,2,6,3,0,0,2,4,6,4,6,5,2,3,2,6,3,5,6,5,6,5,2,6,3,5,2,4,0,2,6,0,1,0,1,0,2,0,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,0,0,3,0,3,0,3,0,0,0,3,0,0,5,2,0,2,5,4,5,4,2,4,5,2,5,2,5,2,4,2,5,2,5,0,6,3,6,3,6,3,6,3,6,3,6,3,0,5,2,5,2,5,2,5,2,5,2,5,0,2,0,2,5,0,3,6,3,6,3,0,0,0,1,2,1,0,1,2,1,2,0,1,2,1,2,1,2,1,2,1,2,1,0,2,0,2,0,2,0,2,0,0,0,2,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0];
var currentTrack = 0;
var img=[];


function playNext(trackNum){
if(currentTrack < playingOrder.length){
  nums[playingOrder[trackNum]].play().onended(function(){
    currentTrack++;
    draw();
    playNext(currentTrack);
  });
  // imageSize(currentTrack);

  }
}
function preload() {
  soundFormats('mp3', 'ogg');
  nums[0]=createAudio('assets/Bleating-sheep.mp3');
  nums[1]=createAudio('assets/Bird-tweet-sound.mp3');
  nums[2]=createAudio('assets/Bleating-sheep.mp3');
  nums[3]=createAudio('assets/Kitty-meow.mp3');
  nums[4]=createAudio('assets/Meowing-cat.mp3');
  nums[5]=createAudio('assets/Rooster-crowing-in-the-morning.mp3');
  nums[6]=createAudio('assets/Turkey-noises.mp3');
  //console.log(nums[6]);
}


function setup() {
   createCanvas(700,394);
   img[0]=loadImage('img/background.png');
   img[1]=loadImage('img/Ross_mouth.png');
   img[2]=loadImage('img/rachel_mouth.png');
   img[3]=loadImage('img/joey_mouth.png');
   img[4]=loadImage('img/joey_mouth.png');
   img[5]=loadImage('img/joey_mouth.png');
   img[6]=loadImage('img/joey_mouth.png');

  }

function mousePressed(){
  playNext(currentTrack);
}

function draw() {
   image(img[playingOrder[currentTrack]],0,0);
}
