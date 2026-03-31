// ─── Globale variabelen (gebundeld in één object) ───────────────────────────
let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    FLIP_DELAY: 900,        // ms wachttijd voor fout paar terugdraait
    afbeeldingen: ["kaart1.png", "kaart2.png", "kaart3.png",
                   "kaart4.png", "kaart5.png", "kaart6.png"],
    omgedraaid: [],         // max 2 omgedraaide kaarten (DOM-elementen)
    gevonden: 0,            // aantal gevonden paren
    pogingen: 0,            // aantal pogingen
    isBusy: false           // blokkeert klikken tijdens wachttijd
};

// ─── Hulpfuncties ────────────────────────────────────────────────────────────

// Schud een array in-place (Fisher-Yates)
const schud = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

// ─── Spellogica ──────────────────────────────────────────────────────────────

// Bouw het speelveld dynamisch op
const bouwSpeelveld = () => {
    const speelveld = document.getElementById("speelveld");
    speelveld.innerHTML = "";

    // Maak 12 kaarten: elk van de 6 afbeeldingen 2×
    let kaartNamen = [...global.afbeeldingen, ...global.afbeeldingen];
    schud(kaartNamen);

    kaartNamen.forEach((afbeelding, index) => {
        // Buitenste div (kaart)
        const kaart = document.createElement("div");
        kaart.classList.add("kaart");
        kaart.dataset.afbeelding = afbeelding;

        // Binnenste div (draaiend element)
        const inner = document.createElement("div");
        inner.classList.add("kaart-inner");

        // Achterkant (zichtbaar bij start)
        const achter = document.createElement("div");
        achter.classList.add("kaart-achter");
        const imgAchter = document.createElement("img");
        imgAchter.src = "images/achterkant.png";
        imgAchter.alt = "achterkant";
        achter.appendChild(imgAchter);

        // Voorkant (zichtbaar na omdraaien)
        const voor = document.createElement("div");
        voor.classList.add("kaart-voor");
        const imgVoor = document.createElement("img");
        imgVoor.src = "images/" + afbeelding;
        imgVoor.alt = afbeelding;
        voor.appendChild(imgVoor);

        inner.appendChild(achter);
        inner.appendChild(voor);
        kaart.appendChild(inner);

        kaart.addEventListener("click", onKaartKlik);
        speelveld.appendChild(kaart);
    });
};

// Handler: klik op een kaart
const onKaartKlik = (event) => {
    if (global.isBusy) return;  // blokkeer tijdens wachttijd

    const kaart = event.currentTarget;

    // Negeer al omgedraaide of gevonden kaarten
    if (kaart.classList.contains("omgedraaid")) return;
    if (kaart.classList.contains("gevonden")) return;

    // Draai de kaart om
    kaart.classList.add("omgedraaid");
    global.omgedraaid.push(kaart);

    // Zijn er 2 omgedraaide kaarten?
    if (global.omgedraaid.length === 2) {
        global.pogingen++;
        document.getElementById("pogingen").textContent = global.pogingen;
        controleerPaar();
    }
};

// Controleer of de 2 omgedraaide kaarten een paar vormen
const controleerPaar = () => {
    const [k1, k2] = global.omgedraaid;
    const isGoed = k1.dataset.afbeelding === k2.dataset.afbeelding;

    if (isGoed) {
        // Paar gevonden
        k1.classList.add("goed");
        k2.classList.add("goed");

        setTimeout(() => {
            k1.classList.remove("goed");
            k2.classList.remove("goed");
            k1.classList.add("gevonden");
            k2.classList.add("gevonden");
            global.omgedraaid = [];
            global.gevonden++;
            document.getElementById("gevonden").textContent = global.gevonden;

            if (global.gevonden === global.AANTAL_KAARTEN) {
                toonGewonnen();
            }
        }, 400);

    } else {
        // Geen paar → even wachten en terugdraaien
        global.isBusy = true;
        k1.classList.add("fout");
        k2.classList.add("fout");

        setTimeout(() => {
            k1.classList.remove("fout", "omgedraaid");
            k2.classList.remove("fout", "omgedraaid");
            global.omgedraaid = [];
            global.isBusy = false;
        }, global.FLIP_DELAY);
    }
};

// Toon het gewonnen-scherm
const toonGewonnen = () => {
    document.getElementById("finalPogingen").textContent = global.pogingen;
    document.getElementById("overlay").classList.remove("hidden");
};

// Start een nieuw spel
const nieuwSpel = () => {
    global.omgedraaid = [];
    global.gevonden = 0;
    global.pogingen = 0;
    global.isBusy = false;
    document.getElementById("pogingen").textContent = 0;
    document.getElementById("gevonden").textContent = 0;
    document.getElementById("overlay").classList.add("hidden");
    bouwSpeelveld();
};

// ─── Initialisatie ───────────────────────────────────────────────────────────
const setup = () => {
    document.getElementById("newGameBtn").addEventListener("click", nieuwSpel);
    document.getElementById("overlayBtn").addEventListener("click", nieuwSpel);
    nieuwSpel();
};

window.addEventListener("load", setup);
