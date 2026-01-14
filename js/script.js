
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    // Form sayfada yoksa JS patlamasın
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Lütfen zorunlu alanları doldurunuz.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Geçerli bir e-posta adresi giriniz.");
            return;
        }

        alert("Mesajınız yetkililerimize ulaşmıştır. Teşekkür ederiz!");
        form.reset();
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
