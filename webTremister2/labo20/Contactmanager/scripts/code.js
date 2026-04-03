let personen = [];
let currentIndex = -1; // -1 betekent dat we een nieuwe persoon aanmaken
// Event listener (btnBewaar click)
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    // (We gaan er hier vanuit dat valideer() elders in je code staat)
    valideer();

    // Bouw een nieuw persoon-object met de data uit het formulier
    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value
        // Tip: voeg hier eventueel andere velden (zoals adres, geboortedatum) toe
    };

    // indien ok, bewaar de ingegeven data.
    if (currentIndex === -1) {
        // een nieuw aangemaakte persoon voegen we toe achteraan de lijst
        personen.push(persoon);
        currentIndex = personen.length - 1; // Zet de index op deze nieuwe persoon
    } else {
        // een bestaande persoon in de lijst passen we aan
        personen[currentIndex] = persoon;
    }

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    updateLijst();
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    currentIndex = -1; // Belangrijk: reset de index naar -1

    // Maak de invulvelden leeg [cite: 210]
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";

    // Deselecteer de actieve persoon in de select-lijst
    document.getElementById("lstPersonen").selectedIndex = -1;
};

// Hulpfunctie om de <select> lijst in de HTML opnieuw op te bouwen
const updateLijst = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = ""; // Maak de lijst eerst volledig leeg

    // Loop door de array en maak voor elke persoon een <option> element
    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.text = personen[i].voornaam + " " + personen[i].familienaam;
        option.value = i; // We gebruiken de index als id/value
        lstPersonen.appendChild(option);
    }

    // Zorg ervoor dat de persoon die we net hebben bewaard, geselecteerd blijft
    lstPersonen.selectedIndex = currentIndex;
};

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

    // voeg een change listener toe aan lstPersonen
    // Bij het klikken op een option element in de lijst moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("change", (event) => {
        // Haal de index op van de geselecteerde persoon
        currentIndex = event.target.value;

        // Zoek de juiste persoon in de array
        let geselecteerdePersoon = personen[currentIndex];

        // Vul het formulier met de gegevens van deze persoon
        document.getElementById("txtVoornaam").value = geselecteerdePersoon.voornaam;
        document.getElementById("txtFamilienaam").value = geselecteerdePersoon.familienaam;
    });
};

window.addEventListener("load", setup);