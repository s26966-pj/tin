window.onload = () => {
    const menu = document.querySelector('.nav')
    const hamburger = document.querySelector('.hamburger')
    const closeIcon = document.querySelector('.close-icon')
    const menuIcon = document.querySelector('.menu-icon')

    function toggle() {
        menu.classList.toggle('show')
        if (menu.classList.contains('show')) {
            closeIcon.style.display = "block";
            menuIcon.style.display = "none";
            
        } else {
            closeIcon.style.display = "none";
            menuIcon.style.display = "block";
        }
    }

    hamburger.addEventListener('click', toggle)
}

