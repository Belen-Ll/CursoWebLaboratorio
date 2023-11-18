// Archivo JavaScript para funcionalidades
document.addEventListener("DOMContentLoaded",
function() {
    var contactLink = document.getElementById("contact-link");
    var contactForm = document.getElementById("contact-form");

    contactLink.addEventListener("click", function() {
        contactForm.style.display = "block";
    });
});