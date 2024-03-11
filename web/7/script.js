
document.getElementById("square").addEventListener("click", () => {
    document.getElementById("square").style.top = Math.random() * (1080 - 500) + 150 + "px";
    document.getElementById("square").style.left = Math.random() * (1920 - 650) + 370 + "px";
    document.getElementById("square").style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}); 