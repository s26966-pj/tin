function pop() {
    const popup = document.querySelector('.form-popup')
    console.log(popup)
    popup.remove()
}

let currentPageIndex = 0

window.onload = () => {
    showPage(currentPageIndex)
}

function showPage(page) {

    let pages = document.getElementsByClassName('page')
    pages[page].style.display = 'block'

    let nextButton = document.getElementById('next')
    let previousButton = document.getElementById('previous')
    let submitButton = document.getElementById('submit')

    if (currentPageIndex == 0) {
        previousButton.style.display = 'none'
    } else if (currentPageIndex == 3) {
        nextButton.style.display = 'none'
        previousButton.style.display = 'block'
        submitButton.style.display = 'block'
    }
    else {
        nextButton.style.display = 'block'
        previousButton.style.display = 'block'
        submitButton.style.display = 'none'
    }
    window.scroll(0, 0)

}

function nextPage() {
    isValid = validate()
    if (currentPageIndex < 3 && isValid) {
        let pages = document.getElementsByClassName('page')
        pages[currentPageIndex].style.display = 'none'

        showPage(++currentPageIndex)

        let steps = document.getElementsByClassName('step')
        steps[currentPageIndex - 1].classList.toggle('previous')
        steps[currentPageIndex].classList.toggle('next')
    }
    if (currentPageIndex == 3) {
        getData()
    }
}

function previousPage() {
    if (currentPageIndex > 0) {
        let pages = document.getElementsByClassName('page')
        pages[currentPageIndex].style.display = 'none'

        showPage(--currentPageIndex)

        let steps = document.getElementsByClassName('step')
        steps[currentPageIndex + 1].classList.toggle('next')
        steps[currentPageIndex].classList.toggle('previous')
    }
}

function validate() {
    let pages = document.getElementsByClassName('page')
    let inputs = pages[currentPageIndex].getElementsByClassName('input')
    let isValid = true
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].classList.add('invalid')
            isValid = false
        }
        else {
            if (inputs[i].classList.contains('invalid')) {
                inputs[i].classList.remove('invalid')
            }
        }
    }
    if (currentPageIndex == 2) {
        if (document.querySelector('input[name="service"]:checked') == null) {
            isValid = false
            let message = document.getElementById('service-invalid-message')
            message.textContent = 'Proszę wybrać usługę.'
            radios = document.getElementsByName('service')
            for (let radio of radios) {
                radio.addEventListener('click', deleteMessage)
            }
        }
    }
    return isValid
}

function deleteMessage() {
    let message = document.getElementById('service-invalid-message')
    message.textContent = ''
}

function getData() {
    let inputs = document.getElementsByClassName('input')
    for (let input of inputs) {
        document.getElementById(input.name).textContent = input.value
    }
    serviceValue = document.querySelector('input[name="service"]:checked').value;
    document.getElementById('service').textContent = serviceValue
}