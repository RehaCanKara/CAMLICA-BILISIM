document.addEventListener("DOMContentLoaded", function () {

    /* ======================
       CONTACT FORM
    ====================== */
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone")?.value.trim();
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
    }

    /* ======================
       HAMBURGER MENU
    ====================== */
    const hamburger = document.getElementById("hamburger");
    const menuOverlay = document.getElementById("menuOverlay");
    const menuClose = document.getElementById("menuClose");

    if (hamburger && menuOverlay && menuClose) {

        hamburger.addEventListener("click", () => {
            menuOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
        });

        menuClose.addEventListener("click", () => {
            menuOverlay.classList.remove("active");
            document.body.style.overflow = "";
        });

        menuOverlay.addEventListener("click", e => {
            if (e.target === menuOverlay) {
                menuOverlay.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }

    /* ======================
       BİZ KİMİZ SCROLL ANİMASYONU (EK)
    ====================== */
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // sayfa yenilenince kontrol et

});

/* ======================
   EMAIL VALIDATION
====================== */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

