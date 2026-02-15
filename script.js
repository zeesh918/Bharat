// Add event listeners for navigation links and social proof metrics or ratings
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => link.addEventListener('click', () => window.location.href = link.pathname));

const socialProofIcons = document.querySelectorAll('.social-proof-icon');
socialProofIcons.forEach(icon => icon.addEventListener('click', () => console.log('Social Proof Icon clicked!')));

// Add event listener for scroll events
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Add a subtle entrance animation when the user scrolls down
        document.body.classList.add('scrolled-down');
    } else {
        // Remove the scrolled-down class when the user scrolls up again
        document.body.classList.remove('scrolled-down');
    }
});
