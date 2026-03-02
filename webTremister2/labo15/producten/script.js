const setup = () => {
    let herReken = document.getElementsByClassName("herberekenKnop");
    herReken[0].addEventListener("click", herbereken);
}
const herbereken = () => {
    let prijs = document.getElementsByClassName("Prijs");
    let aantalen = document.getElementsByClassName("aantal");
    let btwpercentage = document.getElementsByClassName("BTW");
    let subTot1Element = document.getElementsByClassName("SubTot1");
    let subTot2Element = document.getElementsByClassName("SubTot2");
    let subTot3Element = document.getElementsByClassName("SubTot3");
    let eindTotElement = document.getElementsByClassName("Eindtotaal");
    let prijsInGetal1 = parseFloat(prijs[0].innerText);
    let prijsInGetal2 = parseFloat(prijs[1].innerText);
    let prijsInGetal3 = parseFloat(prijs[2].innerText);
    let btwInGetal1 = parseFloat(btwpercentage[0].innerText);
    let btwInGetal2 = parseFloat(btwpercentage[1].innerText);
    let btwInGetal3 = parseFloat(btwpercentage[2].innerText);
    let aantalInGetal1 = parseFloat(aantalen[0].value);
    let aantalInGetal2 = parseFloat(aantalen[1].value);
    let aantalInGetal3 = parseFloat(aantalen[2].value);
    let prijsPerMetBTW1 = prijsInGetal1 + (prijsInGetal1 * (btwInGetal1 / 100));
    let totaalPrijs1 = prijsPerMetBTW1 * aantalInGetal1;
    let prijsPerMetBTW2 = prijsInGetal2 + (prijsInGetal2 * (btwInGetal2 / 100));
    let totaalPrijs2 = prijsPerMetBTW2 * aantalInGetal2;
    let prijsPerMetBTW3 = prijsInGetal3 + (prijsInGetal3 * (btwInGetal3 / 100));
    let totaalPrijs3 = prijsPerMetBTW3 * aantalInGetal3;
    subTot1Element[0].innerText = totaalPrijs1.toFixed(2) + " Eur";
    subTot2Element[0].innerText = totaalPrijs2.toFixed(2) + " Eur";
    subTot3Element[0].innerText = totaalPrijs3.toFixed(2) + " Eur";
    eindTotElement[0].innerText = (totaalPrijs1 + totaalPrijs2 + totaalPrijs3).toFixed(2) + 'EUR'
}
window.addEventListener("load", setup);