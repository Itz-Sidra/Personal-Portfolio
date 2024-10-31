const themeToggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light'; // Retrieve theme or default to 'light'
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggleButton.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode'; // Set initial button text

themeToggleButton.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save theme in localStorage
    themeToggleButton.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode'; // Update button text
});