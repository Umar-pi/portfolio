// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Project card click effect
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card => {
    card.addEventListener("click", () => {
        projectCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
});

// CURSOR GLITTER EFFECT
document.addEventListener("mousemove", (e) => {
    const glitter = document.createElement("div");
    glitter.classList.add("cursor-glitter");
    glitter.style.left = `${e.clientX}px`;
    glitter.style.top = `${e.clientY}px`;
    document.body.appendChild(glitter);

    setTimeout(() => {
        glitter.remove();
    }, 800);
});
```[cite: 5]

Just reply **"next"** for the 4th and final file (`particles.json`)!