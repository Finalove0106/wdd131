// Responsive navigation and dynamic footer information
const menuButton = document.querySelector("#menu-button");
const menuItems = document.querySelector("#primary-navigation");

menuButton.addEventListener("click", () => {
    const isOpen = menuItems.classList.toggle("open");
    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
