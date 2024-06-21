document.addEventListener('DOMContentLoaded', () => {
    console.log("¡Bienvenido a Tu Sitio Web!");
});

function searchWinners() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('winnerList');
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let a =
