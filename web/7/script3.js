
let p1 = false; p2 = false; p3 = false; p4 = false; p5 = false; p6 = false;
document.getElementById("p1").addEventListener("click", () => {
    if (p1){
        p1 = false;
        document.getElementById("p1").style.backgroundColor = "rgb(163, 45, 163)";
        document.getElementById("s1").innerHTML = "";
    }
    else{
        p1 = true;
        document.getElementById("p1").style.backgroundColor = "rgb(200, 80, 200)";
        document.getElementById("s1").innerHTML = "Добавлено в корзину";
    }
    
}); 
document.getElementById("p2").addEventListener("click", () => {
    if (p2){
        p2 = false;
        document.getElementById("p2").style.backgroundColor = "rgb(163, 45, 163)";
        document.getElementById("s2").innerHTML = "";
    }
    else{
        p2 = true;
        document.getElementById("p2").style.backgroundColor = "rgb(200, 80, 200)";
        document.getElementById("s2").innerHTML = "Добавлено в корзину";
    }
}); 

document.getElementById("p3").addEventListener("click", () => {
    if (p3){
        p3 = false;
        document.getElementById("p3").style.backgroundColor = "rgb(163, 45, 163)";
        document.getElementById("s3").innerHTML = "";
    }
    else{
        p3 = true;
        document.getElementById("p3").style.backgroundColor = "rgb(200, 80, 200)";
        document.getElementById("s3").innerHTML = "Добавлено в корзину";
    }
}); 

document.getElementById("p4").addEventListener("click", () => {
    if (p4){
    p4 = false;
    document.getElementById("p4").style.backgroundColor = "rgb(163, 45, 163)";
    document.getElementById("s4").innerHTML = "";
}
else{
    p4 = true;
    document.getElementById("p4").style.backgroundColor = "rgb(200, 80, 200)";
    document.getElementById("s4").innerHTML = "Добавлено в корзину";
}
}); 

document.getElementById("p5").addEventListener("click", () => {
    if (p5){
        p5 = false;
        document.getElementById("p5").style.backgroundColor = "rgb(163, 45, 163)";
        document.getElementById("s5").innerHTML = "";
    }
    else{
        p5 = true;
        document.getElementById("p5").style.backgroundColor = "rgb(200, 80, 200)";
        document.getElementById("s5").innerHTML = "Добавлено в корзину";
    }
}); 
document.getElementById("p6").addEventListener("click", () => {
    if (p6){
        p6 = false;
        document.getElementById("p6").style.backgroundColor = "rgb(163, 45, 163)";
        document.getElementById("s6").innerHTML = "";
    }
    else{
        p6 = true;
        document.getElementById("p6").style.backgroundColor = "rgb(200, 80, 200)";
        document.getElementById("s6").innerHTML = "Добавлено в корзину";
    }
}); 