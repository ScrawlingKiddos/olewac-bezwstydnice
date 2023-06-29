const smiesznaWiadomosc = `
Pierwsze informacje o przypadkach molestowania dzieci przez duchownych, które przebiły się do mediów stały się głośne dopiero w roku 1992 w Irlandii. W proteście przeciwko próbom ukrywania skandalu piosenkarka Sinéad O'Connor podarła zdjęcie Jana Pawła II podczas programu telewizyjnego, do którego została zaproszona.
Kolejne skandale dotyczyły księży sprawujących swoją posługę na terenie kilku innych krajów. W styczniu 2002 roku wybuchł głośny skandal dotyczący pedofilii wśród księży w Stanach Zjednoczonych. Kilka podobnych przypadków ujawniono również na terenie Kanady. Zarzuty miały tak poważny charakter, że o wieloletnie tuszowanie skandali seksualnych oskarżono też pięciu biskupów (Bernarda Law, Brendana Comiskeya, Josepha Symonsa, Anthony'ego O'Connella i Hansa Groëra).
Lawrence Murphy dopuścił się molestowania seksualnego dwustu chłopców ze szkoły dla głuchych w Wisconsin. Krytycy amerykańscy wskazują, że główny ciężar krytyki w sprawie księdza Lawrence'a Murphy'ego spadł na Benedykta XVI. Był on wówczas prefektem Kongregacji Nauki Wiary i działał jako podwładny Jana Pawła II.

W marcu 2002 roku w liście do księży z okazji Świąt Wielkanocnych, Jan Paweł II przedstawił zdecydowaną krytykę kapłanów dopuszczających się przestępstw seksualnych, wyraził ubolewanie dla ofiar oraz obawę o niezasłużone uprzedzenie do całego stanu kapłańskiego:

    [...] jako kapłani jesteśmy osobiście głęboko wstrząśnięci grzechami niektórych naszych braci [...]. Budzi to zgorszenie, a jako jego skutek pada głęboki cień podejrzenia na wszystkich innych zasłużonych kapłanów, którzy pełnią swoją posługę z uczciwością i z konsekwencją, a nierzadko z heroiczną miłością. Podczas gdy Kościół wyraża swą troskę o ofiary i czyni wysiłki, aby zareagować zgodnie z prawdą i sprawiedliwością na każdą bolesną sytuację [...]

W kwietniu 2002 roku papież zwołał spotkanie kardynałów w sprawie oskarżeń o molestowanie. Na spotkaniu z młodzieżą w Toronto Jan Paweł II wyraził swój żal i wstyd wynikający z ujawnionych zdarzeń. Podkreślił też dobre intencje duchownych oraz zaapelował o wsparcie ich posługi:

    Krzywda wyrządzona przez niektórych księży najmłodszym i najsłabszym wypełnia nas wszystkich głębokim uczuciem żalu i wstydu.
    Ale pomyślcie o większości duchownych, którzy pragną jedynie służyć oraz czynić dobro. Bądźcie z nimi blisko i wspierajcie ich.

Przedstawiciele ofiar molestowania, jak Gary Bergeron, stwierdzili, że konieczne jest przeproszenie przez Jana Pawła II za błędy Kościoła ujawnione podczas wyjaśniania skandali seksualnych. 
`

function losujNumer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ustawLosowyKolor() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function inbaStart() {
    kwadrat.style.animation = "rotacja 2s linear infinite";

    kwadrat.style.backgroundImage = "url(szczyny/rzultamorda.jpg)";
    kwadrat.style.backgroundSize = "100%";

    wiadomosc.innerText = smiesznaWiadomosc;
    sekret.style.display = "none";

    inbowanie = true;
    bufor = "";
    
    inba.loop = true;
    inba.play();

    setInterval(ustawLosowyKolor, 100);
}

function beutoStart() {
    document.body.style.backgroundImage = "url(szczyny/beuto.png)";

    wiadomosc.innerText = "beuto";
    sekret.style.display = "none";

    inbowanie = true;
    bufor = "";

    duwet.loop = true;
    duwet.play();
}

const kwadrat = document.getElementById("kwadrat-3d");
const pasek = document.getElementById("smieszny-pasek");
const wiadomosc = document.getElementById("wazna-wiadomosc");
const sekret = document.getElementById("sekret");

const inba = new Audio("/szczyny/inba.mp3");
const duwet = new Audio("/szczyny/duwet.mp3");

let bufor = "";
let inbowanie = false;

kwadrat.addEventListener("click", function () {
    const kurwy = [
        // pilka nozna (nic o tym nie wiem)
        "https://www.stomilolsztyn.com/",
        "https://www.arka.gdynia.pl/",
        "https://www.lechpoznan.pl/",
        "https://cracovia.pl/",

        // rzad (jebac rzad polski)
        "https://www.gov.pl",
        
        // partie polityczne (jebac polityke polska)
        "https://lewica.org.pl/",
        "https://pis.org.pl/",
        "https://konfederacja.pl/",

        // tvp (telewizja polska beka w chuj)
        "https://www.tvp.pl/",
        "https://www.tvp.info/",
    ];
    const wylosowanaKurwa = kurwy[losujNumer(0, kurwy.length - 1)];

    pasek.innerText = `milego ogladania kurwy na stornie ${wylosowanaKurwa} xdd`;
    setTimeout(losujNumer(7000, 12000)); // hyhy fake loading :trolaż:

    window.location.href = wylosowanaKurwa;
});

window.addEventListener("keydown", function (event) {
    if (event.key.length !== 1) {
        return;
    }

    if (!inbowanie) {
        bufor += event.key.toLowerCase();
    }

    if (bufor.endsWith("inba")) {
        inbaStart();
    } else if (bufor.endsWith("beuto")) {
        beutoStart();
    }
});
