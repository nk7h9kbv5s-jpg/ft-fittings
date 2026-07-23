// FT Fittings Website

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to FT Fittings!");

    const buttons = document.querySelectorAll(".btn, .btn2");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
});
