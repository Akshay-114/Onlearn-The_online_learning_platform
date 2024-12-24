
const toggle = document.getElementById('nightmode');
toggle.addEventListener('click', change);

function change() {
    document.body.classList.toggle('night-mode');
}


