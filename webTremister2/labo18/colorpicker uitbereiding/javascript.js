window.addEventListener("load", () => {
    const rSlider = document.getElementById("redSlider");
    const gSlider = document.getElementById("greenSlider");
    const bSlider = document.getElementById("blueSlider");

    const rLabel = document.getElementById("redLabel");
    const gLabel = document.getElementById("greenLabel");
    const bLabel = document.getElementById("blueLabel");

    const mainSwatch = document.getElementById("mainSwatch");
    const btnSave = document.getElementById("btnSave");
    const savedContainer = document.getElementById("savedContainer");

    // Functie om de UI bij te werken op basis van slider waarden
    const updateUI = () => {
        const r = rSlider.value;
        const g = gSlider.value;
        const b = bSlider.value;

        rLabel.textContent = r;
        gLabel.textContent = g;
        bLabel.textContent = b;

        mainSwatch.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };

    // Event listeners voor de sliders
    [rSlider, gSlider, bSlider].forEach(slider => {
        slider.addEventListener("input", updateUI);
    });

    // Opslaan van een nieuwe swatch [cite: 435]
    btnSave.addEventListener("click", () => {
        const currentColor = mainSwatch.style.backgroundColor;
        const currentR = rSlider.value;
        const currentG = gSlider.value;
        const currentB = bSlider.value;

        // Maak de swatch container aan met createElement [cite: 218]
        const box = document.createElement("div");
        box.className = "saved-swatch";
        box.style.backgroundColor = currentColor;

        // Bewaar de individuele waarden in custom data-attributen [cite: 256-257]
        box.setAttribute("data-r", currentR);
        box.setAttribute("data-g", currentG);
        box.setAttribute("data-b", currentB);

        // Maak de delete knop aan [cite: 435]
        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.className = "btn-delete";

        // Verwijder-logica met stopPropagation [cite: 414]
        delBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // Voorkomt dat de swatch-klik wordt geactiveerd
            savedContainer.removeChild(box); // [cite: 284]
        });

        // Klik op de swatch om de kleur te herstellen [cite: 437]
        box.addEventListener("click", () => {
            rSlider.value = box.getAttribute("data-r");
            gSlider.value = box.getAttribute("data-g");
            bSlider.value = box.getAttribute("data-b");
            updateUI();
        });

        box.appendChild(delBtn);
        savedContainer.appendChild(box); // [cite: 282]
    });

    // Initialiseer de kleur bij het laden
    updateUI();
});