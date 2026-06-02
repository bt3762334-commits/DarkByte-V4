// Loading Screen

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "0.5s";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 1000);

});


// Copy Phone Number

function copyPhone() {

    navigator.clipboard.writeText("01091291823");

    alert("Phone Number Copied Successfully!");

}


// Scroll To Top Button

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    }

    else {

        scrollBtn.style.display = "none";

    }

});


scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// Typing Effect

const typingText = document.getElementById("typing-text");

const texts = [

    "Full Stack Django Developer",

    "Python Developer",

    "Web Developer",

    "Frontend & Backend Developer"

];

let textIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }

    else {

        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {

                textIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();
