function playAudio() {
    var audio = document.getElementById("audio");
    var playButton = document.getElementById("playButton");

    if (audio.paused) {
        audio.play();
        playButton.src = "pause_button_image.gif";
        playButton.onclick = null;
    } else {
        audio.pause();
        playButton.src = "play_button_image.png";
        playButton.onclick = playAudio;
    }
}

function audioEnded() {
    var playButton = document.getElementById("playButton");
    playButton.src = "play_button_image.png";
    playButton.onclick = playAudio;
}
