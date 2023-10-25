console.log("Spotify!");

let songIndex = 0;
let myAudio = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');

let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
  {songName:"Tum hi ho", filePath : "songs/1.mp3",coverPath : "covers/1.jpg"},
  {songName:"Bandeya", filePath : "songs/2.mp3",coverPath : "covers/2.jpg"},
  {songName:"Rang Lageya", filePath : "songs/3.mp3",coverPath : "covers/3.jpg"},
  {songName:"Tum hi ho", filePath : "songs/4.mp3",coverPath : "covers/4.jpg"},
  {songName:"Tum hi ho", filePath : "songs/5.mp3",coverPath : "covers/5.jpg"},
  {songName:"Tum hi ho", filePath : "songs/6.mp3",coverPath : "covers/6.jpg"},
  {songName:"Tum hi ho", filePath : "songs/7.mp3",coverPath : "covers/7.jpg"},
  {songName:"Tum hi ho", filePath : "songs/8.mp3",coverPath : "covers/8.jpg"},
  {songName:"Tum hi ho", filePath : "songs/9.mp3",coverPath : "covers/9.jpg"},
  {songName:"Tum hi ho", filePath : "songs/10.mp3",coverPath : "covers/10.jpg"}
]

songItems.forEach((element,i)=>{
  // console.log(element,i);
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// Play/pause click
masterPlay.addEventListener('click', ()=>{
  if (myAudio.paused || myAudio.currentTime<=0) {
    // console.log("Ravii");
    myAudio.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
  }
  else{
    myAudio.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
  }
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    myAudio.play();
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    myAudio.src = `songs/{songIndex+1}.mp3`;
    myAudio.currentTime=0;
    myAudio.play();
})
})

// document.getElementById('previous').addEventListener('click',()=>{
//     if(songIndex <= 0){
//         songIndex = 9;
//     }else{
//         songIndex -= 1;
//     }
//     e.target.classList.remove('fa-play-circle');
//     e.target.classList.add('fa-pause-circle');
//     myAudio.src = `songs/{songIndex+1}.mp3`;
//     myAudio.currentTime=0;
//     myAudio.play();
// })
// document.getElementById('next').addEventListener('click',()=>{
//     if(songIndex >= 9){
//         songIndex = 0;
//     }else{
//         songIndex += 1;
//     }
//     e.target.classList.remove('fa-play-circle');
//     e.target.classList.add('fa-pause-circle');
//     myAudio.src = `songs/{songIndex+1}.mp3`;
//     myAudio.currentTime=0;
//     myAudio.play();
// })

// myAudio.play();
//Listen to Events
myAudio.addEventListener('timeupdate', ()=>{
  // console.log('timeupdate');
  //Update Seekbar
  progress = parseInt((myAudio.currentTime/myAudio.duration)*100);
  // console.log(progress);
  progressbar.value = progress;
})


progressbar.addEventListener('change',()=>{
  myAudio.currentTime = (progressbar.value*myAudio.duration)/100;
})