let student1 = {
    voornaam: "Thiemen",
    familienaam: "Degreef",
    geboorteDatum: new Date("2005-03-25"),
    adres: {
        straat: "Kerkstraat 13",
        postcode: "8500",
        gemeente: "Kortrijk"
    }, // [cite: 172-176]
    isIngeschreven: true,
    namenVanExen: ["Sofie", "Berta", "Philip", "Albertoooo"],
    aantalAutos: 2 // [cite: 179]
};
let gegenereerdeJson = JSON.stringify(student1);

console.log("--- OUTPUT PROGRAMMA 1 ---");
console.log("Kopieer de onderstaande regel voor programma 2:");
console.log(gegenereerdeJson);