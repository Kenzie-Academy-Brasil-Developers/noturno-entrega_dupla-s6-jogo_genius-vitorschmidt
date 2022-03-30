import Game from "./controllers/Game.js";
const button = document.querySelector("button");
const reset = document.querySelectorAll("button")[1];

button.addEventListener("click", () => {
  Game.updateColor(Game.actualState);
  console.log(Game.actualState);
});

reset.addEventListener("click", () => {
  Game.reset();
});
