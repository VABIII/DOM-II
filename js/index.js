const header_nav = document.querySelector("header nav");
const navs = document.querySelectorAll("a");
const doc = document.querySelector("body");
const header = document.querySelector("header");
const intro = document.querySelector(".intro");
const lets_go = document.querySelectorAll(".content-section .text-content:nth-child(1) h2");
const adv_awaits = document.querySelectorAll(".content-section .text-content:nth-child(2) h2");
const footer = document.querySelector("footer p")
const img = document.querySelector(".content-destination img");


img.addEventListener("dblclick", () => {
    img.style.transform = "scale(1.5)"
    setTimeout(() => {img.style.transform = "scale(1)"}, 5000);
})

intro.addEventListener("pointerenter", () => {
    intro.style.color = "blue"
})

intro.addEventListener("pointerleave", () => {
    intro.style.color = "white";
    intro.style.transitionDuration = '4s';
})

intro.addEventListener("transitionstart", () => {
    navs.forEach(nav => {
        nav.style.color = "purple"
    })
})

intro.addEventListener('transitionend', () => {
    footer.style.color = "white"
    footer.style.transitionDuration= "5s";
    footer.style.backgroundColor= "grey";
})



lets_go[0].addEventListener("click", () => {
    lets_go[0].textContent = adv_awaits[0].innerHTML

})


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

Array.from(navs).forEach(nav => {
    nav.addEventListener('click', evt => {
        console.log(evt);
        evt.preventDefault();
    })
})

img.addEventListener("click", () => {
    console.log("Clicked")
})

doc.addEventListener("click", (evt) => {
    console.log('stopped');
    evt.stopPropagation();
})













































