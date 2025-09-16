/*const redSquare: HTMLElement = document.getElementById("red-square");
redSquare.addEventListener("click", (e)=>{
    if (e.target instanceof HTMLElement){
       if (e.target.classList.contains("red")){
        e.target.classList.replace("red", "green");
       } else if (e.target.classList.contains("green")){
        e.target.classList.replace("green", "red");
       } 
    } 
});*/
const colorButtons = document.querySelectorAll(".color-square");
colorButtons.forEach((element)=>{
    element.addEventListener("click", ()=>{
        //crear nuevo elemento
        //añadir clases del elemento clikado
        //añadir a la sección current combination
    })
})
