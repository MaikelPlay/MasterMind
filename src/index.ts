const colorsButtons = document.querySelectorAll(".color-square");
const sendCombinationButton = document.getElementById("send-combination-button");
let currentSquareCombination: NodeListOf<Element>;
colorsButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
        //crear nuevo elemento
        currentSquareCombination = document.querySelectorAll(".current-square");
        console.log(currentSquareCombination.length);
        if (currentSquareCombination.length < 4){
        const newCurrentCombinationButton:HTMLElement = document.createElement("div");
        newCurrentCombinationButton.classList.add("current-square");
        //añadir clases de elemento clickado
        if (e.target instanceof HTMLElement){
            e.target.classList.forEach((element) => {
                newCurrentCombinationButton.classList.add(element);
            })
        }

        //añadir a la sección current combination
        sendCombinationButton.insertAdjacentElement('beforebegin', newCurrentCombinationButton);
        }
})
});








/*
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
*/

