function start() {
  //? Adiciona os personagens ao jogo
  //? $("exemplo") Sintaxe do jquery
  $("#inicio").hide();

  $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
  $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
  $("#fundoGame").append("<div id='inimigo2'></div>");
  $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
  $("#fundoGame").append("<div id='placar'></div>");
  $("#fundoGame").append("<div id='energia'></div>");

  var jogo = {};
  const KEY = {
    W: 87,
    S: 83,
    Barra: 32,
  };
  var velocidade = 5;
  var posicaoY = parseInt(Math.random() * 334);
  var podeAtirar = true;
  var fimDeJogo = false;
  var pontos = 0;
  var salvos = 0;
  var perdidos = 0;
  var energiaAtual = 3;
  var somDisparo = document.getElementById("somDisparo");
  var somExplosao = document.getElementById("somExplosao");
  var musica = document.getElementById("musica");
  var somGameover = document.getElementById("somGameover");
  var somPerdido = document.getElementById("somPerdido");
  var somResgate = document.getElementById("somResgate");

  jogo.pressionou = [];

  //? Adiciona eventos ao jogo
  document.addEventListener("keydown", function (e) {
    jogo.pressionou[e.keyCode] = true;
  });

  document.addEventListener("keyup", function (e) {
    jogo.pressionou[e.keyCode] = false;
  });

  //Game Loop
  jogo.timer = setInterval(loop, 30);

  function loop() {
    movefundo();
    movejogador();
    moveinimigo1();
    moveinimigo2();
    moveamigo();
    colisao();
    placar();
    energia();
  }

  musica.addEventListener(
    "ended",
    function () {
      musica.currentTime = 0;
      musica.play();
    },
    false
  );
  musica.play();

  function movefundo() {
    esquerda = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position", esquerda - 1);
  }

  function movejogador() {
    if (jogo.pressionou[KEY.W]) {
      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top", topo - 10);
      if (topo < 0) {
        $("#jogador").css("top", 0);
      }
    }
    if (jogo.pressionou[KEY.S]) {
      var topo = parseInt($("#jogador").css("top"));
      $("#jogador").css("top", topo + 10);
      if (topo > 430) {
        $("#jogador").css("top", 430);
      }
    }
    if (jogo.pressionou[KEY.Barra]) {
      disparo();
    }
  }

  function disparo() {
    somDisparo.play();
    if (podeAtirar == true) {
      podeAtirar = false;

      topo = parseInt($("#jogador").css("top")); //? Pega a posição do topo do jogador
      posicaoX = parseInt($("#jogador").css("left")); //? Pega a posição da esquerda do jogador
      tiroX = posicaoX + 190; //? Posição X do tiro
      topoTiro = topo + 37; //? Posição Y do tiro
      $("#fundoGame").append("<div id='disparo'></div");
      $("#disparo").css("top", topoTiro);
      $("#disparo").css("left", tiroX);

      var tempoDisparo = window.setInterval(executaDisparo, 30);
    } //Fecha podeAtirar

    function executaDisparo() {
      posicaoX = parseInt($("#disparo").css("left"));
      $("#disparo").css("left", posicaoX + 20);

      if (posicaoX > 900) {
        window.clearInterval(tempoDisparo);
        tempoDisparo = null;
        $("#disparo").remove();
        podeAtirar = true;
      }
    } // Fecha executaDisparo()
  } // Fecha disparo()

  function moveinimigo1() {
    var posicaoX = parseInt($("#inimigo1").css("left"));
    $("#inimigo1").css("left", posicaoX - velocidade);
    $("#inimigo1").css("top", posicaoY);
    if (posicaoX < -20) {
      posicaoY = parseInt(Math.random() * 334);
      posicaoX = 690;
      $("#inimigo1").css("left", posicaoX);
      $("#inimigo1").css("top", posicaoY);
    }
  }

  function moveinimigo2() {
    var posicaoX = parseInt($("#inimigo2").css("left"));
    $("#inimigo2").css("left", posicaoX - (velocidade - 2));
    if (posicaoX < 0) {
      posicaoX = 775;
      $("#inimigo2").css("left", posicaoX);
    }
  }

  function moveamigo() {
    let posicaoX = parseInt($("#amigo").css("left"));
    $("#amigo").css("left", posicaoX + 1);
    if (posicaoX > 900) {
      posicaoX = 0;
      $("#amigo").css("left", posicaoX);
    }
  }

  function colisao() {
    let colisao1 = $("#jogador").collision($("#inimigo1"));
    let colisao2 = $("#jogador").collision($("#inimigo2"));
    let colisao3 = $("#disparo").collision($("#inimigo1"));
    let colisao4 = $("#disparo").collision($("#inimigo2"));
    let colisao5 = $("#jogador").collision($("#amigo"));
    let colisao6 = $("#inimigo2").collision($("#amigo"));

    if (colisao1.length > 0) {
      energiaAtual--;
      inimigo1X = parseInt($("#inimigo1").css("left"));
      inimigo1Y = parseInt($("#inimigo1").css("top"));
      explosao(inimigo1X, inimigo1Y);

      reposicionaInimigo1();
    }
    if (colisao2.length > 0) {
      energiaAtual--;
      inimigo2X = parseInt($("#inimigo2").css("left"));
      inimigo2Y = parseInt($("#inimigo2").css("top"));
      explosao(inimigo2X, inimigo2Y);

      $("#inimigo2").remove();

      reposicionaInimigo2();
    }

    if (colisao3.length > 0) {
      pontos += 100;
      velocidade += 0.3;
      inimigo1X = parseInt($("#inimigo1").css("left"));
      inimigo1Y = parseInt($("#inimigo1").css("top"));

      explosao(inimigo1X, inimigo1Y);
      $("#disparo").css("left", 950);

      reposicionaInimigo1();
    }

    if (colisao4.length > 0) {
      somExplosao.play();
      pontos += 50;
      inimigo2X = parseInt($("#inimigo2").css("left"));
      inimigo2Y = parseInt($("#inimigo2").css("top"));
      $("#inimigo2").remove();

      explosao(inimigo2X, inimigo2Y);
      $("#disparo").css("left", 950);

      reposicionaInimigo2();
    }

    if (colisao5.length > 0) {
      somResgate.play();
      salvos++;
      $("#amigo").remove();
      reposicionaAmigo();
    }

    if (colisao6.length > 0) {
      somPerdido.play();
      perdidos++;
      amigoX = parseInt($("#amigo").css("left"));
      amigoY = parseInt($("#amigo").css("top"));
      explosaoAmigo(amigoX, amigoY);
      $("#amigo").remove();

      reposicionaAmigo();
    }
  }

  function explosao(posicaoX, posicaoY) {
    somExplosao.play();
    $("#fundoGame").append("<div id='explosao1'></div"); //!Nao entendi div nao fecha com >
    //$("fundoGame").append("<div id='explosao1'></div>");
    $("#explosao1").css("background-image", "url(imgs/explosao.png)");
    var div = $("#explosao1");
    div.css("top", posicaoY);
    div.css("left", posicaoX);
    div.animate({ width: 200, opacity: 0 }, "slow");

    var tempoExplosao = window.setInterval(removeExplosao, 1000);
    function removeExplosao() {
      div.remove();
      window.clearInterval(tempoExplosao);
      tempoExplosao = null;
    }
  }

  function explosaoAmigo(amigoX, amigoY) {
    $("#fundoGame").append("<div id='explosao3' class='anima4'></div");
    $("#explosao3").css("top", amigoY);
    $("#explosao3").css("left", amigoX);

    var tempoExplosao3 = window.setInterval(() => {
      $("#explosao3").remove();
      window.clearInterval(tempoExplosao3);
      tempoExplosao3 = null;
    }, 1000);
  }

  function reposicionaInimigo2() {
    var tempoColisao4 = window.setInterval(() => {
      window.clearInterval(tempoColisao4);
      tempoColisao4 = null;

      if (fimDeJogo == false) {
        $("#fundoGame").append("<div id=inimigo2></div");
      }
    }, 5000);
  }

  function reposicionaInimigo1() {
    posicaoY = parseInt(Math.random() * 334);
    $("#inimigo1").css("left", 694);
    $("#inimigo1").css("top", posicaoY);
  }

  function reposicionaAmigo() {
    var tempoAmigo = window.setInterval(() => {
      window.clearInterval(tempoAmigo);
      tempoAmigo = null;

      if (fimDeJogo == false) {
        $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
      }
    }, 6000);
  }

  function placar() {
    $("#placar").html(
      "<h2> Pontos: " +
        pontos +
        " Salvos: " +
        salvos +
        " Perdidos: " +
        perdidos +
        "</h2>"
    );
  }

  function energia() {
    if (energiaAtual == 3) {
      $("#energia").css("background-image", "url(imgs/energia3.png)");
    }

    if (energiaAtual == 2) {
      $("#energia").css("background-image", "url(imgs/energia2.png)");
    }

    if (energiaAtual == 1) {
      $("#energia").css("background-image", "url(imgs/energia1.png)");
    }

    if (energiaAtual == 0) {
      $("#energia").css("background-image", "url(imgs/energia0.png)");

      gameOver();
    }
  }

  function gameOver() {
    fimdejogo = true;
    musica.pause();
    somGameover.play();

    window.clearInterval(jogo.timer);
    jogo.timer = null;

    $("#jogador").remove();
    $("#inimigo1").remove();
    $("#inimigo2").remove();
    $("#amigo").remove();

    $("#fundoGame").append("<div id='fim'></div>");

    $("#fim").html(
      "<h1> Game Over </h1><p>Sua pontuação foi: " +
        pontos +
        "</p>" +
        "<button id='btn-restart' onclick=reiniciaJogo()>Jogar Novamente!</button>"
    );
  }
}

function reiniciaJogo() {
  somGameover.pause();
  $("#fim").remove();
  start();
}

document.getElementById("btn-start").addEventListener("click", start); //? Inicia o jogo
