document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
