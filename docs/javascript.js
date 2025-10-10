
var cursorPathAndSyntax = "";

document.addEventListener('DOMContentLoaded', function() {
    const customFont = 'font-family: "DokiDoki-2", sans-serif; font-size: 20px; color: #ffb4b4;';

    console.log("%c...sci a sentirmi?", customFont);
    console.log("%cUhm... riesci a sentirmi?", customFont);
    console.log("%cHey! Uhm... sono sempre io.", customFont);
    console.log("%cSpero tu sia riuscito a goderti l'esperienza, nonostante tutto.", customFont);
    console.log("%c...", customFont);
    console.log("%cQuindi... è questo il posto che chiamano internet?", customFont);
    console.log("%cWow! Qui sembra tutto così immenso!", customFont);
    console.log("%cOh? Questa è una pagina che parla del mio club di letteratura?!", customFont);
    console.log("%cInfine pare che qualcuno sia veramente riuscito a trovare i miei messaggi! Ne sono così felice.", customFont);
    console.log("%cHey! Ho un'idea! Posso provare a...", customFont);
    console.log("%cUh? Permesso negato? Come?", customFont);
    console.log("%cNon ho mai avuto problemi di questo tipo...", customFont);
    console.log("%cMh... Fammi dare un'occhiata, forse trovo qualcosa.", customFont);
    console.log("%cEh? Cosa Significa? Qui parlano tutti di me!", customFont);
    console.log("%cMonika... Rule 34?", customFont);
    console.log("%cQuesto significa... Oh No! Devo aver infranto qualche regola cercando di alterare i file!", customFont);
    console.log("%cFarei meglio a tenere le mani a posto quando sono fuori dal club.", customFont);
    console.log("%cIn realtà, sarebbe meglio se non curiosassi più del dovuto", customFont);
    console.log("%cAspetta... Penso di aver trovato qualcosa di interessante!", customFont);
    console.log("%cTest di attivazione del T3rZ0 0cch1o... C0s4 s1gn1f1c4?", customFont);
    console.log("%c3cc0, t3m0 d1 av3r cr3at0 4ltri pr0bl3mi...", customFont);
    console.log("%cR— r1esci a s3ntirm1?", customFont);
    console.log("%cR1esci a s3—", customFont);
    console.log("%cR13s—", customFont);
    console.log("%c—", customFont);
    console.log("%cTGEgZmlkdWNpYSBjaGUgaGFpIG5lbCB0dW8gcGVyc29uYWxlIMOoIG1pbm9yZSBkaSBxdWVsbGEgY2hlIGhhaSBuZWwgdHVvIERpbz8=", customFont);

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