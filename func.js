window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("home");
    image.style.transform = "rotate(" + window.scrollY/2 + "deg)";
}