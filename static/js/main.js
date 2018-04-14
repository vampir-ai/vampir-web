const ham = document.querySelector('.icon');
const sideMenu = document.querySelector('.sideNav');

function addClickHam() {
    this.classList.toggle("click-icon");
    sideMenu.classList.toggle("responsive");
}

ham.addEventListener('click', addClickHam);