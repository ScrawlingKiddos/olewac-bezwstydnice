function losujNumer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function inbaStart() {
    kwadrat.style.animation = "rotacja 2s linear infinite";

    kwadrat.style.backgroundImage = "url('/szczyny/rzultamorda.jpg')";
    kwadrat.style.backgroundSize = "100%";

    wiadomosc.innerText = "Jan Paweł II Kochał małe dzieci!!😇😇";
    sekret.style.display = "none";

    isInba = true;
    buffer = "";
    
    inba.loop = true;
    inba.play();

    setInterval(function () {
        document.body.style.backgroundColor = `rgb(${losujNumer(0, 255)}, ${losujNumer(0, 255)}, ${losujNumer(0, 255)})`;
    }, 100);
}

const kwadrat = document.getElementById("kwadrat-3d");
const pasek = document.getElementById("smieszny-pasek");
const wiadomosc = document.getElementById("wazna-wiadomosc");
const sekret = document.getElementById("sekret");

const inba = new Audio("/szczyny/inba.mp3");

let buffer = "";
let isInba = false;

kwadrat.addEventListener("click", function () {
    const kurwas = [
        "https://www.stomilolsztyn.com/",
        "https://cracovia.pl/",
        "https://www.gov.pl",
        "https://www.arka.gdynia.pl/",
        "https://www.lechpoznan.pl/",
        "https://lewica.org.pl/",
        "https://pis.org.pl/",
    ];
    const chosenKurwa = kurwas[losujNumer(0, kurwas.length - 1)];

    pasek.innerText = `Trwa przekierowywanie do ${chosenKurwa}`;
    setTimeout(losujNumer(7000, 12000)); // hyhy fake loading :trolaż:

    window.location.href = chosenKurwa;
});

window.addEventListener("keydown", function (event) {
    if (event.key.length !== 1 && event.key !== "Backspace") {
        return;
    }

    if (!isInba) {
        buffer += event.key.toLowerCase();
    }

    if (buffer.length === 100) {
        buffer = "";
    }

    if (buffer.endsWith("inba")) {
        inbaStart();
    }
});
