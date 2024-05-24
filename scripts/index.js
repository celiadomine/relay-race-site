// enable keyboard navigation for labels
document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.target.click();
    }
});
