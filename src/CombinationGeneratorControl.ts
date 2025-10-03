import { ColorControl } from "./ColorControl.js";
import { Combination } from "./Combination.js";
import { CurrentCombinationControl } from "./CurrentCombinationControl.js";
import { Game } from "./Game.js";

export class CombinationGeneratorControl extends ColorControl{
    
    constructor(color: string, currentCombination: Combination, game: Game){
            super(color);
            this.render();
            this.color.addEventListener("click", ()=>{
                if (currentCombination.colors.length < game.combinationSize){
                    const newCurrentCombinationElement: CurrentCombinationControl = new CurrentCombinationControl(color, currentCombination.colors.length, currentCombination, game);
                    currentCombination.colors.push(newCurrentCombinationElement);
                    game.changeButtonState(currentCombination);
                }
                
            })
        }
    

    render(){
        const targetNode = document.getElementById("square-buttons");
        const position: InsertPosition = "beforeend";
        targetNode.insertAdjacentElement(position ,this.color);
    }
}