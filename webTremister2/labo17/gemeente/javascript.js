const gemeenten = [];
let invoer;

while (true) {
    invoer = prompt("Geef een gemeente in");
    if (invoer === null || invoer === "stop") break;
    gemeenten.push(invoer);
}

gemeenten.sort();

const select = document.createElement("select");
select.size = gemeenten.length;

for (let i = 0; i < gemeenten.length; i++) {
    const option = document.createElement("option");
    option.text = gemeenten[i];
    select.appendChild(option);
}

document.body.appendChild(select);