// Wait for content to load first
document.addEventListener("DOMContentLoaded", function() {
    // Adds a player
    const body = document.body;
    const player = document.createElement('div');
    player.id = 'ost-player';
    player.innerHTML = 
    `
    <select id="track-selector" style="width: 50%;"></select>
    <div>Trackbar</div>
    <audio id="audio" src="assets/audio/osts/11_Thrash_Machine.mp3" equalizer-state="attached"></audio>
    `;
    body.appendChild(player);

    // List of tracks
    const tracks = [
        { name: "01 - Beginning", file: "1_Beginning.mp3" },
        { name: "02 - My Castle Town", file: "1.03 Toby Fox - DELTARUNE Chapter 2 OST - 03 My Castle Town.mp3" },
        { name: "03 - A CYBER'S WORLD", file: "1.06 Toby Fox - DELTARUNE Chapter 2 OST - 06 A CYBER'S WORLD-.mp3" }
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
    trackSelector.addEventListener('change', function() {
        const selectedTrack = tracks[this.value];
        audioElement.src = `assets/audio/osts/${selectedTrack.file}`;
        audioElement.play();
    });
});