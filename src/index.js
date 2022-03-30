import Game from "./controllers/Game.js";
const button = document.querySelector("button");

button.addEventListener("click", () => {
  Game.updateColor(Game.actualState);
  console.log(Game.actualState);
});
