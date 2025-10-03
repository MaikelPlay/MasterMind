import { ColorControl } from "./ColorControl.js";
import { Combination } from "./Combination.js";

export class Game {
    #maxAttempts: number;
    #combinationSize: number;
    #availableColors: Array<string>;
    #targetCombination:  Combination;

    constructor(maxAttempts: number, combinationSize: number,  availableColors: Array<string>){
        this.#maxAttempts = maxAttempts;
        this.#combinationSize = combinationSize;
        this.#availableColors = availableColors;
        this.#targetCombination = this.generateTargetCombination(combinationSize, availableColors);
    }
     
    get maxAttempts():number{
        return this.#maxAttempts;
    }

    get combinationSize():number{
        return this.#combinationSize;
    }

    get targetCombination():Combination{
        return this.#targetCombination;
    }

    get availableColors():Array<string>{
        return this.#availableColors;
    }

    generateTargetCombination(combinationSize:number, availableColors: Array<string>):Combination{
        const targetCombination = new Combination()
       for(let i=1; i<=combinationSize; i++){
            const newColorControl = new ColorControl(availableColors[ Math.floor(Math.random()*availableColors.length)])
            targetCombination.colors = newColorControl;
       }
       console.log(targetCombination.colors);
       return targetCombination;
    }

    changeButtonState(currentCombination: Combination){
        const button = document.getElementById("send-combination-button");
        if(currentCombination.colors.length == this.#combinationSize){
            button.removeAttribute("disabled");
        } else {
            button.setAttribute("disabled", "true");
        }
    }

    checkCombinationsAreEqual(comb1:Combination, comb2:Combination):boolean{
        let areCombinationsEqual = true;
        for(let i=0; i<this.combinationSize; i++){
            if(comb1.colors[i].color.classList[0] != comb2.colors[i].color.classList[0]) {
                areCombinationsEqual = false;
                break;
            }
        }
        
        return areCombinationsEqual;
    }

    checkWin(currentCombination:Combination):boolean{
        let isPlayerWinner = false;
        const areCombinationsEqual = this.checkCombinationsAreEqual(currentCombination, this.targetCombination);
        if (areCombinationsEqual) isPlayerWinner = true;
        return isPlayerWinner;
    }
}