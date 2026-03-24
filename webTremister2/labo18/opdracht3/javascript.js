const knop = document.getElementById("mijnKnop");
const mijnDiv = document.getElementById("myDIV");
knop.addEventListener("click", function () {
    const nieuwElement = document.createElement("p");
    nieuwElement.textContent = "Ik ben een nieuw p-element!";
    mijnDiv.appendChild(nieuwElement);
});