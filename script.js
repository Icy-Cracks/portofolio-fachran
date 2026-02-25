function kirimPesan(event) {
    event.preventDefault();
    alert("Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.");
}

/* Scroll Reveal Animation */
function revealOnScroll() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(function(element) {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;
        let revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);