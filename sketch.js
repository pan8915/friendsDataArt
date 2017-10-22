
var nums =[];
var playingOrder = [1,2,3,1,1,2,3];
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

  }

function mousePressed(){
  playNext(currentTrack);
}

function draw() {
   image(img[currentTrack],0,0);
}
