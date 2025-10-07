import { ColorControl } from "./ColorControl.js";
import { Combination } from "./Combination.js";
import { CombinationGeneratorControl } from "./CombinationGeneratorControl.js";
import { Game } from "./Game.js";


const currentGame = new Game(10, 4, ["rojo", "amarillo", "azul", "rosa", "verde", "morado"]);
const currentCombination = new Combination();
currentGame.availableColors.forEach((element)=>{
    const colorButton = new CombinationGeneratorControl(element, currentCombination, currentGame);
});
document.getElementById("send-combination-button").addEventListener("click", ()=>{
    currentGame.incrementCurrentAttempt();
    const isPlayerWinner:boolean =  currentGame.checkWin(currentCombination);
    const isPlayerLoser: boolean = (currentGame.currentAttempt == currentGame.maxAttempts && !isPlayerWinner)
    if (isPlayerWinner) window.location.href="winner.html";
    if (isPlayerLoser) window.location.href="loser.html";
    if (!isPlayerWinner && !isPlayerLoser){
        currentCombination.renderToHistoric();
        currentGame.generateFeedback(currentCombination, currentGame.targetCombination);
        currentCombination.deleteColors();
        
    }
})

/*



4. Añadir combinación a histórico.
5. Dar feedback de la combinación enviada.


*/