export class Game {
    #maxAttempts: number;
    #combinationSize: number;
    #availableColors: Array<string>;
    #targetCombination:  Array<string>;

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

    get targetCombination():Array<string>{
        return this.#targetCombination;
    }

    get availableColors():Array<string>{
        return this.#availableColors;
    }

    generateTargetCombination(combinationSize:number, availableColors: Array<string>):Array<string>{
       let targetCombination: Array<string>=[];
       for(let i=1; i<=combinationSize; i++){
            targetCombination.push(availableColors[ Math.floor(Math.random()*availableColors.length)]);
       }
        return targetCombination;
    }

}