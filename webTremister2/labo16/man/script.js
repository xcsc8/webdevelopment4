const setup = () => {
    const btn = document.getElementById("btnBereken");
    const berekenVoorkomens = () => {
        const tekst = document.getElementById("bronTekst").value;
        const zoekTerm = document.getElementById("zoekTerm").value;
        if (zoekTerm.length === 0) {
            alert("Geef een zoekterm in.");
            return;
        }
        let tellerIndex = 0;
        let posIndex = tekst.indexOf(zoekTerm);

        while (posIndex !== -1) {
            tellerIndex++;
            posIndex = tekst.indexOf(zoekTerm, posIndex + 1);
        }
        let tellerLast = 0;
        let posLast = tekst.lastIndexOf(zoekTerm);

        while (posLast !== -1) {
            tellerLast++;
            posLast = tekst.lastIndexOf(zoekTerm, posLast - 1);
        }
        document.getElementById("result-indexOf").innerText =
            `Aantal keer "${zoekTerm}" via indexOf: ${tellerIndex}`;
        document.getElementById("result-lastIndexOf").innerText =
            `Aantal keer "${zoekTerm}" via lastIndexOf: ${tellerLast}`;
    };
    btn.addEventListener("click", berekenVoorkomens);
};

window.addEventListener("load", setup);