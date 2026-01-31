// Audio
let audio = new Audio('audio/tobu-colors.mp3');

function playAudio() { audio.play().catch(e => console.log("L'audio nécessite une interaction utilisateur.")); }
function pauseAudio() { audio.pause(); }

// Gestion des Fenêtres
function openApp(id) {
    document.getElementById(id).style.display = 'block';
}

function closeApp(id) {
    document.getElementById(id).style.display = 'none';
}

// Support ESU
function closeESU() {
    document.getElementById('esu-fullscreen-alert').style.display = 'none';
    const notif = document.getElementById('esu-notif');
    notif.style.display = 'block';
    notif.parentElement.classList.add('esu-alert-active');
}

// Thèmes (Look Changer)
function setTheme(theme) {
    document.body.className = theme + '-mode';
}

// Horloge
function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = h + ":" + m;
}
setInterval(updateClock, 1000);
updateClock();

// Recherche Store
function searchApps() {
    const q = document.getElementById('store-search').value.toLowerCase();
    const content = document.getElementById('store-content');
    if (q.includes('vivaldi')) {
        content.innerHTML = "<h3>Vivaldi Browser</h3><p>Version 4 Plus compatible ESU 2028.</p><button class='btn-orange'>Installer</button>";
    }
}