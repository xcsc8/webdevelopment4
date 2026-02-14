const familieLeden = ['ilse', 'maddox', 'opa', 'oma', 'meas'];
console.log(familieLeden.length);
console.log(familieLeden[0]);
console.log(familieLeden[2]);
console.log(familieLeden[4]);

function voegNaamToe() {
    familieLeden.push(prompt());
}

console.log(familieLeden.toString());