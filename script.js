function losujNumer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function inbaStart() {
    kwadrat.style.animation = "rotacja 2s linear infinite";

    kwadrat.style.backgroundImage = "url('/szczyny/rzultamorda.jpg')";
    kwadrat.style.backgroundSize = "100%";

    inba.loop = true;
    
    inba.play();

    setInterval(function () {
        document.body.style.backgroundColor = `rgb(${losujNumer(0, 255)}, ${losujNumer(0, 255)}, ${losujNumer(0, 255)})`;
    }, 100);
}

const kwadrat = document.getElementById("kwadrat-3d");
const inba = new Audio("/szczyny/inba.mp3");

let buffer = "";

kwadrat.addEventListener("click", function () {
    const urls = [
        "https://www.stomilolsztyn.com/",
        "https://cracovia.pl/",
        "https://www.gov.pl",
        "https://www.arka.gdynia.pl/",
        "https://www.lechpoznan.pl/",
        "https://lewica.org.pl/",
        "https://pis.org.pl/",
    ];
    window.location.href = urls[losujNumer(0, urls.length - 1)];
});

window.addEventListener("keydown", function (event) {
    if (event.key.length !== 1 && event.key !== "Backspace") {
        return;
    }

    if (event.key === "Backspace") {
        buffer = "";
    } else {
        buffer += event.key;
    }

    if (buffer === "inba") {
        inbaStart();
    }
});