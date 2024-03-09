const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
let plastico1 = 1;
let papel1 = 3;
let vidrio1 = 5;
let madera1 = 7;

let madera2 = 7;
let vidrio2 = 5;
let papel2 = 3;
let plastico2 = 1;

let aux = 0;
img1.addEventListener("click", function ()  {
    aux = aux + plastico1
});
img2.addEventListener("click", function ()  {
    aux = aux + papel1
});
img3.addEventListener("click", function ()  {
    aux = aux + vidrio1
});
img4.addEventListener("click", function ()  {
    aux = aux + madera1
});

img5.addEventListener("click", function ()  {
    aux = aux + madera2
    if (aux == 14) {
        img5.style.visibility = "hidden";
        img4.style.visibility = "hidden";
    } else {
        aux = aux * 0
    }
    aux = aux * 0
});
img6.addEventListener("click", function ()  {
    aux = aux + vidrio2
    if (aux == 10) {
        img3.style.visibility = "hidden";
        img6.style.visibility = "hidden";
    } else {
        aux = aux * 0
    }
    aux = aux * 0
});
img7.addEventListener("click", function ()  {
    aux = aux + papel2
    if (aux == 6) {
        img2.style.visibility = "hidden";
        img7.style.visibility = "hidden";
    } else {
        aux = aux * 0
    }
    aux = aux * 0
});
img8.addEventListener("click", function ()  {
    aux = aux + plastico2
    if (aux == 2) {
        img1.style.visibility = "hidden";
        img8.style.visibility = "hidden";
    } else {
        aux = aux * 0
    }
    aux = aux * 0
});