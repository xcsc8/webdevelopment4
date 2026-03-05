const setup = () => {
    const btn = document.getElementById("btnVerwerk");
    const inputField = document.getElementById("txtInput");
    const output = document.getElementById("output");

    // De gevraagde functie
    const maakMetSpaties = (inputText) => {
        let result = "";

        // We trimmen de tekst eerst om spaties aan begin/eind te negeren
        let cleanText = inputText.trim();

        for (let i = 0; i < cleanText.length; i++) {
            let char = cleanText.charAt(i);

            // Voeg het karakter toe, en een spatie als het niet de laatste is
            if (char !== " ") {
                result += char + " ";
            }
        }
        return result.trim(); // Verwijder de allerlaatste spatie
    };

    // Event listener voor de knop
    btn.addEventListener("click", () => {
        let tekst = inputField.value;

        // Voorbeeldgebruik van indexOf uit de opdracht:
        // We checken of de tekst het woord "hond" bevat voordat we verwerken
        if (tekst.indexOf("hond") !== -1) {
            console.log("Gevonden op positie: " + tekst.indexOf("hond"));
            alert("Woef! Je hebt een hond gevonden.");
        }

        let resultaat = maakMetSpaties(tekst);

        // Toon op console (zoals gevraagd) én op het scherm
        console.log("Resultaat: '" + resultaat + "'");
        output.textContent = resultaat;
    });
};

window.addEventListener("load", setup);