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

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
// Get the modal
var modal = document.getElementById("modal");

// Get all images with the class "myImg"
var images = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img");

// Loop through all images and add the click event
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
