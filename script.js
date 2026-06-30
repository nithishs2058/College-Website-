// ==========================
// Mobile Menu Toggle
// ==========================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
}

// ==========================
// Dark Mode Toggle
// ==========================

const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 250) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ==========================
// Contact Form Validation
// ==========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}

// ==========================
// Admission Form Validation
// ==========================

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("🎓 Your admission application has been submitted successfully!");

        admissionForm.reset();

    });

}

// ==========================
// Welcome Message
// ==========================

window.addEventListener("load", () => {

    console.log("Welcome to ABC College Website");

});