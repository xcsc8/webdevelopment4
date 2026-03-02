const setup = () => {
    let sliderRood = document.getElementsByClassName("sliderRood");
    let sliderGroen = document.getElementsByClassName("sliderGroen");
    let sliderBlauw = document.getElementsByClassName("sliderBlauw");
    sliderRood[0].addEventListener("change", update);
    sliderRood[0].addEventListener("input", update);

    sliderGroen[0].addEventListener("change", update);
    sliderGroen[0].addEventListener("input", update);

    sliderBlauw[0].addEventListener("change", update);
    sliderBlauw[0].addEventListener("input", update);
}
const update = () => {
    let sliderRood = document.getElementsByClassName("sliderRood");
    let valueRood = sliderRood[0].value;
    console.log("de waarde van de slider voor rood is momenteel : " + valueRood);
    let sliderGroen = document.getElementsByClassName("sliderGroen");
    let valueGroen = sliderGroen[0].value;
    console.log("de waarde van de slider voor groen is momenteel : " + valueGroen);
    let sliderBlauw = document.getElementsByClassName("sliderBlauw");
    let valueBlauw = sliderBlauw[0].value;
    console.log("de waarde van de slider voor blauw is momenteel : " + valueBlauw);
    let colorDemos = document.getElementsByClassName("colorDemo");
    colorDemos[0].style.backgroundColor = `rgb(${valueRood}, ${valueGroen}, ${valueBlauw})`;
    let labelRood = document.getElementsByClassName("waardeRood");
    let labelGroen = document.getElementsByClassName("waardeGroen");
    let labelBlauw = document.getElementsByClassName("waardeBlauw");

    labelRood[0].textContent = valueRood;
    labelGroen[0].textContent = valueGroen;
    labelBlauw[0].textContent = valueBlauw;
}

window.addEventListener("load", setup);