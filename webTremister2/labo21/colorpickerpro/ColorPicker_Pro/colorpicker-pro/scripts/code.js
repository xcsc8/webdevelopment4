const STORAGE_KEY = "VIVES.colorPicker.state";

// ── Storage ──────────────────────────────────────────────────────────────────


const saveToStorage = () => {
    const state = {
        sliders: {
            red: document.getElementById("sldRed").value,
            green: document.getElementById("sldGreen").value,
            blue: document.getElementById("sldBlue").value
        },
        favorites: getFavoritesFromDOM()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};


const loadFromStorage = () => {
    const json = localStorage.getItem(STORAGE_KEY);
    if (!json) return;                          // nog niets opgeslagen

    const state = JSON.parse(json);


    document.getElementById("sldRed").value = state.sliders.red;
    document.getElementById("sldGreen").value = state.sliders.green;
    document.getElementById("sldBlue").value = state.sliders.blue;


    const swatchComponents = document.getElementById("swatchComponents");
    state.favorites.forEach(fav => {
        const swatch = buildSwatchComponent(fav.red, fav.green, fav.blue);
        swatchComponents.appendChild(swatch);
    });


    update();
};

// ── DOM helpers ───────────────────────────────────────────────────────────────

const getFavoritesFromDOM = () => {
    const swatches = document.querySelectorAll("#swatchComponents .swatch");
    const favorites = [];
    swatches.forEach(swatch => {
        favorites.push({
            red: swatch.getAttribute("data-red"),
            green: swatch.getAttribute("data-green"),
            blue: swatch.getAttribute("data-blue")
        });
    });
    return favorites;
};

// ── ColorPicker logica ────────────────────────────────────────────────────────


const update = () => {
    const red = document.getElementById("sldRed").value;
    const green = document.getElementById("sldGreen").value;
    const blue = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;

    document.getElementById("swatch").style.background =
        `rgb(${red}, ${green}, ${blue})`;

    saveToStorage();
};


/*const saveSwatch = () => {
    const red = document.getElementById("sldRed").value;
    const green = document.getElementById("sldGreen").value;
    const blue = document.getElementById("sldBlue").value;

    const swatchComponents = document.getElementById("swatchComponents");
    const swatch = buildSwatchComponent(red, green, blue);
    swatchComponents.appendChild(swatch);

    saveToStorage();
};*/

const saveSwatch = () => {
    const red = document.getElementById("sldRed").value;
    const green = document.getElementById("sldGreen").value;
    const blue = document.getElementById("sldBlue").value;
    const existingFavorites = getFavoritesFromDOM();
    const isDuplicate = existingFavorites.some(fav =>
        fav.red === red && fav.green === green && fav.blue === blue
    );
    if (isDuplicate) {
        return;
    }

    const swatchComponents = document.getElementById("swatchComponents");
    const swatch = buildSwatchComponent(red, green, blue);
    swatchComponents.appendChild(swatch);

    saveToStorage();  // sla op nadat de favoriet aan de DOM is toegevoegd
};

const buildSwatchComponent = (red, green, blue) => {
    const swatch = document.createElement("div");
    const btnDelete = document.createElement("input");


    swatch.className = "swatch";
    swatch.setAttribute("data-red", red);
    swatch.setAttribute("data-green", green);
    swatch.setAttribute("data-blue", blue);
    swatch.style.background = `rgb(${red}, ${green}, ${blue})`;
    swatch.addEventListener("click", setColorPickerFromSwatch);


    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);

    swatch.appendChild(btnDelete);
    return swatch;
};


const setColorPickerFromSwatch = (event) => {
    const swatch = event.currentTarget;

    document.getElementById("sldRed").value = swatch.getAttribute("data-red");
    document.getElementById("sldGreen").value = swatch.getAttribute("data-green");
    document.getElementById("sldBlue").value = swatch.getAttribute("data-blue");


    update();
};

const deleteSwatch = (event) => {
    const button = event.target;
    const swatch = button.parentNode;
    const swatchComponents = document.getElementById("swatchComponents");

    swatchComponents.removeChild(swatch);


    saveToStorage();


    event.stopPropagation();
};

// ── Initialisatie ─────────────────────────────────────────────────────────────

const initialize = () => {

    const sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }


    document.getElementById("btnSave").addEventListener("click", saveSwatch);


    loadFromStorage();
};

window.addEventListener("load", initialize);

