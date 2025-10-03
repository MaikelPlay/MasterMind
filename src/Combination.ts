import { ColorControl } from "./ColorControl.js";
import { IPrintable } from "./IPrintable.js";

export class Combination {
    #colors: Array<ColorControl>;

    constructor(){
        this.#colors = [];
    }

    get colors():Array<ColorControl> {
        return this.#colors;
    }

    set colors(color:ColorControl){
        this.#colors.push(color);
    }

    deleteColors(){
        this.#colors = [];
        document.getElementById("current-combination").innerHTML = "";
    }

    renderToHistoric(){
        const newHistoricNode: HTMLElement = document.createElement("p");
        newHistoricNode.classList.add("historic-color-combination");
        for (let i=0; i<this.#colors.length; i++){
            const newCurrentCombinationElement: ColorControl = new ColorControl(this.#colors[i].color.classList[0], "historic-color-square");
            newHistoricNode.insertAdjacentElement("beforeend", newCurrentCombinationElement.color);
            //newHistoricCombination.colors.push(newCurrentCombinationElement);
        }
        document.getElementById("historic").insertAdjacentElement("afterbegin", newHistoricNode);
    }




    
}