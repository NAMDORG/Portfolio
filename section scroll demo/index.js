document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    window.addEventListener("wheel", (e) => {
        const delta = e.deltaY;

        let currentSection = null;
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                currentSection = section;
            }
        });

        let nextSection = null;
        if (delta > 0 && currentSection.nextElementSibling) {
            nextSection = currentSection.nextElementSibling;
        } else if (delta < 0 && currentSection.previousElementSibling) {
            nextSection = currentSection.previousElementSibling;
        }

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    })
})