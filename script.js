// Scroll Reveal Animation for Sections
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add("reveal", "active");
            }
        });
    }

    // Initial check on load
    revealOnScroll();

    // Listen to scroll event
    window.addEventListener("scroll", revealOnScroll);
});

// Console greeting log for visitors inspecting code
console.log("%c Welcome to Jyoti Rajput's Portfolio! 🚀 ", "background: #0284c7; color: #fff; padding: 5px; border-radius: 4px; font-weight: bold;");