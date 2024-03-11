let k = 0;

document.getElementById("theme").addEventListener("click", () => {
    k++
    if (k % 2 == 1) {
        document.getElementById("back").style.backgroundColor = "rgb(165,203,249)"
    }
    else {
        document.getElementById("back").style.backgroundColor = "rgb(65,103,149)"
    }
}
)