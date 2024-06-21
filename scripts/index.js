// enable keyboard navigation for labels
document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.target.click();
    }
});

function scrollToTop() {
    window.scrollTo(0, 0);

    // on mobile the main element is the scroll-container (not body)
    document.getElementsByTagName("main")[0].scrollTo(0, 0);
}

// that it scrolls to top when you click on a label
window.onload = () => {
    const navigationElements = document.querySelectorAll("[name=navigation]");
    for(const element of navigationElements) {
        element.addEventListener("change", scrollToTop);
    }
}
