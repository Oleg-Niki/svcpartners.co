// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form submission handling
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        alert(`Thank you, ${name}! We will get back to you at ${email}.`);
        form.reset();
    });
});
