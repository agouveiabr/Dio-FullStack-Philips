function compare(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Digite numeros validos";
  }

  const primeiraFrase = criaPrimeiraFrase(a, b);
  const segundaFrase = criaSegundaFrase(a, b);

  return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(a, b) {
  let saoIguais = "";

  if (a != b) {
    saoIguais = "nao";
  }

  return `Os numeros ${a} e ${b} ${saoIguais} sao iguais.`;
}

function criaSegundaFrase(a, b) {
  const soma = a + b;
  let resultado10 = "menor";
  let resultado20 = "menor";

  if (soma > 10) resultado10 = "maior";
  if (soma > 20) resultado20 = "maior";

  return `Sua soma: ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20!`;
}

console.log(compare(-1, 16));
