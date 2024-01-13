var cars = []

window.onload = () => {
    const table = document.querySelector('table')
    generateCars()
    cars.forEach((auto, index) => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = index + 1
        tr.appendChild(td);
        Object.values(auto).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    })
}

function generateCars() {
    for (let i = 0; i < 50; i++) {
        let auto = {
            rok: getRandomInt(1990, 2023),
            przebieg: getRandomInt(0, 400000),
            cena_wyjsciowa: getRandomInt(1000, 100000),
            cena_koncowa: getRandomInt(1000, 100000)
        }
        cars.push(auto)
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}