// ===================================
// PROJECT FIGHTERS - DOWNLOAD PAGE JS
// Interactive elements & download handling
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    initCounterAnimations();
    initFAQAccordion();
    initDownloadButtons();
    initSmoothScrolling();
    initScrollAnimations();
});

// ===================================
// COUNTER ANIMATIONS
// ===================================

function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Lower = faster

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-count');
        let count = 0;
        const increment = target / speed;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target + '+';
            }
        };

        updateCount();
    };

    // Intersection Observer for triggering when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateCounter(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// ===================================
// FAQ ACCORDION
// ===================================

function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ===================================
// DOWNLOAD BUTTONS
// ===================================

function initDownloadButtons() {
    const downloadBtn = document.getElementById('download-windows');
    const downloadModal = document.getElementById('download-modal');
    const modalClose = document.getElementById('modal-close');

    // IMPORTANT: Update this URL with your actual download link
    const DOWNLOAD_URL = 'YOUR_DOWNLOAD_URL_HERE'; // Replace with actual URL

    downloadBtn.addEventListener('click', () => {
        handleDownload();
    });

    modalClose.addEventListener('click', () => {
        downloadModal.classList.add('hidden');
    });

    function handleDownload() {
        // Show modal
        downloadModal.classList.remove('hidden');

        // Track download event (if using analytics)
        trackDownload();

        // Start download after a short delay
        setTimeout(() => {
            // Replace this with your actual download logic
            if (DOWNLOAD_URL !== 'YOUR_DOWNLOAD_URL_HERE') {
                window.location.href = DOWNLOAD_URL;
            } else {
                console.warn('Download URL not configured. Please update DOWNLOAD_URL in download-page.js');
                // For development: simulate download
                setTimeout(() => {
                    alert('Download URL not configured yet. Please see instructions in the code or hosting guide.');
                    downloadModal.classList.add('hidden');
                }, 2000);
            }
        }, 1500);

        // Auto-close modal after download starts
        setTimeout(() => {
            downloadModal.classList.add('hidden');
        }, 4000);
    }

    function trackDownload() {
        // Track download with your analytics (Google Analytics, etc.)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                'event_category': 'launcher',
                'event_label': 'windows',
                'value': 1
            });
        }

        // Store download count in localStorage (optional)
        const downloadCount = parseInt(localStorage.getItem('download_count') || '0') + 1;
        localStorage.setItem('download_count', downloadCount.toString());
        
        console.log('Download tracked:', {
            platform: 'Windows',
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        });
    }
}

// ===================================
// SMOOTH SCROLLING
// ===================================

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .gallery-item, .faq-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===================================
// SYSTEM DETECTION (Optional)
// ===================================

function detectOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform.toLowerCase();

    if (platform.indexOf('win') > -1) return 'windows';
    if (platform.indexOf('mac') > -1) return 'macos';
    if (platform.indexOf('linux') > -1) return 'linux';
    
    return 'unknown';
}

// Auto-detect OS and update button text (optional enhancement)
window.addEventListener('load', () => {
    const os = detectOS();
    const downloadBtn = document.getElementById('download-windows');
    
    // You can customize the button based on OS
    console.log('Detected OS:', os);
});

// ===================================
// GALLERY LIGHTBOX (Optional Enhancement)
// ===================================

function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img && img.src.startsWith('http')) {
                // Open in lightbox or new window
                window.open(img.src, '_blank');
            }
        });
    });
}

// Uncomment to enable lightbox
// initGalleryLightbox();

// ===================================
// KEYBOARD NAVIGATION
// ===================================

document.addEventListener('keydown', (e) => {
    // Close modal with Escape key
    if (e.key === 'Escape') {
        const modal = document.getElementById('download-modal');
        if (modal && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    }
});

// ===================================
// PERFORMANCE OPTIMIZATIONS
// ===================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log('%cPROJECT FIGHTERS', 'font-size: 30px; font-weight: bold; background: linear-gradient(135deg, #5463ff, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%c🎮 Thanks for playing!', 'font-size: 14px; color: #10b981;');
console.log('%cLooking for the download? Update the DOWNLOAD_URL in download-page.js', 'font-size: 12px; color: #a0aec0;');
