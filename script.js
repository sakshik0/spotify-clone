console.log("welcome to spotify");
let songindex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let song = [
  { songname: "what makes you beautiful", filePath: "1.mp3", coverPath: "cover.png" },
  { songname: "Night Changes", filePath: "2.mp3", coverPath: "cover.png" },
  { songname: "Little Things", filePath: "3.mp3", coverPath: "cover.png" },
  { songname: "what makes you beautiful", filePath: "1.mp3", coverPath: "cover.png" },
  { songname: "what makes you beautiful", filePath: "1.mp3", coverPath: "cover.png" },
  { songname: "what makes you beautiful", filePath: "1.mp3", coverPath: "cover.png" }
];

// songitem.forEach((element, i) => {
//   console.log(element, i);
//   const coverImg = element.getElementsByTagName("img")[0];
//   const songNameElement = element.getElementsByClassName("songname")[0];

//   if (song[i] && song[i].coverPath) {
//     coverImg.src = song[i].coverPath;
//   }

//   if (songNameElement && song[i] && song[i].songname) {
//     songNameElement.innerText = song[i].songname;
//   }
// });

masterplay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener('timeupdate', () => {
  console.log('timeupdate');
  //update seek bar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myprogressbar.value = progress;
});

myprogressbar.addEventListener('change', () => {
  audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
});

const makeallplays = () => {
  const songitemplayElements = Array.from(document.getElementsByClassName('songitemplay'));

  songitemplayElements.forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  });
};

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    console.log(e.target);
    makeallplays();
    //index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = '2.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    // masterplay.classList.remove('fa-play-circle');
    // masterplay.classList.add('fa-pause-circle');
  });
});

