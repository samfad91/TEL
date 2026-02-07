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
