// Tab Switching Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons and panes
                document.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.querySelectorAll('.tab-pane').forEach(pane => {
                    pane.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show corresponding tab pane
                const tabId = this.getAttribute('data-tab');
                const tabPane = document.getElementById(tabId);
                if (tabPane) {
                    tabPane.classList.add('active');
                }
            });
        });
    }

    // Mouse Trail Effect (works on all pages)
    // Create custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    // Track mouse movement
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create trail element
        const trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);

        // Remove trail after animation
        setTimeout(() => {
            trail.remove();
        }, 500);
    });

    // Smooth cursor follow
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Scale cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });

    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add active state to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});