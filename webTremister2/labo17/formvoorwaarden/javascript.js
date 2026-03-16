document.getElementById("btnToon").addEventListener("click", () => {
    let output = "";

    const roker = document.getElementById("roker").checked;
    output += (roker ? "is roker" : "is geen roker") + "\n";

    const taal = document.querySelector('input[name="taal"]:checked');
    output += "moedertaal is " + (taal ? taal.value : "niet ingevuld") + "\n";

    const buurland = document.getElementById("buurland").value;
    output += "favoriete buurland is " + buurland + "\n";

    const opties = document.getElementById("bestelling").selectedOptions;
    const keuzes = [];
    for (let i = 0; i < opties.length; i++) {
        keuzes.push(opties[i].value);
    }
    output += "bestelling bestaat uit " + keuzes.join(" ");

    document.getElementById("uitvoer").textContent = output;
});