export const disableDarkMode = () => {
        toggle(false);
        localStorage.setItem("mode", null);
    }
export const toggle = (isDark) => {
    if (isDark)
        document.body.classList.add("dark-mode");
    else
        document.body.classList.remove("dark-mode");
}
export  const enableDarkMode = () => {
        toggle(true);
        localStorage.setItem("mode", "dark");
}