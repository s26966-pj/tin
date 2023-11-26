var auto = { 
    rok,
    przebieg,
    cena_wyjsciowa,
    cena_koncowa,

    dodaj() {
        this.cena_wyjsciowa += 1000
    },

    przeliczPoRoku() {
        let wiek = new Date().getFullYear - this.rok
        this.cena_koncowa -= this.rok*1000
    },

    przeliczPoPrzebiegu() {
        this.cena_koncowa -= this.przebieg/100000*10000 
    }
}


