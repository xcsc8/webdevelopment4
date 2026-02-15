const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", berekenSubstring);
}
const berekenSubstring = () => {
    let txtLinks = document.getElementById("txtLinks");
    let txtBegin = document.getElementById("txtBegin");
    let txtEinde = document.getElementById("txtEinde");
    let txtOutput = document.getElementById("txtOutput");
    let volledigeTekst = txtLinks.value;
    let beginIndex = txtBegin.value;
    let eindeIndex = txtEinde.value;
    let resultaat = volledigeTekst.substring(beginIndex, eindeIndex);
    txtOutput.innerHTML = resultaat;
}
window.addEventListener("load", setup);