console.log("welcome to spotify") ;
let songindex=0;
let audioElement = new Audio('1.mp3') ;
let masterplay = document.getElementById('masterplay');
let myprogress = document.getElementById('myprogress');

let song=[
    {songname:"what makes you beautiful",filePath:"1.mp3",coverPath:"cover.png"},
    {songname:"what makes you beautiful",filePath:"1.mp3",coverPath:"cover.png"},
    {songname:"what makes you beautiful",filePath:"1.mp3",coverPath:"cover.png"},
    {songname:"what makes you beautiful",filePath:"1.mp3",coverPath:"cover.png"},
    {songname:"what makes you beautiful",filePath:"1.mp3",coverPath:"cover.png"},
    {songname:"what makes you beautiful",filePath:"1.mp3",coverPath:"cover.png"}
];

masterplay.addEventListener('click',()=>{
    if(audioElement.pause || audioElement.currentTime<=0)
    {
        audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    }
    else
    {
        audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    }
})

document.addEventListener('timeupdate',()=>{
console.log('timeupdate');
//update seek bar
})
