let vandaag = new Date();
let geboortedag = new Date("2005-03-25");
let verschilInMilliseconden = vandaag - geboortedag;
let dagenOpWereldbol = Math.floor(verschilInMilliseconden / (1000 * 60 * 60 * 24));
console.log("Ik ben al " + dagenOpWereldbol + " dagen op de wereldbol!");
