import { ColorControl } from "./ColorControl.js";
import { Combination } from "./Combination.js";

export class Game {
    #maxAttempts: number;
    #combinationSize: number;
    #availableColors: Array<string>;
    #targetCombination:  Combination;
    #currentAttempt: number;

    constructor(maxAttempts: number, combinationSize: number,  availableColors: Array<string>){
        this.#maxAttempts = maxAttempts;
        this.#combinationSize = combinationSize;
        this.#availableColors = availableColors;
        this.#targetCombination = this.generateTargetCombination(combinationSize, availableColors);
        this.#currentAttempt = 0;
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

    get currentAttempt():number {
        return this.#currentAttempt;
    }

    incrementCurrentAttempt():void{
        this.#currentAttempt++;
    }

    generateTargetCombination(combinationSize:number, availableColors: Array<string>):Combination{
        const targetCombination = new Combination()
       for(let i=1; i<=combinationSize; i++){
            const newColorControl = new ColorControl(availableColors[ Math.floor(Math.random()*availableColors.length)], "color-square");
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

    generateFeedback(guessCombination: Combination, targetCombination: Combination){
        let rightPositions: Array<number> = [];
        console.log(guessCombination);
        for (let i=0; i<guessCombination.colors.length; i++){
            console.log(guessCombination.colors[i].color.classList[0]);
            console.log(targetCombination.colors[i].color.classList[0]);
            if (guessCombination.colors[i].color.classList[0] == targetCombination.colors[i].color.classList[0]){
                rightPositions.push(i);
            }
        }
        console.log(rightPositions);
        const newFeedbackContainer = document.createElement("div");
        newFeedbackContainer.classList.add("feedback-container");
        for(let i=0; i<rightPositions.length;i++){
            const newFeedbackRightCircle = document.createElement("div");
            newFeedbackRightCircle.classList.add("rojo", "feedback-circle");
            newFeedbackContainer.insertAdjacentElement("afterbegin", newFeedbackRightCircle);
        }
        const historicContainer = document.getElementsByClassName("historic-container")[0];
        historicContainer.insertAdjacentElement("beforeend", newFeedbackContainer);

    }
}