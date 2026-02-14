function showEmail() {
    document.getElementById("email").classList.remove("hidden");
}

// Fade-in animation on scroll
const faders = document.querySelectorAll('.fade');

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

function openDemo(url) {
    window.open(url, '_blank');
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:telcontactesi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        "From: " + email + "\n\n" + message
    )}`;

    window.location.href = mailtoLink;

});
