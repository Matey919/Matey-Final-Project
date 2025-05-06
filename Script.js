let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let curr_track = document.createElement('audio');

// I asked GPT how can I make constant look at the player's playing situation like which song is playing and if it's being paused or repeat. And It showed me the document. querySelector function that I used a lot

//Track Statement
let track_index = 0;
let isPlaying = false;
let updateTimer;


const music_list = [
    {
        img : "url('asset/images/wash over me teeks.jpeg)",
        name : 'Wash over me',
        artist : 'Teeks',
        music : 'asset/music/Wash-over-Me.mp3'
    },
    {
        img : "url('asset/images/My kind of love with carmody.jpg')",
        name : 'My kind of love (with carmody)',
        artist : 'Connor Albert, Carmody',
        music : 'asset/music/My-Kind-of-Love-_with-Carmody_-_p_.mp3'
    },
    {
        img : "url('asset/images/sober lorde.jpg')",
        name : 'Sober ',
        artist : 'Lorde',
        music : 'asset/music/Lorde-Sober-_p_.mp3'
    },
    {
        img : "url('asset/images/just wanna forget you.jpg')",
        name : 'Just wanna forget you',
        artist : 'Maro',
        music : 'asset/music/MARO-just-wanna-forget-you-_p_.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

	//track_art.style.backgroundImage = "url('asset/images/just wanna forget you.jpg')";
    track_art.style.backgroundImage = music_list[track_index].img;
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1){
        track_index += 1;
    }else if(track_index < music_list.length - 1){
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate() {
    if (isNaN(curr_track.duration)) return;

    const progress = (curr_track.currentTime / curr_track.duration) * 100;
    seek_slider.value = progress;
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };
  //The make up 0 part mainly comes from GPT
  
    curr_time.textContent = formatTime(curr_track.currentTime);
    total_duration.textContent = formatTime(curr_track.duration);
  }