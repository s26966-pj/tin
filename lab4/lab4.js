window.onload = fun()

function fun() {

}

function z1(a, b, c) {
    if (a * a + b * b === c * c || c * c + b * b === a * a || a * a + c * c === b * b) {
        console.log("To trójka pitagorejska")
    } else {
        console.log("To nie jest trójka pitagorejska")
    }
}

function z2(a, b, c) {
    for (; a <= b; a++) {
        if (a % c == 0) console.log(a + " ")
    }
}

function z3(a) {
    for (let i = 1; i <= a; i++) {
        row = "";
        for (let j = 1; j <= a; j++) {
            row += i*j + " "
        }
        console.log(row)
    }
}