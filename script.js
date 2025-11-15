var sibutton = document.getElementById("si");
var nobutton = document.getElementById("no");
var confirmbutton = document.getElementById("confirmar");
var respuesta = document.getElementById("respuesta");
var imgllorando = document.getElementById("imgllorando");
var imgfeliz = document.getElementById("imgfeliz");

const mensajesNo = [
    "anda amor por favor perdoname:c",
    "todavia quiero estar contigo acepta mi perdon 🥺",
    "anda amor reconsidera tu desicion",
    "Piensalo mejor:C enserio no quiero perderte",
    "por favor no me hagas esto :c",
    "te prometo que no volvera a pasar 🥹",
];

const mensajesSi = [
    "Gracias por perdonarme 🥺 Prometo no volver a fallarte."
];

let indiceNo = 0;
let indiceSi = 0;
let escala = 1;

if (nobutton) {
    nobutton.addEventListener("click", function() {
        respuesta.textContent = mensajesNo[indiceNo];
        indiceNo = (indiceNo + 1) % mensajesNo.length;
        escala += 0.5;
        imgllorando.style.display = "block";
        imgfeliz.style.display = "none";
        sibutton.style.transform = `scale(${escala})`;
        nobutton.style.transform = 'translate(' + (Math.random() * 300 - 150) + 'px, ' + (Math.random() * 300 - 150) + 'px)';
    });
}

if (sibutton) {
    sibutton.addEventListener("click", function() {
        respuesta.textContent = mensajesSi[indiceSi];
        imgfeliz.style.display = "block";
        imgllorando.style.display = "none";
        nobutton.style.display = "none";
        sibutton.style.display = "none";
        sibutton.style.transform = 'scale(1)';
        escala = 1;
        indiceSi = (indiceSi + 1) % mensajesSi.length;
    });
}

if (confirmbutton) {
    confirmbutton.addEventListener("click", function() {
        respuesta.textContent = "Confirmado. La decisión final ha sido tomada.";
    });
}
