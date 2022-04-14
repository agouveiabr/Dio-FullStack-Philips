let jogador = "X";
let jogadorSelecionado = document.getElementById("jogador-selecionado");
jogadorSelecionado.innerHTML = "X";
let vencedor = document.getElementById("vencedor");

function chooseBox(id) {
  let box = document.getElementById(id);
  if (vencedor.innerHTML != "") {
    return;
  }
  if (box.innerHTML == "-") {
    //? se a caixa estiver vazia
    box.innerHTML = jogador;
    box.style.color = "black";
    checkResult();
    changePlayer();
  }
}

function changePlayer() {
  if (jogador == "X") {
    jogador = "O";
  } else {
    jogador = "X";
  }
  jogadorSelecionado.innerHTML = jogador;
}

function checkResult() {
  let box1 = document.getElementById("1").innerHTML;
  let box2 = document.getElementById("2").innerHTML;
  let box3 = document.getElementById("3").innerHTML;
  let box4 = document.getElementById("4").innerHTML;
  let box5 = document.getElementById("5").innerHTML;
  let box6 = document.getElementById("6").innerHTML;
  let box7 = document.getElementById("7").innerHTML;
  let box8 = document.getElementById("8").innerHTML;
  let box9 = document.getElementById("9").innerHTML;

  if (box1 == box2 && box2 == box3 && box1 != "-") {
    //? se a linha 1 estiver preenchida
    showWinner(jogador, 1, 2, 3);
  } else if (box4 == box5 && box5 == box6 && box4 != "-") {
    //? se a linha 2 estiver preenchida
    showWinner(jogador, 4, 5, 6);
  } else if (box7 == box8 && box8 == box9 && box7 != "-") {
    //? se a linha 3 estiver preenchida
    showWinner(jogador, 7, 8, 9);
  } else if (box1 == box4 && box4 == box7 && box1 != "-") {
    //? se a coluna 1 estiver preenchida
    showWinner(jogador, 1, 4, 7);
  } else if (box2 == box5 && box5 == box8 && box2 != "-") {
    //? se a coluna 2 estiver preenchida
    showWinner(jogador, 2, 5, 8);
  } else if (box3 == box6 && box6 == box9 && box3 != "-") {
    //? se a coluna 3 estiver preenchida
    showWinner(jogador, 3, 6, 9);
  } else if (box1 == box5 && box5 == box9 && box1 != "-") {
    //? se a diagonal 1 estiver preenchida
    showWinner(jogador, 1, 5, 9);
  } else if (box3 == box5 && box5 == box7 && box3 != "-") {
    //? se a diagonal 2 estiver preenchida
    showWinner(jogador, 3, 5, 7);
  } else if (
    box1 != "-" &&
    box2 != "-" &&
    box3 != "-" &&
    box4 != "-" &&
    box5 != "-" &&
    box6 != "-" &&
    box7 != "-" &&
    box8 != "-" &&
    box9 != "-"
  ) {
    showWinner(jogador, 0, 0, 0);
  } else {
    return;
  }
}

function showWinner(jogador, i, j, k) {
  if (i != 0) {
    let box1 = document.getElementById(i);
    let box2 = document.getElementById(j);
    let box3 = document.getElementById(k);
    vencedor.innerHTML = `O jogador ${jogador} venceu!`;
    box1.style.background = "green";
    box2.style.background = "green";
    box3.style.background = "green";
  } else {
    document.getElementById("1").style.background = "red";
    document.getElementById("2").style.background = "red";
    document.getElementById("3").style.background = "red";
    document.getElementById("4").style.background = "red";
    document.getElementById("5").style.background = "red";
    document.getElementById("6").style.background = "red";
    document.getElementById("7").style.background = "red";
    document.getElementById("8").style.background = "red";
    document.getElementById("9").style.background = "red";
    vencedor.innerHTML = "Deu velha!";
  }
}

function reset() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).innerHTML = "-";
    document.getElementById(i).style.color = "#eee";
    document.getElementById(i).style.background = "#eee";
  }
  vencedor.innerHTML = "";
}
