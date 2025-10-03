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


    
}