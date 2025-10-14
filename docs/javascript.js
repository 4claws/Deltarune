// Adds a player
const body = document.body;
const player = document.createElement('div');
player.classList.add('ost-player');
player.id = 'ost-player';
player.innerHTML = 
`
<select id="track-selector" style="width: 50%;"></select>
<audio id="audio" src="assets/audio/osts/11_Thrash_Machine.mp3" equalizer-state="attached"></audio>
`;
body.appendChild(player);