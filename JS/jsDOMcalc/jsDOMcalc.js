function calc() {
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);

    let operation = document.getElementById('operation').value;
    let result = document.getElementById('result');

    if (isNaN(n1) || isNaN(n2)) {
        alert('Niepoprawne dane!')
    }
    else {
        switch (operation) {
            case 'add':
                result.textContent = n1 + n2;
                break;
            case 'subtract':
                result.textContent = n1 - n2;
                break;
            case 'multiply':
                result.textContent = n1 * n2;
                break;
            case 'divide':
                if (n2 === 0) {
                    alert('NIE DZIEL PRZEZ ZERO!')
                } else {
                    result.textContent = n1 / n2;
                }
                break;
        }
    }

}