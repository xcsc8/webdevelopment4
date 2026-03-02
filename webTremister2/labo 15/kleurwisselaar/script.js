const setup = () => {
    let but1 = document.getElementsByClassName("button1");
    let but2 = document.getElementsByClassName("button2");
    let but3 = document.getElementsByClassName("button3");
    but1[0].addEventListener("click", update1);
    but2[0].addEventListener("click", update2);
    but3[0].addEventListener("click", update3);
}
const update1 = () => {
    let but1 = document.getElementsByClassName("button1");
    but1[0].classList.toggle('anderAchtergrondKleur');
}
const update2 = () => {
    let but2 = document.getElementsByClassName("button2");
    but2[0].classList.toggle('anderAchtergrondKleur');
}
const update3 = () => {
    let but3 = document.getElementsByClassName("button3");
    but3[0].classList.toggle('anderAchtergrondKleur');
}
window.addEventListener("load", setup);