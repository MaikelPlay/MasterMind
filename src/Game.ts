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
        for(let i=0; i<this.#combinationSize; i++){
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

    manageRightColorPositions(guess: Array<string>, target: Array<string>):number{
        let numberOfRightPositions:number = 0;
        for (let i=0; i<guess.length; i++){
            if (guess[i] == target[i]){
                numberOfRightPositions++;
                guess.splice(i,1);
                target.splice(i,1);
                i--;
            }
        }
        return numberOfRightPositions;
    }

    renderFeedback(qty: number, color: string){
        const newFeedbackContainer = document.createElement("div");
        newFeedbackContainer.classList.add("feedback-container");
        for(let i=0; i<qty;i++){
            const newFeedbackRightCircle = document.createElement("div");
            newFeedbackRightCircle.classList.add(color, "feedback-circle");
            newFeedbackContainer.insertAdjacentElement("afterbegin", newFeedbackRightCircle);
        }
        const historicContainer = document.getElementsByClassName("historic-container")[0];
        historicContainer.insertAdjacentElement("beforeend", newFeedbackContainer);
    }

    manageWrongPositions(guess: Array<string>, target: Array<string>):number{
        let qtyWrongPositions = 0;

        for(let i=0; i<guess.length; i++){
            for(let j=0; j<target.length; j++){
                if(guess[i]==target[j]){
                    qtyWrongPositions++;
                    target.splice(j, 1);
                }
            }
        }

        return qtyWrongPositions;
    }

    generateFeedback(guessCombination: Combination, targetCombination: Combination){
        let guessColorCombination: Array<string> = guessCombination.createColorStringArray();
        let targetColorCombination: Array<string> = targetCombination.createColorStringArray()
        const qtyRightColorPositions = this.manageRightColorPositions(guessColorCombination, targetColorCombination);
        this.renderFeedback(qtyRightColorPositions, "rojo");
        const qtyWrongPositions = this.manageWrongPositions(guessColorCombination, targetColorCombination);
        this.renderFeedback(qtyWrongPositions, "negro");
    }
}