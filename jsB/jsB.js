var auto = {
    rok: 2010,
    przebieg: 150000,
    cena_wyjsciowa: 15000,
    cena_koncowa: 15000,

    dodaj: function () {
        this.cena_wyjsciowa += 1000
    },

    przeliczPoRoku: function () {
        let wiek = new Date().getFullYear() - this.rok
        this.cena_koncowa -= wiek * 1000
        console.log(wiek)
    },

    przeliczPoPrzebiegu: function () {
        mnoznik = Math.floor(this.przebieg / 100000)
        this.cena_koncowa -= mnoznik * 10000
        console.log(mnoznik)
    },

    dodajPrzebiegIRok: function (przebieg, rok) {
        this.przebieg = przebieg;
        this.rok = rok;

        this.przeliczPoRoku();
        this.przeliczPoPrzebiegu();
    }
}

var auta = [];

function dodajAuto(auto) {
    if (auto.cena_koncowa > 10000) {
        auta.push(auto);
    }
    else {
        console.log("Nie udalo sie dodac auta, jego cena jest nizsza niz 10000");
    }
}

function dodajRokDoAut() {
    auta.forEach(auto => {
        auto.rok++;
    });
}

class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot
        this.wartosc = wartosc
    }
}

class Student {
    constructor(imie, nazwisko) {
        this.imie = imie
        this.nazwisko = nazwisko
        this._oceny = []
        this.srednia = 0
    }

    hello() {
        console.log("Witaj, " + this.imie + " " + this.nazwisko + " Twoja srednia ocen to: " + this.srednia)
    }

    set oceny(ocena) {
        if (ocena.constructor == Ocena) {
            this._oceny.push(ocena)
            let sumaOcen = 0
            this._oceny.forEach(ocena => {
                sumaOcen += ocena.wartosc
            })
            this.srednia = sumaOcen / this._oceny.length
        }
    }

    get oceny() {
        this._oceny.forEach(ocena => {
            console.log("Przedmiot: " + ocena.przedmiot + " - ocena " + ocena.wartosc)
        })
    }
}

let s = new Student('Jan', 'Kowalski')

let o1 = new Ocena('mpr', 3)
let o2 = new Ocena('rbd', 5)

s.oceny = o1