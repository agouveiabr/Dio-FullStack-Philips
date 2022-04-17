let order = [];
let clickedOrder = [];
let score = 0;

/*
0 = verde
1 = vermelho
2 = amarelo
3 = azul
*/

const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createElementColor(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
};

lightColor = (element, time) => {
  time = time * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, time - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  });
};

let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }

  if (clickedOrder.length == order.length) {
    alert(`Parabéns, você conseguiu!\nPontuação: ${score}`);
    nextLevel();
  }
};

let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createElementColor(color).classList.add("selected");

  setTimeout(() => {
    createElementColor(color).classList.remove("selected");
    checkOrder();
  }, 250);
};

let createElementColor = (color) => {
  switch (color) {
    case 0:
      return green;
    case 1:
      return red;
    case 2:
      return yellow;
    case 3:
      return blue;
  }
};

function nextLevel() {
  score++;
  shuffleOrder();
}

function gameOver() {
  alert(`Game Over!\nPontuação: ${score}`);
  order = [];
  clickedOrder = [];
  startGame();
}

let startGame = () => {
  alert("Bem vindo ao Gênesis! Iniciando novo jogo!");

  score = 0;
  nextLevel();
};

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

startGame();
