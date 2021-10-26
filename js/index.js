const header_nav = document.querySelector("header nav");
const doc = document.querySelector("body");
const header = document.querySelector("header");
const intro = document.querySelector(".intro");
const text = document.querySelectorAll(".content-section .text-content:nth-child(1)");
console.log(text)

header_nav.addEventListener('mouseenter', () => {
    navs.forEach(nav => {
        nav.style.color = "white";
    })
})

header_nav.addEventListener('mouseleave', () => {
    navs.forEach(nav => {
        nav.style.color = "black";
    })
})


doc.addEventListener("wheel", () => {
    doc.style.backgroundColor = "grey";
    doc.style.color = "white";
})

header.addEventListener('mouseover', () => {
    header.style.backgroundColor = "grey";
})


const navs = document.querySelectorAll("a");

Array.from(navs).forEach(nav => {
    nav.addEventListener('click', evt => {
        console.log(evt);
        evt.preventDefault();
    })
})















































