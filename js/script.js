const htmlElement = document.documentElement;
const toggleLight = document.querySelector('.dropdown-item.light');
const toggleDark = document.querySelector('.dropdown-item.dark');

const toggleTheme = (button, theme) => {

    if (theme !== "light" && theme !== "dark") {
        throw new Error("Invalid theme mode");
    }

    button.addEventListener("click", () => {
        localStorage.setItem("theme", theme);
        htmlElement.dataset.theme = localStorage.getItem("theme");
    });

    return `Theme color toggle to ${theme} successfully`;
}

!function () {
    htmlElement.dataset.theme = localStorage.getItem("theme") || "light";
    toggleTheme(toggleLight, "light");
    toggleTheme(toggleDark, "dark");
}();