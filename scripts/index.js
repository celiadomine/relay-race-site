// enable keyboard navigation for labels
document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.target.click();
    }
});

function scrollToTop() {
    console.log("scrolling to top")
    window.scrollTo(0, 0);
}

// that it scrolls to top when you click on a label
window.onload = () => {
    const navigationElements = document.querySelectorAll("[name=navigation]");
    for(const element of navigationElements) {
        element.addEventListener("change", scrollToTop);
    }
}
