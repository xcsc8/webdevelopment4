const setup = () => {
    let leeftijd = 34;
    console.log("Type of leeftijd: " + typeof leeftijd);
    let intrest = 0.12;
    console.log("Type of intrest: " + typeof intrest);
    let isGevaarlijk = true;
    console.log("Type of isGevaarlijk: " + typeof isGevaarlijk);
    let vandaag = new Date();
    console.log("Type of vandaag: " + typeof vandaag);
}
window.addEventListener("load", setup);