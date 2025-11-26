// ============================
//   STRANGER THINGS PORTFOLIO
//   INTERACTIVE EFFECTS
// ============================

// Custom Flashlight Cursor
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
document.querySelectorAll('a, button, .nav-link, .tool-tag, .portfolio-list a, .format-btn').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.3)';
    });

    elem.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// ============================
// BACKGROUND MUSIC PLAYER
// ============================
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const audioVisualizer = document.querySelector('.audio-visualizer');
let isPlaying = false;

musicToggle?.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        audioVisualizer.style.opacity = '0.3';
    } else {
        bgMusic.play();
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        audioVisualizer.style.opacity = '1';
    }
    isPlaying = !isPlaying;
});

// ============================
// CHRISTMAS LIGHTS ALPHABET WALL
// ============================
function createAlphabetWall() {
    const alphabetGrid = document.getElementById('alphabet-grid');
    if (!alphabetGrid) return;

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    alphabet.split('').forEach((letter, index) => {
        const lightDiv = document.createElement('div');
        lightDiv.className = 'light-letter';
        lightDiv.textContent = letter;
        lightDiv.style.animationDelay = `${index * 0.1}s`;
        alphabetGrid.appendChild(lightDiv);
    });
}

// Create alphabet wall on load
createAlphabetWall();

// Animate specific letters for messages
function blinkLetters(message, duration = 3000) {
    const letters = document.querySelectorAll('.light-letter');

    // Reset all letters
    letters.forEach(letter => {
        letter.style.opacity = '0.3';
    });

    // Blink message letters
    message.split('').forEach((char, index) => {
        const letter = Array.from(letters).find(l => l.textContent === char.toUpperCase());
        if (letter) {
            setTimeout(() => {
                letter.style.opacity = '1';
                letter.style.animation = 'light-flicker 0.5s infinite';
            }, index * 300);
        }
    });

    // Reset after duration
    setTimeout(() => {
        letters.forEach(letter => {
            letter.style.opacity = '0.3';
            letter.style.animation = 'light-flicker 3s infinite';
        });
    }, duration);
}

// Trigger messages periodically
setInterval(() => {
    const messages = ['RUN', 'HELP', 'BALU', 'CODE'];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    blinkLetters(randomMessage, 2000);
}, 15000);

// ============================
// PARTICLE EFFECTS
// ============================
function createParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

createParticles();

// ============================
// MOBILE MENU TOGGLE
// ============================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// ============================
// SMOOTH SCROLLING
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// ============================
// NAVBAR EFFECTS ON SCROLL
// ============================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Enhanced glow on scroll
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 0 30px var(--st-neon-red), 0 0 60px var(--st-neon-red)';
    } else {
        navbar.style.boxShadow = '0 0 20px var(--st-neon-red)';
    }

    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// ============================
// PARALLAX EFFECTS
// ============================
const demogorgons = document.querySelectorAll('.demogorgon');
const spores = document.querySelectorAll('.spore');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Demogorgon parallax
    demogorgons.forEach((demo, index) => {
        const speed = 0.3 + (index * 0.1);
        demo.style.transform = `translateY(${scrolled * speed}px)`;
    });

    // Spores parallax
    spores.forEach((spore, index) => {
        const speed = 0.2 + (index * 0.05);
        spore.style.transform = `translateY(${-scrolled * speed}px)`;
    });
});

// ============================
// INTERSECTION OBSERVER
// ============================
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
                        card.style.animation = 'slideInGlow 0.6s ease forwards';
                    }, index * 100);
                });
            }

            // Animate portfolio cards
            if (entry.target.classList.contains('portfolio-card')) {
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            }

            // Animate approach cards
            if (entry.target.classList.contains('approach-card')) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.skill-card, .portfolio-card, .approach-card, .testimonial-card, .about-content, .article-card').forEach(el => {
    observer.observe(el);
});

// ============================
// 3D TILT EFFECT FOR CARDS
// ============================
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
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    }

    handleMouseLeave() {
        this.element.style.transition = 'transform 0.5s';
        this.element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    }
}

// Apply 3D tilt to cards
document.querySelectorAll('.skill-card, .portfolio-card, .approach-card, .article-card').forEach(card => {
    new TiltCard(card);
});

// ============================
// TYPEWRITER EFFECT
// ============================
const typewriterText = document.querySelector('.typing-text');
const texts = [
    'From the Upside Down of Documentation',
    'Technical Writer',
    'API Documentation Expert',
    'Content Strategist',
    'Making Complex Simple'
];
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

// ============================
// WALL MESSAGE ANIMATION
// ============================
function animateWallMessage() {
    const messages = [
        ['R', 'U', 'N'],
        ['H', 'E', 'L', 'P'],
        ['B', 'A', 'L', 'U'],
        ['C', 'O', 'D', 'E']
    ];

    let currentMessageIndex = 0;

    setInterval(() => {
        const wallMessage = document.getElementById('wall-message');
        if (!wallMessage) return;

        const message = messages[currentMessageIndex];
        wallMessage.innerHTML = '';

        message.forEach((letter, index) => {
            const span = document.createElement('span');
            span.className = 'blinking-letter';
            span.textContent = letter;
            span.style.animationDelay = `${index * 0.3}s`;
            wallMessage.appendChild(span);
        });

        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    }, 5000);
}

animateWallMessage();

// ============================
// DYNAMIC YEAR IN FOOTER
// ============================
const footer = document.querySelector('.footer p');
if (footer) {
    const year = new Date().getFullYear();
    footer.textContent = `© ${year} Balasubramanyam Kosuri. All rights reserved.`;
}

// ============================
// PAGE LOAD ANIMATION
// ============================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================
// SCROLL PROGRESS INDICATOR
// ============================
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// ============================
// ACTIVE NAVIGATION LINK
// ============================
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

// ============================
// GLITCH EFFECT ON SCROLL
// ============================
let glitchTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(glitchTimeout);

    glitchTimeout = setTimeout(() => {
        const glitchElements = document.querySelectorAll('.glitch');
        glitchElements.forEach(elem => {
            elem.style.animation = 'none';
            setTimeout(() => {
                elem.style.animation = 'glitch 5s infinite';
            }, 10);
        });
    }, 100);
});

// ============================
// TESTIMONIAL FORMAT TOGGLE
// ============================
class TestimonialFormatter {
    constructor(card) {
        this.card = card;
        this.name = card.dataset.name;
        this.title = card.dataset.title;
        this.text = card.dataset.text;
        this.buttons = card.querySelectorAll('.format-btn');
        this.views = {
            normal: card.querySelector('.normal-view'),
            markdown: card.querySelector('.markdown-view'),
            xml: card.querySelector('.xml-view')
        };

        this.init();
    }

    init() {
        this.populateMarkdownView();
        this.populateXMLView();

        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => this.switchFormat(btn.dataset.format));
        });
    }

    switchFormat(format) {
        this.buttons.forEach(btn => btn.classList.remove('active'));
        this.card.querySelector(`[data-format="${format}"]`).classList.add('active');

        Object.values(this.views).forEach(view => view.classList.remove('active'));
        this.views[format].classList.add('active');

        this.views[format].style.animation = 'none';
        setTimeout(() => {
            this.views[format].style.animation = 'fadeInScale 0.4s ease forwards';
        }, 10);
    }

    populateMarkdownView() {
        const markdownCode = this.views.markdown.querySelector('.markdown-code');
        const markdown = this.generateMarkdown();
        markdownCode.textContent = markdown;
    }

    populateXMLView() {
        const xmlCode = this.views.xml.querySelector('.xml-code');
        const xml = this.generateXML();
        xmlCode.textContent = xml;
    }

    generateMarkdown() {
        return `# Testimonial

## ${this.name}
**${this.title}**

---

### Review

> ${this.text}

---

*Format: Markdown*
*Generated: ${new Date().toLocaleDateString()}*`;
    }

    generateXML() {
        const escapeXML = (str) => {
            return str.replace(/[<>&'"]/g, (char) => {
                switch (char) {
                    case '<': return '&lt;';
                    case '>': return '&gt;';
                    case '&': return '&amp;';
                    case "'": return '&apos;';
                    case '"': return '&quot;';
                }
            });
        };

        return `<?xml version="1.0" encoding="UTF-8"?>
<testimonial>
  <client>
    <name>${escapeXML(this.name)}</name>
    <title>${escapeXML(this.title)}</title>
  </client>
  <content>
    <text>${escapeXML(this.text)}</text>
    <metadata>
      <format>XML</format>
      <generated>${new Date().toISOString()}</generated>
    </metadata>
  </content>
</testimonial>`;
    }
}

// ============================
// ABOUT ME MARKDOWN HOVER
// ============================
function initAboutMarkdownHover() {
    const aboutText = document.querySelector('.about-text');
    const markdownCode = document.querySelector('.about-markdown-code');

    if (!aboutText || !markdownCode) return;

    const intro = aboutText.dataset.intro;
    const details = aboutText.dataset.details;
    const quote = aboutText.dataset.quote;

    const markdown = `# About Me

## Introduction

${intro}

## Background

${details}

## Philosophy

> ${quote}

---

**Format:** Markdown
**Last Updated:** ${new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})}

---

### Tags
\`technical-writing\` \`documentation\` \`api-docs\` \`content-strategy\`

---

_Hover away to see the normal view_`;

    markdownCode.textContent = markdown;
}

// ============================
// INITIALIZE ALL
// ============================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        new TestimonialFormatter(card);
    });

    // Initialize About Me markdown hover
    initAboutMarkdownHover();

    // Add smooth fade-in on load
    const elements = document.querySelectorAll('.hero-title span, .hero-subtitle, .nav-link');
    elements.forEach((el, index) => {
        el.style.animation = `fadeIn 0.6s ease ${index * 0.1}s forwards`;
        el.style.opacity = '0';
    });
});

// ============================
// RANDOM FLICKER EFFECTS
// ============================
setInterval(() => {
    const randomElements = document.querySelectorAll('.light-letter, .blinking-letter');
    const randomElement = randomElements[Math.floor(Math.random() * randomElements.length)];

    if (randomElement) {
        randomElement.style.opacity = '0.2';
        setTimeout(() => {
            randomElement.style.opacity = '1';
        }, 100);
    }
}, 3000);

// ============================
// DEMOGORGON INTERACTION
// ============================
document.querySelectorAll('.demogorgon').forEach(demo => {
    demo.addEventListener('mouseenter', () => {
        demo.style.opacity = '0.4';
        demo.style.filter = 'blur(0px)';
        demo.style.transform = 'scale(1.2)';
    });

    demo.addEventListener('mouseleave', () => {
        demo.style.opacity = '0.15';
        demo.style.filter = 'blur(2px)';
        demo.style.transform = 'scale(1)';
    });
});

// ============================
// PERFORMANCE OPTIMIZATION
// ============================
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

// Log initialization
console.log('%c🎬 STRANGER THINGS PORTFOLIO LOADED 🎬', 'color: #ff0000; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #ff0000;');
console.log('%cWelcome to the Upside Down...', 'color: #00d9ff; font-size: 14px;');
