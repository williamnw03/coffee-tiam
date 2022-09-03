const sideBars = document.querySelectorAll("nav.menu ul li a.sideBar")
const titleContent = document.querySelectorAll("h1.title-content")

window.addEventListener("scroll", () => {

    const scrolling = window.scrollY + 100

    const check = element => sideBars.forEach(e => e.className === element.className ? e.style.backgroundColor = "#C27832" : e.style.backgroundColor = "#3A1D09")

    if(scrolling < titleContent[0].offsetTop){
        sideBars[0].style.backgroundColor = "#3A1D09"  
        sideBars[1].style.backgroundColor = "#3A1D09"  
        sideBars[2].style.backgroundColor = "#3A1D09"  
    }

    if(scrolling >= titleContent[2].offsetTop){
        check(sideBars[2])

    } else if(scrolling >= titleContent[1].offsetTop){
        check(sideBars[1])

    } else if(scrolling >= titleContent[0].offsetTop){
        check(sideBars[0])
    }

})

const navToggle = document.querySelector("nav.button-toggle span")
const navbar = document.querySelector("nav.nav")

navToggle.addEventListener("click", e => {
    navbar.classList.toggle("buka")
})