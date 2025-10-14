let is_page_loaded = false;

// Wait for content to load first
document.addEventListener("DOMContentLoaded", function() {
    // Forcing the player to be added only once (i noticed that DOMContentLoaded was firing multiple times)
    if (!is_page_loaded) {
        // Adding the OST player
        addOstPLayer();
        is_page_loaded = true;
    }
});

// Adds the OST player
function addOstPLayer() {
    const body = document.body;
    const firstChild = body.children[0];

    // Create player container
    const player = document.createElement('div');
    player.classList.add('ost-player');
    player.id = 'ost-player';
    player.innerHTML =
    `
    <select id="ost-player-track-selector" class="ost-player-track-selector"></select>
    <input id="ost-player-trackbar" type="range" min="0" max="100" value="0" step="0.00001" class="ost-player-trackbar">
    <audio id="ost-player-audio" preload="none" equalizer-state="attached"></audio>
    `;
    firstChild.appendChild(player);

    // List of tracks
    const tracks = [
        { name: "01 - Beginning", file: "https://github.com/4claws/Deltarune/raw/refs/heads/main/docs/assets/audio/osts/1_Beginning.mp3" },
        { name: "02 - My Castle Town", file: "https://github.com/4claws/Deltarune/raw/refs/heads/main/docs/assets/audio/osts/1.03%20Toby%20Fox%20-%20DELTARUNE%20Chapter%202%20OST%20-%2003%20My%20Castle%20Town.mp3" },
        { name: "03 - A CYBER'S WORLD", file: "https://github.com/4claws/Deltarune/raw/refs/heads/main/docs/assets/audio/osts/1.06%20Toby%20Fox%20-%20DELTARUNE%20Chapter%202%20OST%20-%2006%20A%20CYBER'S%20WORLD-.mp3" }
    ];

    const trackSelector = document.getElementById('ost-player-track-selector');
    const audioElement = document.getElementById('ost-player-audio');

    // Populate the track selector
    tracks.forEach((track, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = track.name;
        trackSelector.appendChild(option);
    });

    // Change track on selection
    trackSelector.addEventListener('change', function () {
        const selectedTrack = tracks[this.value];
        audioElement.src = `${selectedTrack.file}`;
        audioElement.ondurationchange = function() {
            document.getElementById('ost-player-trackbar').max = audioElement.duration;
        };
        audioElement.play();
    });

    // Update trackbar as the audio plays
    audioElement.addEventListener('timeupdate', function () {
        document.getElementById('ost-player-trackbar').value = audioElement.currentTime;
    });

    // Seek audio when trackbar is changed
    document.getElementById('ost-player-trackbar').addEventListener('input', function () {
        audioElement.currentTime = this.value;
    });

    // Auto-play the first track
    trackSelector.value = 0;
    const event = new Event('change');
    trackSelector.dispatchEvent(event);

    // Play/pause on player click
    player.addEventListener('click', function () {
        if (!audioElement.src) return; // No track loaded
        if (audioElement.paused) audioElement.play();
        else audioElement.play();
    });
}