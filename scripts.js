document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.scroll-animation').forEach(element => {
        observer.observe(element);
    });
});

function orderItem(item) {
    alert(`You have ordered: ${item}`);
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.class

}