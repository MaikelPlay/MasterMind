import { ColorControl } from "./ColorControl.js";
import { Combination } from "./Combination.js";
import { CombinationGeneratorControl } from "./CombinationGeneratorControl.js";
import { Game } from "./Game.js";


const currentGame = new Game(10, 4, ["rojo", "amarillo", "azul", "rosa", "verde", "morado"]);
const currentCombination = new Combination();
currentGame.availableColors.forEach((element)=>{
    const colorButton = new CombinationGeneratorControl(element, currentCombination, currentGame);
});

/*

2. Comprobar victoria.
3. omprobar derrota.
4. Añadir combinación a histórico.
5. Dar feedback de la combinación enviada.


*/