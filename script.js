const words = [

"MCA Graduate",

"Python Developer",

"Web Developer",

"AI Enthusiast",

"Aspiring Software Engineer"

];

let i = 0;
let j = 0;
let deleting = false;

const typing = document.getElementById("typing");

function effect() {

    let current = words[i];

    if (!deleting) {

        typing.innerHTML = current.substring(0, j++) + "|";

        if (j > current.length) {

            deleting = true;

            setTimeout(effect, 1200);

            return;

        }

    }

    else {

        typing.innerHTML = current.substring(0, j--) + "|";

        if (j < 0) {

            deleting = false;

            i++;

            if (i >= words.length)

                i = 0;

        }

    }

    setTimeout(effect, deleting ? 50 : 90);

}

effect();

/* ===========================
   Navbar Scroll Effect
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ===========================
   Active Navigation
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/* ===========================
   Scroll Reveal Animation
=========================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>observer.observe(el));

/* ================= BACK TO TOP ================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ==========================
// IMAGE POPUP
// ==========================

const images = document.querySelectorAll(".clickable-image");

const popup = document.getElementById("imagePopup");

const popupImage = document.getElementById("popupImage");

const closePopup = document.querySelector(".close-popup");

images.forEach(image => {

    image.addEventListener("click", () => {

        popup.style.display = "flex";

        popupImage.src = image.src;

    });

});

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});

popup.addEventListener("click", (e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.style.display="none";

    }

});