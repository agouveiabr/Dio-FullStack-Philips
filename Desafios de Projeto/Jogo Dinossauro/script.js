const dino = document.querySelector(".dino");
let isJumping = false;
const background = document.querySelector(".background");
let position = 0;

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
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;
  console.log(randomTime);

  cactus.classList.add("cactus");
  cactus.style.left = 1000 + "px";
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if (cactusPosition <= -40) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position <= 60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
      document.body.innerHTML = "<h1>GAME OVER</h1>";
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener("keyup", handleKeyUp);
