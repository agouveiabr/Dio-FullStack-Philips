function calculadora() {
  const operacao = Number(
    prompt(
      "Escolha uma operação: \n 1 - Soma \n 2 - Subtracao\n 3 - Multiplicacao\n 4 - Divisao\n 5 - Potenciacao\n"
    )
  );

  let n1 = Number(prompt("Insira o primeiro valor"));
  let n2 = Number(prompt("Insira o segundo valor"));
  let result;

  function soma() {
    result = n1 + n2;
    console.log(result);
    alert(`${n1} + ${n2} = ${result}`);
    novaOperacao();
  }

  function subtracao() {
    result = n1 - n2;
    console.log(result);
    alert(`${n1} - ${n2} = ${result}`);
    novaOperacao();
  }

  function multiplicacao() {
    result = n1 * n2;
    console.log(result);
    alert(`${n1} * ${n2} = ${result}`);
    novaOperacao();
  }

  function divisao() {
    result = n1 / n2;
    console.log(result);
    alert(`${n1} / ${n2} = ${result}`);
    novaOperacao();
  }

  function potenciacao() {
    result = n1 ** n2;
    console.log(result);
    alert(`${n1} ** ${n2} = ${result}`);
    novaOperacao();
  }

  function novaOperacao() {
    const denovo = prompt("Deseja realizar outra operacao\n1 - Sim\n2 - Nao");

    if (denovo == 1) {
      calculadora();
    } else if (denovo == 2) {
      alert("Tchau Tchau!");
    } else {
      alert("Digite uma opcao valida");
      novaOperacao();
    }
  }

  switch (operacao) {
    case 1:
      soma();
      break;
    case 2:
      subtracao();
      break;
    case 3:
      multiplicacao();
      break;
    case 4:
      divisao();
      break;
    case 5:
      potenciacao();
      break;
    default:
      alert("Digite uma opcao valida");
  }
}

calculadora();
