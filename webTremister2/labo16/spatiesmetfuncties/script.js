const setup = () => {
    const btn = document.getElementById("btnVerwerk");
    const inputField = document.getElementById("txtInput");
    const output = document.getElementById("output");
    const maakMetSpaties = (inputText) => {
        let result = "";
        let cleanText = inputText.trim();
        for (let i = 0; i < cleanText.length; i++) {
            let char = cleanText.charAt(i);
            if (char !== " ") {
                result += char + " ";
            }
        }
        return result.trim();
    };
    btn.addEventListener("click", () => {
        let tekst = inputField.value;
        if (tekst.indexOf("hond") !== -1) {
            console.log("Gevonden op positie: " + tekst.indexOf("hond"));
            alert("Woef! Je hebt een hond gevonden.");
        }
        let resultaat = maakMetSpaties(tekst);
        console.log("Resultaat: '" + resultaat + "'");
        output.textContent = resultaat;
    });
};
window.addEventListener("load", setup);