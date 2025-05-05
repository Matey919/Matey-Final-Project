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
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

// I asked GPT how can I make constant look at the player's playing situation like which song is playing and if it's being paused or repeat. And It showed me the document. querySelector function that I used a lot

//Track Statement
let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;


const music_list = [
    {
        img : 'asset/images/wash over me teeks.jpeg',
        name : 'Wash over me',
        artist : 'Teeks',
        music : 'asset/music/Wash-over-Me.mp3'
    },
    {
        img : 'asset/images/My kind of love with carmody.jpg',
        name : 'My kind of love (with carmody)',
        artist : 'Connor ALBERT, Carmody',
        music : 'asset/music/My-Kind-of-Love-_with-Carmody_-_p_.mp3'
    },
    {
        img : 'images/faded.png',
        name : 'Faded',
        artist : 'Alan Walker',
        music : 'music/Faded.mp3'
    },
    {
        img : 'images/ratherbe.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        music : 'music/Rather Be.mp3'
    }
];
