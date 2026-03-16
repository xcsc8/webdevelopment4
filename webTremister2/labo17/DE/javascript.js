const vervangDe = (tekst) => {
    let result = "";
    let i = 0;

    while (i < tekst.length) {
        const matchDe = (tekst[i] === 'd' || tekst[i] === 'D') && tekst[i + 1] === 'e';
        const voor = i === 0 || tekst[i - 1] === ' ';
        const na = (i + 2 >= tekst.length) || tekst[i + 2] === ' ';

        if (matchDe && voor && na) {
            result += 'het';
            i += 2;
        } else {
            result += tekst[i];
            i++;
        }
    }

    return result;
};
document.getElementById("btnVervang").addEventListener("click", () => {
    const invoer = document.getElementById("invoer").value;
    document.getElementById("uitvoer").textContent = vervangDe(invoer);
});