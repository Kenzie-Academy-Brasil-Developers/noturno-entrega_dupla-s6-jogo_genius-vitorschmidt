class Game {
  static actualState = [];

  static getRandomColor() {
    const colors = ["red", "green", "blue", "yellow"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  static updateColor = (state) => {
    Game.actualState = [...state, Game.getRandomColor()];
  };
}

export default Game;
