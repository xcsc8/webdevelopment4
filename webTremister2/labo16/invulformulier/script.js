document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("opdrachtForm");
    const slider = document.getElementById("getal2");
    const output = document.getElementById("rangeVal");
    slider.addEventListener("input", () => {
        output.textContent = slider.value;
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Formulier succesvol gevalideerd en verzonden!");
    });
});