// Globale variabelen gebundeld in één object
let state = {
    IMAGE_COUNT: 5,               // aantal figuren (0.png t/m 4.png)
    IMAGE_SIZE: 48,               // grootte van de figuur in pixels
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",    // extensie van de figuren
    MOVE_DELAY: 3000,             // ms voordat een nieuw object verschijnt
    BOMB_INDEX: 0,               // index van de bom (0.png)
    score: 0,
    timeoutId: null,
    isRunning: false
};

// Willekeurig geheel getal in [min, max[
const randomInt = (min, max) => Math.floor(min + Math.random() * (max - min));

// Verplaats het target naar een willekeurige positie
const moveToRandomPosition = () => {
    const playField = document.getElementById("playField");
    const target = document.getElementById("target");
    const maxLeft = playField.clientWidth - state.IMAGE_SIZE;
    const maxTop = playField.clientHeight - state.IMAGE_SIZE;
    target.style.left = randomInt(0, maxLeft) + "px";
    target.style.top = randomInt(0, maxTop) + "px";
};

// Kies een willekeurige afbeelding en sla op of het een bom is
const setRandomImage = () => {
    const target = document.getElementById("target");
    const index = randomInt(0, state.IMAGE_COUNT);
    target.src = state.IMAGE_PATH_PREFIX + index + state.IMAGE_PATH_SUFFIX;
    target.dataset.isBomb = (index === state.BOMB_INDEX) ? "true" : "false";
};

// Toon een nieuw object, plan daarna het volgende
const toonVolgendObject = () => {
    if (!state.isRunning) return;
    setRandomImage();
    moveToRandomPosition();
    document.getElementById("target").style.display = "block";

    // Na MOVE_DELAY: verberg en plan weer een nieuw object
    state.timeoutId = setTimeout(() => {
        document.getElementById("target").style.display = "none";
        state.timeoutId = setTimeout(toonVolgendObject, 200); // korte pauze
    }, state.MOVE_DELAY);
};

// Klik op het target
const onTargetClick = (event) => {
    event.stopPropagation();
    if (!state.isRunning) return;

    const target = document.getElementById("target");

    if (target.dataset.isBomb === "true") {
        // Bom → game over
        state.isRunning = false;
        clearTimeout(state.timeoutId);
        target.style.display = "none";
        document.getElementById("finalScore").textContent = state.score;
        document.getElementById("gameOver").style.display = "flex";
    } else {
        // Goed object → punt, direct volgend object
        state.score++;
        document.getElementById("scoreDisplay").textContent = state.score;
        clearTimeout(state.timeoutId);
        document.getElementById("target").style.display = "none";
        state.timeoutId = setTimeout(toonVolgendObject, 300);
    }
};

// Spel starten / herstarten
const startGame = () => {
    clearTimeout(state.timeoutId);
    state.score = 0;
    state.isRunning = true;
    document.getElementById("scoreDisplay").textContent = 0;
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("target").style.display = "none";
    state.timeoutId = setTimeout(toonVolgendObject, 500);
};

const setup = () => {
    document.getElementById("target").addEventListener("click", onTargetClick);
    document.getElementById("startBtn").addEventListener("click", startGame);
    document.getElementById("restartBtn").addEventListener("click", startGame);
};

window.addEventListener("load", setup);
