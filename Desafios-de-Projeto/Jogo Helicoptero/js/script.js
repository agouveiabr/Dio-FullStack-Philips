function start() {
  //? Adiciona os personagens ao jogo
  //? $("exemplo") Sintaxe do jquery
  $("#inicio").hide();

  $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
  $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
  $("#fundoGame").append("<div id='inimigo2'></div>");
  $("#fundoGame").append("<div id='amigo' class='anima3'></div>");

  var jogo = {};

  //Game Loop
  jogo.timer = setInterval(loop, 30);

  function loop() {
    movefundo();
  }

  //Funcao que movimenta o fundo do jogo

  function movefundo() {
    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position", esquerda - 1);
  }
}

document.getElementById("btn-start").addEventListener("click", start); //? Inicia o jogo
