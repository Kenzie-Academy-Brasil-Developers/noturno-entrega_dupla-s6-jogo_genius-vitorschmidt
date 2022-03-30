const getRandomColor = () => {
  const colors = ["red", "green", "blue", "yellow"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const updateColor = (array) => {
  array.push(getRandomColor());
};

const button = document.querySelector("button");
const state = [];

button.addEventListener("click", () => {
  updateColor(state);
  console.log(state);
});
