function openOffCanvas() {
    document.getElementById("offCanvasMenu").style.left = "0";
    document.getElementById("backdrop").style.display = "block";
    document.body.style.overflow = "auto";
}

function closeOffCanvas() {
    document.getElementById("offCanvasMenu").style.left = "calc(var(--off_canvas_width) * -1)"; // Slide out the menu
    document.getElementById("backdrop").style.display = "none";
    document.body.style.overflow = "";
}
