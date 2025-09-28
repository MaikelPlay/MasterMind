import { ColorControl } from "./ColorControl.js";
import { Combination } from "./Combination.js";
import { Game } from "./Game.js";


const currentGame = new Game(10, 4, ["rojo", "amarillo", "azul", "rosa", "verde", "morado"]);
const currentCombination = new Combination();
currentGame.availableColors.forEach((element)=>{
    const colorButton = new ColorControl(element, currentCombination);
})

