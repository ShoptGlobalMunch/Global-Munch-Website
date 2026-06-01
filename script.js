// Nav: add shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
const spans     = navToggle.querySelectorAll('span');

function openMenu() {
    navLinks.classList.add('open');
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
}

function closeMenu() {
    navLinks.classList.remove('open');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
}

navToggle.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) closeMenu();
});

// Product card hover video
document.querySelectorAll('.product-card.has-video').forEach(card => {
    const video = card.querySelector('.product-video');
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
});

// Product filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.product-card').forEach(card => {
            card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
        });
    });
});
