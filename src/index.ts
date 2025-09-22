const colorsButtons = document.querySelectorAll(".color-square");
colorsButtons.forEach((element) => {
    element.addEventListener("click", () => {
        //crear nuevo elemento
        //añadir clases de elemento clikado
        //añadir a la sección current combination
    })
})








const redSquare = document.getElementById("red-square");
redSquare.addEventListener("click", (e) => {
    if (e.target instanceof HTMLElement){
        if (e.target.classList.contains("red")) {
            e.target.classList.replace("red", "green");
        } else if (e.target.classList.contains("green")) {
            e.target.classList.replace("green", "red");
        }
    }
})

const botonCambia: HTMLElement = document.getElementById("botonCambia")

document.getElementById("botonCambia").addEventListener("click", () => {
    document.getElementById("cabecera").innerText += " con VanillaJS"

});

document.getElementById("botonCambia").addEventListener("mouseover", () => {
    document.getElementById("cabecera").classList.add("roja");
})


