const navbar = document.querySelector(".navbar")
const lgnbtn = document.querySelector(".lgnbtn")
const regbtn = document.querySelector(".regbtn")
const ham = document.querySelector(".ham")

function toggleMenu() {
    if (ham.classList.contains("active")) {
        ham.classList.remove("active")
        navbar.style.display = "none"
        lgnbtn.style.display = "none"
        regbtn.style.display = "none"
    } else {
        ham.classList.add("active")
        navbar.style.display = "block"
        lgnbtn.style.display = "block"
        regbtn.style.display = "block"
    }
}

ham.addEventListener("click", toggleMenu)