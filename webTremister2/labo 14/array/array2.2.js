const familieLeden = ['ilse', 'maddox', 'opa', 'oma', 'meas'];

console.log(familieLeden.length);
console.log(familieLeden[0]);
console.log(familieLeden[2]);
console.log(familieLeden[4]);

function voegNaamToe(lijst) {
    const nieuweNaam = prompt("Geef een extra naam op:");
    lijst.push(nieuweNaam);
}

voegNaamToe(familieLeden);

console.log(familieLeden);
console.log(familieLeden.toString());