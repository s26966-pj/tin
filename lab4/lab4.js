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
            row += i * j + " "
        }
        console.log(row)
    }
}

function z4(length) {
    let a = 0, b = 1;
    for (let i = 0; i <= length; i++) {
        b = a + b;
        a = b - a;
        console.log(a);
    }
}

function z5(size) {
    for (let i = 0; i < size; i++) {
        row = "";
        for (let j = 0; j < size; j++) {
            if (i >= j) {
                row += "*";
            }
        }
        console.log(row);
    }
}

function z6(height) {
    height -= 2;
    row = "";
    for (let j = 0; j < height * 2 + 1; j++) {
        row += "*";
    }
    console.log(row);
    row = "";
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height - i; j++) {
            row += "*";
        }
        for (let j = 0; j < i + i + 1; j++) {
            row += " ";
        }
        for (let j = 0; j < height - i; j++) {
            row += "*";
        }
        console.log(row);
        row = "";
    }
    for (let j = 0; j < height * 2 + 1; j++) {
        row += "*";
    }
    console.log(row);
}

function rectangle(h, w) {
    return h * w;
}

function trapeze(a, b, h) {
    return ((a + b) * h) / 2;
}

function parallelogram(a, h) {
    return a * h;
}

function triangle(a, h) {
    return (a * h) / 2;
}

function z7(shape, parameters) {
    switch (shape) {
        case 'rectangle':
            return rectangle(...parameters);
        case 'trapeze':
            return trapeze(...parameters);
        case 'parallelogram':
            return parallelogram(...parameters);
        case 'triangle':
            return triangle(...parameters);
        default:
            return 'unknown';
    }
}

function z8(shape, parameters) {
    console.log(shape(...parameters))
}

function z9(height) {
    for(let i = 1; i <= height; i++) {
        let number = 1;
        let row = "";
        for(let j = 1; j <= i; j++) {
            row += number + " ";
            number = number * (i - j) / j;
        }
        console.log(row);
    }     
}

function z10(words, string) {

    words.forEach(word => {
        console.log("KKKK")   
        for(let i = 0; i < string.length; i++) {
            console.log("!")
            for(let j = 0; j < word.length; j++) {
                console.log(word[j] + " " + string[i]);
                if(word[j] === string[i]) {
                    if(j === word.length - 1) {
                        console.log("*");
                    }
                    i++;
                } else {
                    while(string[i] != " " || i === string.length-1) {
                        i++
                    }
                }
                console.log(j)
            }
        }
    });
}