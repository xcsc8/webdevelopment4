const setup = () => {
    let output = document.getElementById("txtOutput");
    output.innerHTML = "Welkom op de pagina, de DOM is geladen!";
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}
const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let output = document.getElementById("txtOutput");
    let tekst = txtInput.value;
    console.log(tekst);
    output.innerHTML = tekst;
}
window.addEventListener("load", setup);