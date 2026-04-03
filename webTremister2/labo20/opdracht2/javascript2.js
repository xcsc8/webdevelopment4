let gekopieerdeJsonString = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}';
let nieuwStudentObject = JSON.parse(gekopieerdeJsonString);
console.log("\n--- OUTPUT PROGRAMMA 2 ---");
console.log("De voornaam is: " + nieuwStudentObject.voornaam);
console.log("De gemeente is: " + nieuwStudentObject.adres.gemeente);
console.log("Geboortedatum type in origineel (Programma 1): " + typeof student1.geboorteDatum);
console.log("Geboortedatum type in nieuw object (Programma 2): " + typeof nieuwStudentObject.geboorteDatum);