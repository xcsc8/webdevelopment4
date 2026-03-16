const word = "trigramWerkpaard";

document.getElementById("word-display").textContent = word;

const list = document.getElementById("trigram-list");

for (let i = 0; i <= word.length - 3; i++) {
    const trigram = word.substring(i, i + 3);

    const card = document.createElement("div");
    card.classList.add("trigram-card");
    card.textContent = trigram;
    card.style.animationDelay = `${i * 0.1}s`;

    list.appendChild(card);

    console.log(trigram);
}