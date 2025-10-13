
var cursorPathAndSyntax = "";

document.addEventListener('DOMContentLoaded', function() {
    const customFont = 'font-family: "DokiDoki-2", sans-serif; font-size: 20px; color: #ffb4b4;';

    function getAudioPath(filename) {
        var path = window.location.pathname;
        // Verifica se il percorso contiene 'SNM-Literature-Club'
        if (path.includes('SNM-Literature-Club')) {
            // Controlla se si è nella pagina principale o in una sottopagina
            if (path === '/SNM-Literature-Club/' || path === '/SNM-Literature-Club/index.html' || path === '/SNM-Literature-Club') {
                
                cursorPathAndSyntax = "url('/SNM-Literature-Club/assets/img/S_head.webp'), auto";

                return '/SNM-Literature-Club/assets/audio/' + filename;
            } else {
                
                cursorPathAndSyntax = "url('../assets/img/S_head.webp'), auto";

                return '../assets/audio/' + filename;
            }
        } else {
            
            cursorPathAndSyntax = "url('../assets/img/S_head.webp'), auto";

            return '../assets/audio/' + filename;
        }
    }

    function playDDLCHoverSound() {
        var audio = new Audio(getAudioPath('hover-doki-doki-sfx.mp3'));
        audio.play();
    }

    function playDDLCClickSound() {
        var audio = new Audio(getAudioPath('click-doki-doki-sfx.mp3'));
        audio.play();
    }

    function enableSounds() {
        document.querySelectorAll('a, video, iframe, button, input').forEach(function(element) {
            element.addEventListener('mouseover', playDDLCHoverSound);
            element.addEventListener('click', playDDLCClickSound);
        });
    }

    function changeCursorImage() {
        document.body.style.cursor = cursorPathAndSyntax;
    }

    function changeCursorImageDefault() {
        document.body.style.cursor = "auto";
    }
  
    window.addEventListener('keydown', function(event) {
        if (event.key === 'F12') {
            var audio = new Audio(getAudioPath('monikas-laugh.mp3'));
            audio.play();
        }
    });

    var interval = 2500; // Intervallo per la quale il cursore potrebbe cambiare [cioè ogni 2,5 secondi potrebbe cambiare]
    var newCursorDuration = 2500; // Durata cursore cambiato [cioè, se cambia, dura 2,5 secondi e poi torna al default]
    var rarity = 10; // C'è solo una possibilità su 10 che esca il cursore

    setInterval(function() {

        var randomNumber = Math.round(Math.random() * rarity);

        if (randomNumber === 1) {

            changeCursorImage();

            setInterval(function() {

                changeCursorImageDefault();

            }, newCursorDuration);

        }

    }, interval);

    enableSounds();
});