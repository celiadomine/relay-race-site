//that it scrolls to top when you click on a label
if (window.innerWidth >= 800) {
    document.addEventListener('DOMContentLoaded', () => {
        const navLabels = document.querySelectorAll('nav label');

        navLabels.forEach(label => {
            label.addEventListener('click', () => {
                window.scrollTo(0, 0);
            });
        });
    });
}