const isGetal = (tekst) => !isNaN(tekst);

const valideerVoornaam = () => {
    const input = document.getElementById("voornaam");
    const fout = document.getElementById("fout-voornaam");
    const waarde = input.value;

    if (waarde.length === 0) {
        fout.textContent = "verplicht veld";
        input.className = "ongeldig";
        return false;
    }
    if (waarde.length > 30) {
        fout.textContent = "max. 30 karakters";
        input.className = "ongeldig";
        return false;
    }
    fout.textContent = "";
    input.className = "geldig";
    return true;
};

const valideerFamilienaam = () => {
    const input = document.getElementById("familienaam");
    const fout = document.getElementById("fout-familienaam");
    const waarde = input.value;

    if (waarde.length === 0) {
        fout.textContent = "verplicht veld";
        input.className = "ongeldig";
        return false;
    }
    if (waarde.length > 50) {
        fout.textContent = "max. 50 karakters";
        input.className = "ongeldig";
        return false;
    }
    fout.textContent = "";
    input.className = "geldig";
    return true;
};

const valideerGeboortedatum = () => {
    const input = document.getElementById("geboortedatum");
    const fout = document.getElementById("fout-geboortedatum");
    const waarde = input.value;

    if (waarde.length === 0) {
        fout.textContent = "verplicht veld";
        input.className = "ongeldig";
        return false;
    }

    const datumRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!datumRegex.test(waarde)) {
        fout.textContent = "formaat is niet jjjj-mm-dd";
        input.className = "ongeldig";
        return false;
    }

    const datum = new Date(waarde);
    if (isNaN(datum.getTime())) {
        fout.textContent = "geen geldige datum";
        input.className = "ongeldig";
        return false;
    }

    const jaar = parseInt(waarde.substring(0, 4));
    const maand = parseInt(waarde.substring(5, 7));
    const dag = parseInt(waarde.substring(8, 10));

    if (maand < 1 || maand > 12) {
        fout.textContent = "geen geldige datum";
        input.className = "ongeldig";
        return false;
    }
    if (dag < 1 || dag > new Date(jaar, maand, 0).getDate()) {
        fout.textContent = "geen geldige datum";
        input.className = "ongeldig";
        return false;
    }

    fout.textContent = "";
    input.className = "geldig";
    return true;
};

const valideerEmail = () => {
    const input = document.getElementById("email");
    const fout = document.getElementById("fout-email");
    const waarde = input.value;

    if (waarde.length === 0) {
        fout.textContent = "verplicht veld";
        input.className = "ongeldig";
        return false;
    }

    const atIndex = waarde.indexOf("@");
    if (atIndex < 1) {
        fout.textContent = "geen geldig email adres";
        input.className = "ongeldig";
        return false;
    }

    const lokaal = waarde.substring(0, atIndex);
    const domein = waarde.substring(atIndex + 1);

    if (lokaal.length < 1 || domein.indexOf(".") < 1) {
        fout.textContent = "geen geldig email adres";
        input.className = "ongeldig";
        return false;
    }

    fout.textContent = "";
    input.className = "geldig";
    return true;
};

const valideerKinderen = () => {
    const input = document.getElementById("kinderen");
    const fout = document.getElementById("fout-kinderen");
    const waarde = input.value;

    if (!isGetal(waarde) || waarde.length === 0) {
        fout.textContent = "geen positief getal";
        input.className = "ongeldig";
        return false;
    }
    if (parseInt(waarde) < 0) {
        fout.textContent = "is te negatief";
        input.className = "ongeldig";
        return false;
    }
    if (parseInt(waarde) > 99) {
        fout.textContent = "is te groot";
        input.className = "ongeldig";
        return false;
    }
    fout.textContent = "";
    input.className = "geldig";
    return true;
};

document.getElementById("btnValideer").addEventListener("click", () => {
    const v1 = valideerVoornaam();
    const v2 = valideerFamilienaam();
    const v3 = valideerGeboortedatum();
    const v4 = valideerEmail();
    const v5 = valideerKinderen();

    if (v1 && v2 && v3 && v4 && v5) {
        alert("Formulier is geldig!");
    }
});