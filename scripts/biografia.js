document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-theme");

    toggleButton.addEventListener("click", () => {
        if (document.body.classList.contains("light-mode")) {
            document.body.classList.replace("light-mode", "dark-mode");
            toggleButton.textContent = "🌜"; // Cambia el icono a luna
        } else {
            document.body.classList.replace("dark-mode", "light-mode");
            toggleButton.textContent = "🌞"; // Cambia el icono a sol
        }
    });
});