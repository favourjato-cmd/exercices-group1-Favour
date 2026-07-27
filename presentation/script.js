// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Live Coverage button message
const coverageBtn = document.querySelector(".btn");

if (coverageBtn) {
    coverageBtn.addEventListener("click", function(e) {
        e.preventDefault();

        alert("NASA Live Coverage will begin soon. Stay tuned for mission updates!");
    });
}


// Sign up button
const signupBtn = document.querySelector(".signup");

if (signupBtn) {
    signupBtn.addEventListener("click", function(e) {
        e.preventDefault();

        let email = prompt("Enter your email address to receive NASA updates:");

        if (email) {
            alert("Thank you for signing up for NASA updates!");
        }
    });
}


// Mission cards hover effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});


// Reveal sections when scrolling
const sections = document.querySelectorAll(
    ".space-section, .newsletter, .image-day, .missions"
);

const reveal = () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};


// Initial hidden animation
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s ease";
});


window.addEventListener("scroll", reveal);

reveal();


// Current year in footer
const year = new Date().getFullYear();

const footerDates = document.querySelectorAll("pre");

if (footerDates.length > 0) {
    footerDates[0].innerHTML =
        "Page Last Updated: " + year;
}