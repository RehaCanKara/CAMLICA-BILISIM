document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun otomatik gönderimini engelle

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Lütfen Tüm Alanları Doldurunuz.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Geçerli Bir E-Posta Adresi Giriniz.');
        return;
    }

    alert('Mesajınız Yetkililerimize Ulaşmıştır. Teşekkür Ederiz!');
    this.reset(); // Formu sıfırla
});

function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
}