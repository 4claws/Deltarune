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
    const player = document.createElement('div');
    player.id = 'ost-player';
    player.innerHTML =
    `
    <select id="track-selector" style="width: 50%;"></select>
    <div>Trackbar</div>
    <audio id="audio" src="https://github.com/4claws/Deltarune/blob/main/docs/assets/audio/osts/32%20-%20Toby%20Fox%20-%20Attack%20of%20the%20Killer%20Queen.mp3" equalizer-state="attached"></audio>
    `;
    body.appendChild(player);

    // List of tracks
    const tracks = [
        { name: "01 - Beginning", file: "https://github.com/4claws/Deltarune/blob/main/docs/assets/audio/osts/1_Beginning.mp3" },
        { name: "02 - My Castle Town", file: "https://github.com/4claws/Deltarune/blob/main/docs/assets/audio/osts/1.03%20Toby%20Fox%20-%20DELTARUNE%20Chapter%202%20OST%20-%2003%20My%20Castle%20Town.mp3" },
        { name: "03 - A CYBER'S WORLD", file: "https://github.com/4claws/Deltarune/blob/main/docs/assets/audio/osts/1.06%20Toby%20Fox%20-%20DELTARUNE%20Chapter%202%20OST%20-%2006%20A%20CYBER'S%20WORLD-.mp3" }
    ];

    const trackSelector = document.getElementById('track-selector');
    const audioElement = document.getElementById('audio');

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
        audioElement.play();
    });
}