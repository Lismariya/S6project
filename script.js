// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Display an alert when the "Learn More" button is clicked
document.querySelectorAll('.service-item button').forEach(button => {
    button.addEventListener('click', () => {
        alert('More details about this service will be available soon!');
    });
});

// Animate services section on scroll
window.addEventListener('scroll', function () {
    const services = document.querySelectorAll('.service-item');
    const triggerBottom = window.innerHeight / 5 * 4;

    services.forEach(service => {
        const serviceTop = service.getBoundingClientRect().top;

        if (serviceTop < triggerBottom) {
            service.classList.add('show');
        } else {
            service.classList.remove('show');
        }
    });
});

// Scroll-to-Top Button functionality
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Sticky header functionality on scroll
let lastScrollTop = 0; // Track the last scroll position

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down: Hide the header
        document.querySelector('header').classList.add('sticky-header');
    } else {
        // Scroll up: Show the header
        document.querySelector('header').classList.remove('sticky-header');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

// Fade-in effect for sections on page load
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('visible');
    });
});