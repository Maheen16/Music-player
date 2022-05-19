const image = document.querySelector("img");
const audio = document.querySelector("audio");
const play = document.getElementById("play");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const musicName = document.getElementById("music-name");
const artistName = document.getElementById("artist-name");
let playPause = false;

const playMusic = () => {
  playPause = true;
  audio.play();
  play.classList.replace("fa-play", "fa-pause");
  image.classList.add("anime");
};

const pauseMusic = () => {
  playPause = false;
  audio.pause();
  play.classList.replace("fa-pause", "fa-play");
  image.classList.remove("anime");
  
};
play.addEventListener("click", () => {
  // Using turnery operator
  playPause ? pauseMusic() : playMusic();

  // if (playPause) {
  //     pauseMusic();
  // } else {
  //     playMusic();
  // }
});
const songs=[
  {
  name: "sab tera",
  title:"sab tera",
  artist:"arijit singh",
  },
  {

    name: "kaun tujhe",
    title:"kaun tujhe",
    artist:"Shreya Ghoshal",
  },
{
  name: "sukoon mila",
  title:"sukoon mila",
  artist:"arijit singh",
},
{

  name: "ijazat",
  title:"ijazat",
  artist:"arijit singh",
}

];
const loadSong =(songs)=>{
  musicName.textContent = songs.title;
  artistName.textContent = songs.artist;
  image.src='images/'+songs.name+'.jpg';
  audio.src = 'Songs/'+songs.name+'.mp3';

}
let songIndex = 0;
const nextSong=()=>{
  songIndex = (songIndex +1 ) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
}
const prevSong=()=>{
  songIndex = (songIndex -1 +songs.length ) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
}
next.addEventListener("click" , nextSong);
prev.addEventListener("click" , prevSong);