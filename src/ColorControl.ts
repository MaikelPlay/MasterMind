import { Combination } from "./Combination.js";

export class ColorControl {
    #color: string;

    constructor(color: string, currentCombination: Combination){
        this.#color = color;
        const colorButton: HTMLElement = document.createElement("div");
        colorButton.classList.add(color, "color-square");
        document.getElementById("square-buttons").insertAdjacentElement("beforeend", colorButton);
        colorButton.addEventListener("click", ()=>{
            currentCombination.colors = color;
            console.log(currentCombination);
        })

    }

    get color():string {
        return this.#color;
    }


}