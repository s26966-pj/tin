window.onload = () => {
    headers = document.getElementsByClassName('section-header')
    contents = document.getElementsByClassName('section-content')
    selectedIndex = -1
    for (let i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click', () => {
            if (selectedIndex == -1) {
                selectedIndex = i
            } else {
                if (selectedIndex != i) {
                    contents[selectedIndex].style.display = 'none'
                    selectedIndex = i
                } 
            }
            if (contents[i].style.display == 'block') {
                contents[i].style.display = 'none'
            } else {
                contents[i].style.display = 'block'
            }
        })
    }
}
