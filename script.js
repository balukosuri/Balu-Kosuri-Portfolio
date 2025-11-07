// Custom Pen Cursor
const cursor = document.querySelector('.custom-cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor animation
function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;

    cursorX += dx * 0.1;
    cursorY += dy * 0.1;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effects for interactive elements
document.querySelectorAll('a, button, .nav-link, .tool-tag, .portfolio-list a').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });

    elem.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 248, 243, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(45, 24, 16, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 248, 243, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(45, 24, 16, 0.1)';
    }

    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// Parallax Scrolling for Floating Elements
const floatingTypewriters = document.querySelectorAll('.typewriter');
const floatingShapes = document.querySelectorAll('.floating-shape');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    floatingTypewriters.forEach((typewriter, index) => {
        const speed = 0.5 + (index * 0.2);
        typewriter.style.transform = `translateY(${scrolled * speed}px) rotate(${15 + scrolled * 0.02}deg)`;
    });

    floatingShapes.forEach((shape, index) => {
        const speed = 0.3 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * -speed}px)`;
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');

            // Animate skill cards with stagger
            if (entry.target.classList.contains('skill-card')) {
                const cards = entry.target.parentElement.querySelectorAll('.skill-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.animation = 'slideInUp 0.6s ease forwards';
                    }, index * 100);
                });
            }

            // Animate portfolio cards
            if (entry.target.classList.contains('portfolio-card')) {
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.skill-card, .portfolio-card, .approach-card, .testimonial-card, .about-content').forEach(el => {
    observer.observe(el);
});

// 3D Tilt Effect for Cards
class TiltCard {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        this.element.addEventListener('mouseenter', () => this.handleMouseEnter());
        this.element.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.element.addEventListener('mouseleave', () => this.handleMouseLeave());
    }

    handleMouseEnter() {
        this.element.style.transition = 'transform 0.1s';
    }

    handleMouseMove(e) {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        this.element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }

    handleMouseLeave() {
        this.element.style.transition = 'transform 0.5s';
        this.element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
}

// Apply 3D tilt to cards
document.querySelectorAll('.skill-card, .portfolio-card, .approach-card').forEach(card => {
    new TiltCard(card);
});

// Typewriter Effect for Hero Subtitle
const typewriterText = document.querySelector('.typing-text');
const texts = ['Technical Writer', 'Content Strategist', 'API Documentation Expert', 'User Experience Advocate'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        typewriterText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 500);
    } else {
        setTimeout(typeWriter, isDeleting ? 50 : 100);
    }
}

// Start typewriter effect
setTimeout(typeWriter, 1500);

// Floating Animation for Hero Decorations
const heroDecorations = document.querySelectorAll('.floating-shape');
heroDecorations.forEach((shape, index) => {
    shape.style.animationDelay = `${index * 2}s`;
});

// Dynamic Year in Footer
const footer = document.querySelector('.footer p');
if (footer) {
    const year = new Date().getFullYear();
    footer.textContent = `© ${year} Balasubramanyam Kosuri. All rights reserved.`;
}

// Add Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Scroll Progress Indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #FF6B35, #FFD23F);
    z-index: 10001;
    transition: width 0.2s;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent-poppy);
    }
    .nav-link.active::after {
        width: 100%;
    }

    body.loaded * {
        animation-play-state: running !important;
    }

    .fade-in {
        animation: fadeIn 0.8s ease forwards;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Smooth Page Load Animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hero-title span, .hero-subtitle, .nav-link');
    elements.forEach((el, index) => {
        el.style.animation = `fadeIn 0.6s ease ${index * 0.1}s forwards`;
        el.style.opacity = '0';
    });
});

// Interactive Hover Sound Effect (Optional - requires audio files)
const hoverSound = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=');
hoverSound.volume = 0.2;

document.querySelectorAll('button, a, .tool-tag').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        // Uncomment to enable sound
        // hoverSound.play().catch(() => {});
    });
});

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
const debouncedScroll = debounce(() => {
    // Scroll-based animations
}, 10);

window.addEventListener('scroll', debouncedScroll);

console.log('Portfolio initialized successfully! 🎨');
