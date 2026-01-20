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

const statBoxes = document.querySelectorAll(".stat-box");

const animateStats = () => {
  statBoxes.forEach(box => {
    const number = box.querySelector("h3");
    const target = +number.getAttribute("data-target");

    if (box.classList.contains("show")) return;

    box.classList.add("show");

    let count = 0;
    const speed = target / 60;

    const updateCount = () => {
      count += speed;
      if (count < target) {
        number.innerText = Math.floor(count);
        requestAnimationFrame(updateCount);
      } else {
        number.innerText = target + (number.innerText.includes("%") ? "%" : "");
      }
    };

    updateCount();
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateStats();
    }
  });
}, { threshold: 0.4 });

statBoxes.forEach(box => observer.observe(box));
