import { ColorControl } from "./ColorControl.js"
import { Combination } from "./Combination.js";
import { Game } from "./Game.js";

export class CurrentCombinationControl extends ColorControl{
    #indexAtCurrentCombination: number;
    constructor(color: string, index:number, currentCombination: Combination, game: Game){
        super(color);
        this.#indexAtCurrentCombination = index;
        this.render();
        this.color.addEventListener("click", ()=>{
            currentCombination.colors.splice(this.#indexAtCurrentCombination, 1);
            this.color.remove();
            game.changeButtonState(currentCombination);
        })
    }

    render(){
        const targetNode = document.getElementById("current-combination");
        const position: InsertPosition = "beforeend";
        targetNode.insertAdjacentElement(position ,this.color);
    }
}