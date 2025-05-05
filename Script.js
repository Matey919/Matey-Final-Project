const now_playing = document.querySelector('.now-playing');
const track_art = document.querySelector('.track-art');
const track_name = document.querySelector('.track-name');
const track_artist = document.querySelector('.track-artist');


// I asked GPT how can I make constant depends on the player's playing situation like which song is playing and if it's being paused or repeat. And It showed me the document. querySelector function that I used a lot

const music_list = [
  {
    img: 'assets/images/wash over me teeks.jpeg',
    name: 'Wash over me',
    artist: 'Teeks',
    music: 'assets/music/Wash-over-Me.mp3'
  },
];

// Playing State
let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

// initialization
loadTrack(track_index);

// Loading song
function loadTrack(index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[index].music;
  curr_track.load();

  track_art.style.backgroundImage = `url(${music_list[index].img})`;
  track_name.textContent = music_list[index].name;
  track_artist.textContent = music_list[index].artist;
  now_playing.textContent = `Playing ${index + 1} of ${music_list.length}`;

  updateTimer = setInterval(updateTime, 1000);
  curr_track.addEventListener('ended', nextTrack);
  // Asked GPT how to make it go to next track after this track done and it gives me the addEventListener funtion.
}
