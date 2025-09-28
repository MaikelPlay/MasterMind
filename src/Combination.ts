export class Combination{
    #colors: Array<string>;

    constructor(){
        this.#colors = [];
    }

    get colors():Array<string> {
        return this.#colors;
    }

    set colors(color:string){
        this.#colors.push(color);
    }

}