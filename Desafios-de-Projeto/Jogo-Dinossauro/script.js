const dino = document.querySelector(".dino");
let isJumping = false;
const background = document.querySelector(".background");
let position = 0;
let score = 0;
let gameOver = false;

function handleKeyUp(e) {
  //? e.keyCode = tecla pressionada
  const key = e.keyCode;
  if (key === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  isJumping = true;
  let upInterval = setInterval(() => {
    if (position >= 200) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;
          dino.style.bottom = position + "px"; //? px = pixels
        }
      }, 20);
    } else {
      position += 20; //? 20 = 20px
      dino.style.bottom = position + "px";
    }
  }, 15); //? tempo de execução, sobe ou desce mais rapido);
}

function createCactus() {
  const cactus = document.createElement("div");
  let cactusPosition = 1800;
  let randomTime = Math.floor(Math.random() * (2000 - 1000)) + 1000; //? numero entre 1k e 2k

  console.log(randomTime);

  cactus.classList.add("cactus");
  cactus.style.left = 1800 + "px";
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if (cactusPosition <= -40) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position <= 60) {
      gameOver = true;
      clearInterval(leftInterval);
      background.removeChild(cactus);
      document.body.innerHTML =
        '<h1 class="game-over">GAME OVER</h1><h2 class="game-over">Sua pontuação foi: ' +
        score +
        "</h2>" +
        '<button class="reset">Reiniciar</button>';
      document.querySelector(".reset").addEventListener("click", resetGame);
    } else if (!gameOver) {
      console.log(gameOver);
      score++;
      document.querySelector(".score").innerHTML = "Score: " + score;
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

function resetGame() {
  location.reload(); //? recarrega a pagina
}

createCactus();
document.addEventListener("keyup", handleKeyUp);
